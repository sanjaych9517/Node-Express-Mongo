use('ecomerce')

// And operator
// case-1
db.products.find({ $and: [{ category: 'beauty' }, { price: { $gt: 12.99 } }] }, { title: 1, price: 1, category: 1 })

// case-2

db.products.find({ category: 'beauty' , price: { $gt: 12.99 } })

// OR operator

db.products.find({ $or: [{ categogy: 'beauty' }, { price: {$lt:12.99} }]},{title:1, category:1, price:1})

// NOT Operator

db.products.find({ $or: [{ categogy: 'Apple' },{ price: { $not : { $lt: 12.99 } } }]},{title:1, description:1, price:1})

// Nor operator

db.products.find({ $nor: [{ categogy: 'beauty'},{ price: { $not: { $lt: 5} } }] }, { title: 1, description: 1, price: 1 })