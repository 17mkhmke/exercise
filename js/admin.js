 var products = {
    data:[
        {
            id: 1,
            productName: "Budwiser",
            image : "https://i.postimg.cc/JhCpLBwq/Bud-Special.png",
            price: 200,
            category:"beer",
            quantity: "24 x 330ml"
        },
        {
            id: 2,
            productName: "savanna",
            image : "https://i.postimg.cc/9z377ZYg/Savanna-Pack.jpg",
            price: 200,
            category: "cider",
            quantity: "24 x 330ml"
        },
        {
            id: 3,
            productName: "Russian Bear",
            image : "https://i.postimg.cc/P5TMVn13/Russian-Bear.png",
            price: 154,
            category: "vodka",
            quantity: "1 litre"
        },
        {
            id: 4,
            productName: "4th-street",
            image : "https://i.postimg.cc/pLcnfwCn/4th-Street-Wine.png",
            price: 130,
            category: "wine",
            quantity: "5 litres"
        },
        {
            id: 5,
            productName: "firstwatch",
            image : "https://i.postimg.cc/TPWhrphZ/first-Watch.jpg",
            price: 170,
            category: "whisky",
            quantity: "750ml"
        },
        {
            id: 6,
            productName: "J.C. Le Roux Domaine Premium",
            image : "https://i.postimg.cc/4dsZmdcv/LeRoux.png",
            price: 185,
            category: "champaign",
            quantity: "750ml"
        },
        {
            id: 7,
            productName: "Flying Fish",
            image : "https://i.postimg.cc/WbCxK35N/flying-Fish2-0.webp",
            price: 100,
            category: "beer",
            quantity: "500ml X 6"
        },
        {
            id: 8,
            productName: "Bernini Blush",
            image : "https://i.postimg.cc/mrT69Fdr/Bernini-Blush.png",
            price: 270,
            category: "cider",
            quantity: "440ml x 6"
        },
        {
            id: 9,
            productName: "Old Buck",
            image : "https://i.postimg.cc/JzQCS8vG/oldBuck.png",
            price: 130,
            category: "gin",
            quantity: "750ml"
        },
        {
            id: 10,
            productName: "Hennesy",
            image : "https://i.postimg.cc/D0KPs96K/Hennesy2-1.png",
            price: 420,
            category: "brandy",
            quantity: "750ml"
        },
        {
            id: 11,
            productName: "Gordon's Gin",
            image : "https://i.postimg.cc/50BBSP6d/Gordons.png",
            price: 180,
            category: "gin",
            quantity: "750ml"
        },
        {
            id: 12,
            productName: "Rain Dance",
            image : "https://i.postimg.cc/8zxLQ8vg/raindance.jpg",
            price: 110,
            category: "wine",
            quantity : "5 litres"
        },
    ],
};


console.table(products.data);
document.write
let add = document.querySelector('#btn')
add.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Item added to storage");
})
// function onFormSubmit(){
//     var formData = readFormData();
//     insertNewRecord(formData);
// }
// function readFormData(){
//     var formData ={};
//     formData["id"] = document.getElementById("id").value;
//     formData["ProductName"] = document.getElementById("productName").value;
//     formData["price"] = document.getElementById("price").value;
//     formData["category"] = document.getElementById("category").value;
//     formData["quantity"] = document.getElementById("quantity").value;
//     formData["image"] = document.getElementById("image").value;
//     return formData;
// }

// function insertNewRecord(data) {
//     var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.id;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.productName;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.price;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.category;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.quantity;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = `<a>Edit</a><a>Delete</a>`;
// }

// function submit(){
//     var dataEntered = retrieveData();
// }
// function retrieveData(){
//     var id = document.getElementById("id").value;
//     var productName = document.getElementById("productName").value;
//     var price = document.getElementById("price").value;
//     var category = document.getElementById("category").value;
//     var quantity = document.getElementById("quantity").value;
//     var image = document.getElementById("image").value;
//    var products =[id, productName, price, category, quantity, image];
//    return products;
// }

