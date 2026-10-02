use('ecomerce')

// print all documents
// db.products.find()

// projection using
// db.products.find({}, {title:1, description:1, price:1})

// Graterr Than
db.products.find({price: {$gt:12.99}}, { title: 1, description: 1, price: 1 })

// Less than

db.products.find({price: {$lt: 12.99}}, {price:1, description:1, title:1})

// Not equal
db.products.find({ price: { $ne: 69.99 }}, {name:1, description:1, price:1})

// Equal to
db.products.find({price:{$eq: 12.99}}, {price:1, description:1, name:1})

// Grater than equal to
db.products.find({price: {$gte: 15.99}}, {name:1, price:1})

// Leess than equal to
db.products.find({ price: { $lte: 15.99 } }, { name: 1, price: 1 })