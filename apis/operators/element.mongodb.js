use('myusers')

// db.users.insertMany([
//     { name: 'skc', age: 21 },
//     { name: 'sanjay' },
//     { age: 25 },
//     { name: 'Rohan', age: 21 },
//     { name: 'sohan', age: '22' },
//     { name: 'puneet', age: 33 }
// ])


// exist fields
db.users.find({ age: { $exists: true } })
db.users.find({ age: { $exists: false } })
db.users.find({ name: { $exists: true } })

// Type checkings

db.users.find({age: {$type: "int"}})
db.users.find({age: {$type: "string"}})