import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => {
    let orderProduct = null
    //this for...of loop iterates through the products to find which product matches the order product
    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }
    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => {
    let orderEmployee = null
    //this for...of loop iterates through the employees to find which sold the product 
    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }
    return orderEmployee
}

//this function prints each transaction in an unordered list in html format in the DOM
export const Orders = () => {
    let html = ""
    html = "<ul>"
    //this for...of loop iterates through the orders and displays them 
    for (const order of orders) {
        //here you are invoking the above functions to find the employee and product involved in each transaction
        let product = findProduct(order, products)
        let employee = findEmployee(order, employees)
        if (employee !== null){
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        }
    }
    html += "</ul>"
    return html
}

