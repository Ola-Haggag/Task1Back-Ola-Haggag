const firstName = "Ola"
const lastName ="Haggag"
const city = "Cairo"
const age = "23"

function mul(x,y){
    console.log(x*y)
}
 

//module.exports = firstName
//module.exports = lastName 


module.exports = {
    fName : firstName,    //key : value
    lName : lastName,
    city : city,
    age : age,
    fun1 : mul
}