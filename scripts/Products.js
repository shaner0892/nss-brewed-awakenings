import { getProducts } from "./database.js"

//invokes the imported function and assigns it to a variable
const products = getProducts()

//exports and defines a function that displays the product names in an unordered list in html format on the DOM
export const Products = () => {
    let html = "<ul>"
    //for...of loop that iterates through the products and prints each ones
    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

