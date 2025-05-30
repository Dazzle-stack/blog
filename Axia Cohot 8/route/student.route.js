let expresss = require("express")

let route = expresss.Router()

let {getStudent, postStudent, putStudent, deleteStudent} = require("../controllers/student.controller")
route.get ("/", getStudent)
route.post ("/", postStudent)
route.put ("/",putStudent)
route.delete ("/", deleteStudent)

module.exports = route