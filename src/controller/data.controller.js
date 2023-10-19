import csvParser from "csv-parser";
import catchAsync from "../utils/catchAsync.js";
import { Readable } from "stream";
import validateRow from "../utils/validateRow.js";
import DataModel from "../model/data.model.js";

export const uploadCSV = catchAsync(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const csvData = [];
  const stream = Readable.from(req.file.buffer.toString());

  stream
    .pipe(csvParser())
    .on("data", (row) => {
      const isValidate = validateRow(row);
      if (isValidate) {
        stream.destroy(true);
      }
      csvData.push(row);
    })
    .on("end", async () => {
      if (res.headersSent) {
        return;
      }
      try {
        await DataModel.insertMany(csvData);
        res.status(200).json({ message: "Data upload successful" });
      } catch (err) {
        const errorDetails = {
          field: "Database",
          error: "Error inserting data into the database",
        };
        return res.status(500).json({ errors: [errorDetails] });
      }
    });

  stream.on("error", (err) => {
    res.status(400).json({
      errors: [{ field: "csv", error: "Error in CSV parser stream" }],
    });
  });
});

export const fetchData = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const totalCount = await Data.countDocuments();
  const totalPages = Math.ceil(totalCount / perPage);
  if (page > totalPages || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }
  const data = await Data.find()
    .skip((page - 1) * perPage)
    .limit(perPage);

  res.status(200).json({
    page,
    perPage,
    totalPages,
    totalCount,
    data,
  });
});
