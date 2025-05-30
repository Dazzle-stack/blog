/*for loop, while loop, for of loop, for in loop */

// let fruits = ["orange","pear","cucumber","banana", "story","named","mango2","cream"];
// for (let x = 0; x < fruits.length; x ++){
//    let newText = `I love to eat ${fruits[3]} a lot`
//    console.log(newText);
// console.log(fruits[x]);
// }
// let x = 0
// while (x < fruits.length) {
//    console.log(fruits[x]);
//    x ++;
   
// }

// let x = 0;
// do {console.log(fruits[x])
//    x++;
//    }
//    while (x < fruits.length);

// for (let x of fruits){
//    console.log(x);
// }

// for (let x in fruits){
//    console.log(fruits[x]);
// }

// Object initialiser or object literal

// let leyFrom = "age"
// let student = {
//    firstName: "William",
//    lastName: "Eze",
//    age: 24,
//    married: true,
//    hobbies: ["coding", "cooking"],
//    getFullName: function(input){
// let fullName = this.firstName + " " + this.lastName + input;
// return fullName;
//    },
// };
// let fullName = student.getFullName(" axia");
// let fullName2 = student.getFullName(" Next college");
// console.log(fullName);
// console.log(fullName2);

// destructuring properties in an object

// let leyFrom = "age"
// let student = {
//    firstName: "William",
//    lastName: "Eze",
//    age: 24,
//    married: true,
//    hobbies: ["coding", "cooking"]
// };

// let {firstName, lastName, age, married, hobbies} = student;
// console.log(firstName);

// spreading in object


// let leyFrom = "age"
// let student = {
//    firstName: "William",
//    lastName: "Eze",
//    age: 24,
//    married: true,
//    hobbies: ["coding", "cooking"]
// };

// let {firstName, ...mama} = student;
// console.log(firstName);
// console.log(mama);

// finding index of an object in an array

// let myStudent = [
//    {name: "Aziz", email: "aziz@gmail.com"},
//    {name: "temitopoe", email:"temi@gmail.com"},
//    {name: "olaoluwa", email: "ola@gmail.com"},
// ];
// let theStudent = myStudent.findIndex((student)=> student.name == "temitope");
// console.log(theStudent);

// let sub = require("./sub")
// let result = sub()
// console.log(result)

// higher order funtion
// function callback(){
//   console.log("callback called")
// }
// function higher(arg){
// arg()
// }
// higher(callback)


// 

// let students = [
//    {name: "damilore", age: 23},
//    {name: "azeze", age: 24},
//    {name: "temitope", age: 25}
// ]
// let isDami = students.find((student)=>{
//    return student.name == "damilore"
// })

// console.log(isDami)
// let express = require("express")

// let app = express()

// app.use(express.json())

// let students = [
//    {id:1, name: "fayo", email: "fayo@gmail.com", password:"55555"},
//    {id:2, name: "azez", email: "azez@gmail.com", password:"55555"},
//    {id:3, name: "temitope", email: "temi@gmail.com", password:"55555"},
//  ]


// app.get("/", (req, res)=>{
//    let  value = subNum()
//    console.log(value)
//    console.log(req.path)
//    return res.json(students)
// })

// app.post("/",(req,res)=>{
//    let payload = req.body;
//    let newPayload = {id:students.length + 1, ...payload}
//    students.push(newPayload)
//    return res.send("this is a post request")
// })
// app.put("/", (req, res)=>{
//    let payload = req.body;
//    let userPosition = students.findIndex((student)=> student.id== payload.id)
//    students.splice(userPosition, 1, payload)
//    return res.send("your account has been updated successfully")
// })
// app.delete("/", (req,res)=>{
//    let payload = req.body
//    let userPosition = students.findIndex((student)=>student.id==payload )
//    students.splice(userPosition, 1,)
//    return res.send("Use has been successfully removed")
// })

// app.get("/forum/question", (req, res)=>{
//    let myPath = req.path
//    let host = req.host
//    console.log(host)
//    console.log(myPath)
//    return res.send("this is get all post")
// })
// app.get("/post/:id/:name", (req,res)=>{
//    let myParam = req.params

//    return res.send("successful")
// })

// app.listen(5000,()=>{
//    console.log("app is listening in port 5000")
// })


// folder structures

let express = require("express")
let app = express()
let studentRoute = require("./route/student.route")
let courseRoute = require("./route/course.route")

// creating end point for the student database manipulation
app.use(studentRoute)
// creating endpoint for courses
app.use(courseRoute)
app.listen(5000, ()=>{
   console.log("app is running on port 5000")
})