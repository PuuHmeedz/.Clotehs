// const src = require("has");

let List = document.querySelector('.list')

let listCards = [];

let Products = [
	{
		id: 1,
		name: "Pants",
		status: "Availabel",
		price: 150,
		Image: "4483f9931a878aebc74c4ac8217484e9.jpg",
	},
	{
		id: 2,
		name: "T-shirts",
		status: "Availabel",
		price: 100,
		Image: "4483f9931a878aebc74c4ac8217484e9.jpg",
	},
	{
		id: 3,
		name: "Jackets",
		status: "Availabel",
		price: 200,
		Image: "4483f9931a878aebc74c4ac8217484e9.jpg",
	},
	{
		id: 4,
		name: "Hats",
		status: "Availabel",
		price: 50,
		Image: "4483f9931a878aebc74c4ac8217484e9.jpg",
	},
];

// Init function
function initApp() {
    Products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add("productCart")
		newDiv.innerHTML = `
		<div class="imageCart"> 
        <img src = "/Images/Pants/${value.Image}">
		</div>
		<div class="parentCartText">
		<div class="headcart">
		<h3 class="N.O">Name</h3>
		<h3 class="pri">Price</h3>
		<h3 class="stuts">status</h3>
		</div>
		<div class="dataCart"> 
		<div class="title">${value.name}</div>
        <div class="price">${value.price}</div>
        <div class="status">${value.status}</div>
		</div></div>a
        <button onclick="addToCart">Take In Cart</button>
        `;
        List.appendChild(newDiv)
    }) 
}
initApp();

// Add To Cart function