// use('users')
// db.users.findOneAndDelete({ name : "Amit"})

show('dbs')
use('swopApp')
show('collections')

db.users.find()

// db.users.findOneAndDelete({ name: "Amit" })

// db.users.findOneAndDelete({ age: {$gt : 27} })
use('ecomerce')
show('collections')

db.products.findOneAndDelete({ name: "Shoes"})
