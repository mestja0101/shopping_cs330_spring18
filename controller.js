list = new ShoppingList()
count = 0;
function addUpdate(){
	itemname = document.getElementbyId("itemname").value;
	qty = document.getElementbyId("qty").value;
	store = document.getElementbyId("store").value;
	category = document.getElementbyId("category").value;
	price = document.getElementbyId("price").value;
}

myStorage = window.localStorage;

var itemname = localStorage.getItem("itemname");
var qty = localStorage.getItem("qty");
var store = localStorage.getItem("store");
var category = localStorage.getItem("category");
var price = localStorage.getItem("price");