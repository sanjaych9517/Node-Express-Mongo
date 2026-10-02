# employees

db.employees.insertMany([
{
name:"Rahul",
salary:50000,
bonous: 10000
},
{
name:"Priya",
salary:50000,
bonous: 5000
},
{
name:"Amit",
salary:45000,
bonous: 15000
},
{
name:"Neha",
salary:70000,
bonous:2000
}
])

---Find employees jaha salary bonous se jada hai---
---Find employee jaha salary bonous se kam hai---
--- find employee jaha salary+ bonous > 60000

# products

db.products.insertMany([
  {
 name: "Laptop",
price: 60000,
discountPrice: 55000
},

{
 name: "Phone",
price: 30000,
discountPrice: 31000
},
{
 name: "Tablet",
price: 20000,
discountPrice: 188000
},
{
 name: "Headphones",
price: 5000,
discountPrice: 4500
},
])

--- find price jaha price discounted price se jada hai ---

# orders

db.orders.insertMany([
{
 product:"Mouse",
stock:50,
sold:30
},
{
 product:"Keyboard",
stock:40,
sold:45
},
{
 product:"Monitor",
stock:20,
sold:10
},
{
 product:"Printer",
stock:15,
sold:15
},
])

--- Find product jaha stock sold se jada hai---

# student  

db.students.insertMany([
{
name: "Rava",
maths: 90,
science: 70
},
{
name: "Anita",
maths: 60,
science: 75
},
{
name: "Karan",
maths: 90,
science: 85
},
{
name: "Pooja",
maths: 50,
science: 65
},
])

--- Find student jaha math marks science se jada hai ---