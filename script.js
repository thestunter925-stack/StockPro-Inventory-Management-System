import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// StockPro Inventory Management System
// JavaScript Functionality


// Dashboard Data

let totalProducts = 250;
let lowStock = 12;
let todaySales = 12500;
let totalOrders = 85;



// Display Date

let today = new Date();

document.getElementById("date").innerHTML =
    today.toDateString();




// Update Dashboard

function updateDashboard(){

    document.getElementById("totalProducts").innerHTML =
    totalProducts;


    document.getElementById("lowStock").innerHTML =
    lowStock;


    document.getElementById("todaySales").innerHTML =
    "₹" + todaySales.toLocaleString();


    document.getElementById("totalOrders").innerHTML =
    totalOrders;

}


updateDashboard();





// View Products

function viewProducts(){

    alert(
        "Opening Product Inventory..."
    );

}






// Check Stock

function checkStock(){

    if(lowStock > 0){

        alert(
            lowStock +
            " products need restocking!"
        );

    }

    else{

        alert(
            "All products are available."
        );

    }

}






// Sales Report

function salesReport(){

    alert(
        "Today's Revenue: ₹" +
        todaySales.toLocaleString()
        +
        "\nTotal Orders: "
        +
        totalOrders
    );

}






// View Orders

function viewOrders(){

    alert(
        "Total Orders: " +
        totalOrders
    );

}







// Add Product
async function addProduct(){

    let name = document.getElementById("productName").value;
    let category = document.getElementById("category").value;
    let price = Number(document.getElementById("price").value);
    let stock = Number(document.getElementById("stock").value);

    try {

        await addDoc(collection(db, "products"), {
            name:name,
            category:category,
            price:price,
            stock:stock,
            status:"Available"
        });

        alert("Product Saved Successfully!");

    } catch(error){

        alert("Error: " + error.message);

    }

}
        alert("Product Saved Successfully!");

    } catch(error) {

        alert("Error: " + error.message);

    }

}
    try {

        await addDoc(collection(db, "products"), {
            name: name,
            category: category,
            price: Number(price),
            stock: Number(stock),
            status: Number(stock) > 10 ? "Available" : "Low Stock"
        });

        totalProducts++;
        updateDashboard();

        let table = document.getElementById("productTable");
        let row = table.insertRow();

        row.innerHTML = `
            <td>${totalProducts}</td>
            <td>${name}</td>
            <td>${category}</td>
            <td>${stock}</td>
            <td class="${Number(stock) > 10 ? "green" : "red"}">
                ${Number(stock) > 10 ? "Available" : "Low Stock"}
            </td>
        `;

        alert("Product saved successfully!");

        document.getElementById("productName").value = "";
        document.getElementById("category").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";

    } catch (error) {
        console.error(error);
        alert("Error saving product.");
    }
      }

}







// Sidebar Navigation

let menuItems =
document.querySelectorAll(
".sidebar li"
);


menuItems.forEach(item=>{

    item.onclick=function(){

        menuItems.forEach(
            i=>i.classList.remove("active")
        );


        this.classList.add("active");

    }

});





console.log(
"StockPro Inventory System Loaded Successfully"
);
