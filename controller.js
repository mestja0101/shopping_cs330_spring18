"use strict";

class shopping_controller {
	constructor{		
	}

	newItem() {
		let itemname = document.getElementbyId("itemname").value;
		let qty = document.getElementbyId("qty").value;
		let store = document.getElementbyId("store").value;
		let category = document.getElementbyId("category").value;
		let price = document.getElementbyId("price").value;

		let newItem = new Item(itemname, qty, store, category, price);
		let table = document.getElementbyId("body");
		table.appendChild(newItem.makeRow(0));
		sl.ShoppingList.push(newItem);
		sl.saveMe();
	}
}