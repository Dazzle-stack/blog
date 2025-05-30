

let getCourse = (req,res)=>{
   return res.json (courses)
}

let postCourse =  (req, res)=>{
   return res.send ("course successfully created")
}

let putCourse =  (req, res)=>{
   return res.send("course successfully updated")
}

let deleteCourse =  (req, res)=>{
   return res.send("course successfully deleted")
}

module.exports = {getCourse, postCourse, putCourse, deleteCourse}