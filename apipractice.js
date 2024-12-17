"use strict";

var globlevar = [];
var cart = [];
fetch("https://fakestoreapi.in/api/products")
// fetch("./apipractce.json")
    .then((apidata) => {
        // console.log(apidata);
        return apidata.json();
    })
    .then((actualdata) => {
        console.log(actualdata, "actualdata");
        globlevar = actualdata.products
        printData(actualdata.products)
    })
    .catch((error) => {
        console.log("error", error);
    });

//value print 
function shortdata(data) {
    console.log(globlevar);
    data.map((element, index) => {
        document.getElementById('printing').innerHTML += `<tr><td>${element.id}</td>
                    <td>${element.title}</td>
                    <td>${element.price}</td> 
                    <td>${element.model}</td> 
                   <td>${element.category}</td>
                <td><img src="${element.image} "height="80px" width="80px" id=${`img-1${index}`}  onclick="samesize(${index})"></td>
                <td><button onclick="displyed(${index})">display <button onclick="selected(${index})">selceted</td></tr>`;
    })
}
//for big img display
// function displyed(index) {
//     var img = document.getElementById(`img-1${index}`);
//     // console.log(img.style);
//     img.style.transform = "scale(2)";
//     img.style.transition = "transform 0.25s ease";
// }
// //img orig size
// function samesize(index) {
//     var img = document.getElementById(`img-1${index}`);
//     img.style.transform = "scale(1)";
//     img.style.transition = "transform 0.25s ease";
// }
function printData(products) {
    shortdata(products);
    globlevar.filter((obj, index) => globlevar.findIndex((item) => item.category === obj.category) === index).forEach((wear) => {
        document.getElementById("dropdoenid").innerHTML += `<option>${wear.category}</option>`
    })

}

// function dropdofun() {
//     var dropfun = document.getElementById("dropdoenid").value;
//     document.getElementById("printing").innerHTML = "";
//     console.log(dropfun);
//     if (dropfun === "all") {
//         shortdata(globlevar);
//     }
//     else {
//         var selectdata = globlevar.filter((obj) => {
//             return obj.category === dropfun
//         });
//         shortdata(selectdata);
//     }
// }
// //add value cart
// function carting() {
//     // console.log(cart[0].id);
//     document.getElementById("printing").innerHTML = "";
//     cart.filter((obj, index) => cart.findIndex((item) => item.id === obj.id) === index).map((element, index) => {
//         document.getElementById("paregarph").innerHTML +=
//             `<tr><td>${element.id}</td>
//         <td>${element.title}</td>
//         <td>${element.price}</td> 
//                     <td>${element.model}</td> 
//                     <td>${element.category}</td>
//                     <td><img src="${element.image}  "height="80px" width="80px" 
//                     onclick="samesize(${index})" id=${`img-1${index}`}></td>  
//                     <td><button onclick="displyed(${index})">dispaly</button>
//                     <button onclick="deleting(${index})">delete</button></td> 
//                     </tr>`
//     })

// }
// //value selected
// function selected(index) {
//     cart.push(globlevar[index])

// }

// //delete value
// function deleting(index) {
//     document.getElementById("paregarph").innerHTML = "";
//     cart.splice(index, 1);
//     carting();
//     console.log(cart);
// }
// // console.log(x);
// function allvalue() {
//     shortdata(globlevar);
// }
