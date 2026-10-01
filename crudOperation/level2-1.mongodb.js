show('dbs') 
use('swopApp')
show("collections")

//  insert one user

// db.users.insertOne({
// name: "Rahul",
// email: "Rahul@gmail.com",
// city: "Bhagalpur",
// age:21 
// })

// Insert another User

// db.users.insertOne({
// name: "Amit",
// email: "Amit@gmail.com",
// city: "Patna",
// age:19
// })

// Insert 3 users at a Time

// db.users.insertMany([
// {
        
//         name: "Neha",
//         email: "neha@gmail.com",
//         city: "Delhi",
//         age:24
// },
// {
//   name: "Ravi",
// email: "Ravi@gmail.com",
// city :  "Bhagalpur",
// age:29
// },
// {
//     name: "Priya",
//     email: "Priya@gmail.com",
//     city: "Mumbai",
//     age: 29
// }
// ])

// db.users.find()
db.users.find({city: "Bhagalpur"})