use('test')
// db.students.insertOne({
//     _id: 2,
//     name: 'rahul',
//     courses: [
//         {
//             _id: 1,
//             name: 'BCA',
//             price: 150000,
//             duration: 3
//         }
//     ]
// })
// db.students.find({ 'courses.name': "BCA" })

// db.students.insertOne({
//     _id: 3,
//     name: 'mohit',
//     address: {
//         city: 'bhagalpur',
//         state: 'bihar',
//         pincode: 812004
//     }
// })

// db.students.find({'address.city':'bhagalpur'})

// db.students.updateMany(
// { 'address.city': 'bhagalpur' },
//  {$set:{'address.city':'patna'}}
// )

// db.students.find({})

// db.cources.insertOne({
//             _id: 2,
//             name: 'Graphic Design',
//             price: 150000,
//             duration: 1
//         })

// db.cources.find()

// db.students.insertOne({
//     _id: 5,
//     name: 'maha faltu',
// courses:[1, 2]

// })

db.students.aggregate([{
    $lookup: {
        from: 'courses',
        localField: 'cources',
        foreignField: '_id',
        as: 'courses'

    }
}])

