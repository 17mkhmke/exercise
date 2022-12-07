let products = {
    data:[{
        id: 1,
        productName: "Budwiser",
        image : "https://i.postimg.cc/JhCpLBwq/Bud-Special.png",
        price: "R200",
        category:"beer",
        quantity: "24 x 330ml"
    },
    {
                id: 2,
                productName: "savanna",
                image : "https://i.postimg.cc/9z377ZYg/Savanna-Pack.jpg",
                price: "R200",
                category: "cider",
                quantity: "24 x 330ml"
        
            },
            {
                id: 3,
                productName: "Russian Bear",
                image : "https://i.postimg.cc/P5TMVn13/Russian-Bear.png",
                price: "R154",
                category: "vodka",
                quantity: "1 litre"
        
            },
            {
                id: 4,
                productName: "4th-street",
                image : "https://i.postimg.cc/pLcnfwCn/4th-Street-Wine.png",
                price: "R130",
                category: "wine",
                quantity: "5 litres"
        
            },
            {
                id: 5,
                productName: "firstwatch",
                image : "https://i.postimg.cc/TPWhrphZ/first-Watch.jpg",
                price: "R170",
                category: "whisky",
                quantity: "750ml"
        
            },
            {
                id: 6,
                productName: "J.C. Le Roux Domaine Premium",
                image : "https://i.postimg.cc/4dsZmdcv/LeRoux.png",
                price: "R185",
                category: "champaign",
                quantity: "750ml"
        
            },
            {
                id: 7,
                productName: "Flying Fish",
                image : "https://i.postimg.cc/WbCxK35N/flying-Fish2-0.webp",
                price: "R100",
                category: "beer",
                quantity: "500ml X 6"
        
            },
            {
                id: 8,
                productName: "Bernini Blush",
                image : "https://i.postimg.cc/mrT69Fdr/Bernini-Blush.png",
                price: "R270",
                category: "cider",
                quantity: "440ml x 6"
        
            },
            {
                id: 9,
                productName: "Old Buck",
                image : "https://i.postimg.cc/JzQCS8vG/oldBuck.png",
                price: "R130",
                category: "gin",
                quantity: "750ml"
        
            },
            {
                id: 10,
                productName: "Hennesy",
                image : "https://i.postimg.cc/D0KPs96K/Hennesy2-1.png",
                price: "R420",
                category: "brandy",
                quantity: "750ml"
        
            },
            {
                id: 11,
                productName: "Gordon's Gin",
                image : "https://i.postimg.cc/50BBSP6d/Gordons.png",
                price: "R180",
                category: "gin",
                quantity: "750ml"

        
            },
            {
                id: 12,
                productName: "Rain Dance",
                image : "https://i.postimg.cc/8zxLQ8vg/raindance.jpg",
                price: "R110",
                category: "wine",
                quantity : "5 litres"
        
            },
],
};
//Create cards
for (let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Contents
    let container = document.createElement("div");
    container.classList.add("container");
    //prodName
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let priceR = document.createElement("small");
    priceR.classList.add("product-price");
    priceR.innerText = i.price;
    container.appendChild(priceR);
    //category
    let categs = document.createElement("p");
    categs.classList.add("product-category");
    categs.innerText = i.category.toUpperCase();
    container.appendChild(categs);
    //quantity
    let quants = document.createElement("i");
    quants.classList.add("product-quantity");
    quants.innerText = i.quantity.toLowerCase();
    container.appendChild(quants);
    card.appendChild(container)
    document.getElementById("Products").appendChild(card)

}

// let products = JSON.parse(localStorage.getItem('products ')) ?
// JSON.parse(localStorage.getItem('products ')) : [
//     {
//         id: 1,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category:"beer",
//         quantity: "24 x 330ml"

//     },
//     {
//         id: 2,
//         productName: "savanna",
//         image : "",
//         price: "R200",
//         category: "cider",
//         quantity: "24 x 330ml"

//     },
//     {
//         id: 3,
//         productName: "Russian Bear",
//         image : "",
//         price: "R154",
//         category: "vodka",
//         quantity: "1 litre"

//     },
//     {
//         id: 4,
//         productName: "4th-street",
//         image : "",
//         price: "R130",
//         category: "wine",
//         quantity: "3 litres"

//     },
//     {
//         id: 5,
//         productName: "firstwatch",
//         image : "",
//         price: "R200",
//         category: "whisky",
//         quantity: "750ml"

//     },
//     {
//         id: 6,
//         productName: "Martini Sparkling",
//         image : "",
//         price: "R185",
//         category: "champaign"

//     },
//     {
//         id: 7,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     },
//     {
//         id: 8,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     },
//     {
//         id: 9,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     },
//     {
//         id: 10,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     },
//     {
//         id: 11,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     },
//     {
//         id: 12,
//         productName: "Budwiser",
//         image : "",
//         price: "R200",
//         category: "cider"

//     }
// ];




/*document.addEventListener('DOMContentLoaded',()=>{
    let countDown = 1600019199
    let flipdown = new flipdown(countDown)
    .start()
    .ifEnded(()=>{
        document.querySelector(".flipdown").innerHTML = `<h2> Special has ended</h2>`
    })
})*/