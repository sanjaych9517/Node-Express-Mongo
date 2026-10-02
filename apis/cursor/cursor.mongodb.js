use('test')

// let arr = []

// for (let i = 1; i <= 100; i++) {
//     arr.push({ value: i })

// }

// db.data.insertMany(arr)

db.data.find()

const cursor = db.data.find()
// console.log(cursor)
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.next())
// console.log(cursor.hasNext())

// while(cursor.hasNext()){
//   console.log(cursor.next())
// }


// db.data.find().sort({value:1})  // assending sort
// db.data.find().sort({value:-1})  // decending sort

// db.data.find().limit(20)

// db.data.find().skip(7)

db.data.find().sort({ value: -1 }).skip(5).limit(8)

