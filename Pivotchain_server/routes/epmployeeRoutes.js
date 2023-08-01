import express from "express";
import Employee from "../models/employeeModel.js";
const emp_route = express.Router();

emp_route.post("/create", async (req, res) => {
  try {
    const empolyee = await Employee.create({
      fullName: req.body.fullName,
      email: req.body.email,
      mobile: req.body.mobile,
      city: req.body.city,
    });
    res.status(201).json({
      status: "successfully added",
      empolyee,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

emp_route.get("/read", async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json({
      status: "data access succesfully",
      employee,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

emp_route.put("/update/:id", async (req, res) => {
  try {
    const updateDetail = await Employee.updateOne(
      { _id: req.params.id },
      {
        $set: {
          fullName: req.body.fullName,
          email: req.body.email,
          mobile: req.body.mobile,
          city: req.body.city,
        },
      }
    );
    res.json({
      status: "updated successfully",
      updateDetail,
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

emp_route.delete("/delete/:id", async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.params.id });
    res.json({
      status: "deleted successfully",
    });
  } catch (e) {
    res.json({
      status: "failed",
      message: e.message,
    });
  }
});

export default emp_route;
