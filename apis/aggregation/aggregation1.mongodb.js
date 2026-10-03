use('test')

// db.products.find(
//     { brand: "Apple" },
//     {
//         name: 1,
//         price: 1,
//         brand: 1,
//         category: 1,
//         _id: 0
//     }).sort({ price: 1 })

db.products.find()

// db.products.aggregate([
//     {
//         $match: {
//             brand: "Apple"
//         }
//     },

//     {
//         $project: {
//             name: 1,
//             price: 1,
//             brand: 1,
//             category: 1,
//             _id: 0
//         }
//     },

//     {
//         $sort: {
//             price: 1
//         }
//     }
// ])

// db.products.aggregate([
//     {
//         $match: {
//             category: 'Mobile'
//         }
//     },
//     {
//         $project: {
//             name: 1,
//             ratings: 1,
//             category: 1,
//             _id: 0,
//             avgrating: {
//                 $avg: '$ratings'
//             }
//         }
//     }
// ])

// $match

// db.products.aggregate([
//     {
//         $match: {
//             category: "Laptop"
//         }
//     }
// ])

// db.products.aggregate([
//     {
//         $group: {
//             _id: '$category',
//             total: { $sum: '$price' },
//             avg: {$avg : ''}



//             // details: {
//             //     $push: {
//             //         productName: '$name',
//             //         price: '$price'
//             //     }

//             // }


//         }
//     }
// ])

// db.orders.aggregate([
//     {
//         $lookup: {
//             from: 'products',
//             localField: 'products.productId',
//             foreignField: '_id',
//             as: 'productDetails'
//         }
//     }
// ])

// unwind

db.products.aggregate([{
  $unwind: '$tags'
}])

// db.products.aggregate([])