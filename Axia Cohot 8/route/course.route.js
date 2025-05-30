let express = require("express")

let route = express.Router()

let {getCourse, postCourse, putCourse, deleteCourse} = require("../controllers/course.controller")
route.get ("/course", getCourse )
route.post ("/course", postCourse)
route.put ("/course", putCourse)
route.delete ("/course", deleteCourse)

module.exports = route