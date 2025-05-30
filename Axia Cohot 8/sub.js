// function sub1(a, b){
//     return a - b;
// }


// function sub2(a,b){
//     return a + b;
// }
// module.exports = {sub1, sub2};


let sub2 = require("./sub2")
function sub(){
    sub2()
    return 10 - 2
}
module.exports = sub