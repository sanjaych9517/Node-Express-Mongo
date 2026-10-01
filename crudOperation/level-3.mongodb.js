show('dbs')
use("ecomerce")

//  create collection
// db.createCollection('products')

// db.products.insertMany([
//     {
//         name: "iphone",
//         price: 80000,
//         category: "electronics",
//         stock: 10
//     },
//     {

//         name: "Laptop",
//         price: 60000,
//         category: "electronics",
//         stock: 5
//     },
//     {
//         name: "Headphones",
//         price: 80000,
//         category: "electronics",
//         stock: 10
//     },

//     {
//         name: "Shoes",
//         price: 3000,
//         category: "fashion",
//         stock: 15
//     }

// ])

db.products.find()
db.products.find({category : "electronics"})
db.products.count()