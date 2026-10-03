// db.products.insertMany([
//     {
//         _id: 101,
//         name: "iphone 15",
//         category: "Mobile",
//         brand: "Apple",
//         price: 85000,
//         stock: 12,
//         tags: ["electronics", "phone", "ios"],
//         ratings: [5, 4, 5, 3, 4],
//         createdAt: new Date("2025-01-01")
//     },
//     {
//         _id: 102,
//         name: "Galaxy S24",
//         category: "Mobile",
//         brand: "Samsung",
//         price: 74999,
//         stock: 15,
//         tags: ["electronics", "phone", "android"],
//         ratings: [5, 5, 4, 4, 5],
//         createdAt: new Date("2025-01-05")
//     },
//     {
//         _id: 103,
//         name: "MacBook Air M3",
//         category: "Laptop",
//         brand: "Apple",
//         price: 114999,
//         stock: 8,
//         tags: ["electronics", "laptop", "macbook"],
//         ratings: [5, 4, 5, 5, 4],
//         createdAt: new Date("2025-01-10")
//     },
//     {
//         _id: 104,
//         name: "Dell Inspiron 15",
//         category: "Laptop",
//         brand: "Dell",
//         price: 65999,
//         stock: 10,
//         tags: ["electronics", "laptop", "windows"],
//         ratings: [4, 4, 5, 3, 4],
//         createdAt: new Date("2025-01-15")
//     },
//     {
//         _id: 105,
//         name: "AirPods Pro 2",
//         category: "Audio",
//         brand: "Apple",
//         price: 24999,
//         stock: 20,
//         tags: ["electronics", "earbuds", "wireless"],
//         ratings: [5, 5, 4, 5, 4],
//         createdAt: new Date("2025-01-20")
//     },
// ])

// orders   **************

// db.orders.insertMany([
//     {
//         _id: 1001,
//         userId: 201,
//         products: [
//             { productId: 101, quantity: 1 },
//             { productId: 105, quantity: 2 }
//         ],
//         status: "Delivered",
//         paymentMethod: "UPI",
//         shippingAddress: {
//             name: "Rahul Sharma",
//             phone: "9876543210",
//             address: "12 MG Road",
//             city: "Lucknow",
//             state: "Uttar Pradesh",
//             pincode: "226001"
//         },
//         orderDate: new Date("2025-02-01")
//     },

//     {
//         _id: 1002,
//         userId: 202,
//         products: [
//             { productId: 102, quantity: 1 }
//         ],
//         status: "Shipped",
//         paymentMethod: "Credit Card",
//         shippingAddress: {
//             name: "Amit Verma",
//             phone: "9876543211",
//             address: "Sector 62",
//             city: "Noida",
//             state: "Uttar Pradesh",
//             pincode: "201301"
//         },
//         orderDate: new Date("2025-02-05")
//     },

//     {
//         _id: 1003,
//         userId: 203,
//         products: [
//             { productId: 103, quantity: 1 },
//             { productId: 104, quantity: 1 }
//         ],
//         status: "Delivered",
//         paymentMethod: "Net Banking",
//         shippingAddress: {
//             name: "Priya Singh",
//             phone: "9876543212",
//             address: "Gomti Nagar",
//             city: "Lucknow",
//             state: "Uttar Pradesh",
//             pincode: "226010"
//         },
//         orderDate: new Date("2025-02-10")
//     },

//     {
//         _id: 1004,
//         userId: 201,
//         products: [
//             { productId: 104, quantity: 2 },
//             { productId: 105, quantity: 1 }
//         ],
//         status: "Processing",
//         paymentMethod: "Cash on Delivery",
//         shippingAddress: {
//             name: "Rahul Sharma",
//             phone: "9876543210",
//             address: "12 MG Road",
//             city: "Lucknow",
//             state: "Uttar Pradesh",
//             pincode: "226001"
//         },
//         orderDate: new Date("2025-02-15")
//     },

//     {
//         _id: 1005,
//         userId: 204,
//         products: [
//             { productId: 101, quantity: 1 },
//             { productId: 102, quantity: 1 }
//         ],
//         status: "Cancelled",
//         paymentMethod: "Debit Card",
//         shippingAddress: {
//             name: "Vikas Gupta",
//             phone: "9876543213",
//             address: "Civil Lines",
//             city: "Gorakhpur",
//             state: "Uttar Pradesh",
//             pincode: "273001"
//         },
//         orderDate: new Date("2025-02-20")
//     },

//     {
//         _id: 1006,
//         userId: 205,
//         products: [
//             { productId: 103, quantity: 1 },
//             { productId: 105, quantity: 1 }
//         ],
//         status: "Shipped",
//         paymentMethod: "UPI",
//         shippingAddress: {
//             name: "Neha Mishra",
//             phone: "9876543214",
//             address: "Indira Nagar",
//             city: "Kanpur",
//             state: "Uttar Pradesh",
//             pincode: "208001"
//         },
//         orderDate: new Date("2025-02-25")
//     },

//     {
//         _id: 1007,
//         userId: 206,
//         products: [
//             { productId: 102, quantity: 2 },
//             { productId: 105, quantity: 1 }
//         ],
//         status: "Delivered",
//         paymentMethod: "Credit Card",
//         shippingAddress: {
//             name: "Ankit Yadav",
//             phone: "9876543215",
//             address: "Faizabad Road",
//             city: "Ayodhya",
//             state: "Uttar Pradesh",
//             pincode: "224001"
//         },
//         orderDate: new Date("2025-03-01")
//     }
// ])