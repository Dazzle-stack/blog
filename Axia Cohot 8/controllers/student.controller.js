

let student = require("../models/student.model")

let getStudent = (req,res)=>{
   return res.json (students)
}
let postStudent  = (req,res)=>{
   return res.send ("successfully created")
}
let putStudent  = (req,res)=>{
   return res.send ("successfully updated")
}
let deleteStudent  = (req,res)=>{
   return res.send ("successfully deleted")
}

module.exports = {getStudent, postStudent, putStudent, deleteStudent}