const dataLogic = require("./dataLogic")
const yargs = require("yargs")

yargs.command({
    command : "add",
    describe : "to add an item",
    builder : {
        fname : {
            describe: "this is the first name description in add command",
            demandOption : true, 
            type : "string"
        },
        lname : {
            describe: "this is the last name description in add command",
           demandOption : true, 
            type : "string"
        }
    } ,
    handler : (x) =>{
        dataLogic.addPerson(x.id , x.fname , x.lname , x.age , x.city) 
    }
})
//////////////////////////Delete

yargs.command ({
    command : "delete",
    describe : "to delete an item", 
    handler : (x) => {
        dataLogic.deleteData(x.id)
    }
})

yargs.command({
    command : "read",
    describe : "to read data",
    builder : {
        id :{
         describe : "This is id describtion in read command",
         demandOption :  true ,
         type : "string"
        }
    },
    handler : (x) => {
        dataLogic.readData(x.id)
    }
})

yargs.command({
    command : "list",
    describe : "to list data" ,
    handler : () => {
        dataLogic.listData()
    }
})

yargs.parse()
