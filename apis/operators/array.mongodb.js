use('test2')


// db.students.insertMany([
//     {
//         name: "Rahul",
//         skills: ["HTML", "CSS", "javaScript"],
//         marks: [70, 80, 90]
//     },
//     {
//         name: "Amit",
//         skills: ["Python", "Java"],
//         marks: [75, 60]
//     },
//     {
//         name: "Priya",
//         skills: ["javaScript", "NodeJS", "MongoDB"],
//         marks: [85, 82, 92]
//     }
// ])

// db.students.find({
//     skills: { $all: ['javaScript']}
// })

// db.students.find({
// skills: {$all: ['javaScript','NodeJS']}
// })
db.students.find()

// size $size


// db.students.find({
// skills: {$size: 3}
// })

// db.students.find({
//     skills: { $in: ['Java', 'HTML']}
// })

// db.students.find({
//     skills: { $nin: ['Java', 'HTML'] }
// })

// db.products.insertMany([
//     {
//         name: "Laptop",
//         reviews: [
//             { user: "Rahul", rataing: 4 },
//             { user: "Amit", rating: 5 }
//         ]
//     },
//     {
//         name: "Mobile",
//         reviews: [
//             { user: "Priya", rating: 3 },
//             { user: "Ankit", rataing: 4 },
//             { user: "Rahul", rataing: 5 }
//         ]
//     }
// ])

// db.products.find({
//     reviews: {
//         $elemMatch: {
//             user: 'Rahul',
//             rating: 5
//         }
//     }
// })

db.products.find({})
