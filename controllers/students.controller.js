const student = require("../models/students.model");

const objStudents = {};

objStudents.getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.json(allStudents);
  } catch (err) {
    console.error("Error in students module", err);
    res.json({ Error: err });
  }
};

objStudents.addStudents = async (req, res) => {
  try {
    const newStudent = new student(req.body);
    await newStudent.save();
    res.json({ Student: "Added successfully" });
  } catch (err) {
    console.error("Error in students module", err);
    res.json({ Error: err });
  }
};

module.exports = objStudents;
