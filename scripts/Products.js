import { getProducts } from "./database.js"

//this click event displays the price of each product
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs $${product.price}.`)
               }
           }
       }
   }
)

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
