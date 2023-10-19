import { Router } from "express";
import { uploadCSV } from "../controller/data.controller.js";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    file.mimetype === "text/csv" ? cb(null, true) : cb(null, false);
  },
});
const routes = Router();

routes.post("/upload", upload.single("csvFile"), uploadCSV);
routes.get("/test", (req, res) => {
  res.send("Success");
});

export default routes;
