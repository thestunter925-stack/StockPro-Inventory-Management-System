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

function addProduct(){

    let name = prompt(
        "Enter Product Name:"
    );


    if(name != null && name != ""){

        totalProducts++;


        let table =
        document.getElementById(
            "productTable"
        );


        let row =
        table.insertRow();


        row.innerHTML =

        `
        <td>${totalProducts}</td>
        <td>${name}</td>
        <td>New Category</td>
        <td>10</td>
        <td class="green">
        Available
        </td>
        `;


        updateDashboard();


        alert(
            "Product Added Successfully!"
        );

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