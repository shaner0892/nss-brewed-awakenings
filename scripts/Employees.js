import { getEmployees, getOrders } from "./database.js"

//invoking the imported functions and assigning them to variables
const orders = getOrders()
const employees = getEmployees()

//defining a function that increments the number of orders for each employee
const employeeOrders = (employee, orders) => {
    let filledOrders = 0
    for (const order of orders) {
        if (order.employeeId === employee.id) {
            filledOrders ++
        }
    }
    return filledOrders
}

//this click event displays how many products each employee sold
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} sold ${employeeOrders(employee, orders)} products`)
               }
           }
       }
   }
)

//this function displays a list of employees in html format on the DOM
export const Employees = () => {
    let html = "<ul>"
    //this for...of loop iterates through the employees and prints one at a time
    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }
    html += "</ul>"
    return html
}

