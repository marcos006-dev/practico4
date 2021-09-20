const { Router } = require("express");
const {
  getStudents,
  addStudents,
} = require("../controllers/students.controller");
const router = Router();

router.get("/", getStudents);

router.post("/", addStudents);

module.exports = router;
