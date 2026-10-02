use("test")

// db.employees.insertMany([
//     {
//         name: "Rahul",
//         salary: 50000,
//         bonous: 10000
//     },
//     {
//         name: "Priya",
//         salary: 50000,
//         bonous: 5000
//     },
//     {
//         name: "Amit",
//         salary: 45000,
//         bonous: 15000
//     },
//     {
//         name: "Neha",
//         salary: 70000,
//         bonous: 2000
//     }
// ])

// db.employees.updateOne(
// { name: "Rahul" }, 
// { $set: { salary: 8000 } }
// )


// find employee salary bonous se jada ho
db.employees.find({
    $expr: {
        $lt: ['$salary', '$bonous']
    }
})


// find employee salary bonous se kam ho
db.employees.find({
    $expr: {
        $gt: ['$bonous', '$salary']
    }
})

//  find employee jaha salary +bonous > 60000

db.employees.find({
    $expr: {
        $gt: [
            { $add: ['$bonous', '$salary'] }, 60000
        ]
    }
})