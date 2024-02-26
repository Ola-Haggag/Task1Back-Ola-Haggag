const fs = require("fs")
const allData =require("./allData")

const addPerson = (id ,fname , lname , age , city) => {

    const allData = loadData()


    allData.push({
        id :id,
        fname : fname,
        lname : lname,
        age : age,
        city : city
    })

     saveAllData(allData)

}
const loadData = () => {
   try {
    const DataJson = fs.readFileSync("dataLogic.json").toString()
    return JSON.parse(DataJson)
   }
   catch {
    return []                                
   }
}
const saveAllData = (allData) => {
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("dataLogic.json" , AllDataJson)
}

//////////////////////////////////////////////////////////////////////////////
const deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveAllData(dataToKeep)
    console.log("You have already deleted an Item")
}

///////////////////////////////////////////////////////////////////read

const readData = (id) => {
    const allData = loadData ()

    const itemNeeded = allData.find((obj) => {
        return obj.id == id 
    })

    if (itemNeeded) {
        console.log(itemNeeded)
    }else {
        console.log("id needed not found")
    }
}

/////////////////////////////////////////////////////////////////
const listData = () => {
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname , obj.age , obj.city )
    })
}
/////////////////////////////////////////////////////////////////////////////

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData 
}