import mongoose from "mongoose";
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: Number, required: true, unique: true },
  city: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
