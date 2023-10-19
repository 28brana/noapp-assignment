import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    phone: { type: String, required: true }
});

const DataModel = mongoose.model('Data', dataSchema);

export default DataModel;