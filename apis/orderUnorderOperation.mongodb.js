use('textDb')
// db.createCollection('users')

// db.users.insertMany([
//     { _id: 1, name: "skc" },
//     { _id: 2, name: "sanjay" },
//     { _id: 2, name: "kumar" },
//     { _id: 4, name: "chaudhart" },
// ])

db.users.insertMany([
    { _id: 6, name: "ramesh" },
    { _id: 7, name: "sanjay" },
    { _id: 8, name: "Amit" },
    { _id: 6, name: "saurabh" },
    { _id: 9, name: "ramesh" },
    { _id: 10, name: "rahul" },
], { ordered: false })