show('dbs')
use('swopApp')
show('collections')
// db.users.find()
// db.users.findOneAndUpdate({ city: 'Bhagalpur' }, { $set: { city: 'Mumbai' } })

// use('ecomerce')
// show('collections')
// db.products.find()

// db.products.findOneAndUpdate({ _id: ObjectId('6abe204e98462e4ce125a112') }, {$set: {price: 200}})

// db.products.find()

// db.products.updateMany(
//     {},
//     { $inc: { stock: 5 } }
// )

// db.products.find()

db.users.find()
db.users.findOneAndUpdate({ name: 'Rahul', }, { $set: { email: 'Rh@gmail.com' }})

db.users.find()