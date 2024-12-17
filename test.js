"use strict";
// **get dom**
// var element;
// element=document.getElementsByClassName("unlimited-movie-1");
// console.log(element);

// **set dom**
// var element;
// document.getElementById("unlimited-movie-1").innerText="arry";
// document.getElementById("unlimited-movie-1").innerHTML="<h1>arry</h1>";
// document.getElementById("unlimited-movie-1").setAttribute("style","border:10px red dotted");
// document.getElementById("unlimited-movie-1").removeAttribute("class");

// element=document.getElementById("unlimited-movie-1").innerHTML;
// console.log(element);


// **query methods**
// var element;
// document.querySelector(".unlimited-movie-1").innerText = "arry";

// element = document.querySelector(".list");
// element = document.querySelectorAll(".list").innerText;
// console.log(element);


// **dom style methods**
// var element;
// element = document.querySelector(".unlimited-movie-1").style.backgroundColor="tan";
// element = document.querySelector(".unlimited-movie-1").style.color;
// console.log(element);


// **addeventlistemner**
// var element;
// element = document.querySelectorAll(".header")[1].addEventListener("click", abc);
// element = document.querySelectorAll(".header")[1].addEventListener("click", xyz);
// function xyz(){
//     this.style.background="red";
// }

// function abc() {
//     this.style.border="10px solid yellow";
// }
// **removeEventlistemner**
// var element;
// element = document.querySelector(".header").addEventListener("mouseleave", abc);
// element = document.querySelector(".header").addEventListener("click", xyz);
// function abc() {
//     this.style.background = "green";
// }
// function xyz() {
//     document.querySelector(".header").removeEventListener("mouseleave", abc);
// }


// **class-list**
// var element;
// element = document.querySelector(".header").addEventListener("click", abc);
// function abc() {
//  document.querySelector(".header").classList.add("xyz");
//   document.querySelector(".header").classList.remove("xyz");
// var a =  document.querySelector(".header").classList.length;
// var a =  document.querySelector(".header").classList.toggle("xyz");
//  var a =  document.querySelector(".header").classList.item(1);
// var a =  document.querySelector(".header").classList.contains("first");
// console.log(a);
// }

// **dom traversal methods**
// **parentNode**
// var a = document.querySelector(".inner").parentElement.style.background="pink";
// var a = document.querySelector(".inner").parentElement;

// **children**
// var a = document.querySelector(".inner").children[3].style.background="pink";
// var a = document.querySelector(".inner").childNodes;
// console.log(a);

// **firstelement-child**
// var a =document.querySelector(".inner").firstElementChild.style.backgroundColor="red";
// var a =document.querySelector(".inner").firstElementChild;
// console.log(a);

// **lastelements-child**
// var a =document.querySelector(".inner").firstElementChild.style.backgroundColor="red";
// var a =document.querySelector(".inner").firstElementChild;
// console.log(a);

// **fistchild-last**
// var a =document.querySelector(".inner").firstChild;
// console.log(a);

// **next and previous element sibling**
// var a = document.querySelector(".b").previousElementSibling.style.background="yellow";
// var a = document.querySelector(".b").previousElementSibling;
// var a = document.querySelector(".b").nextElementSibling;
// console.log(a);

// -->**create element-->**

// **append**
// var a = document.createElement("h2");
// var b = document.createTextNode("this just a laptop");
// var c = document.createComment("this just a laptop");
// a.appendChild(b);
// document.querySelector(".c").appendChild(a);
// console.log(a);
// console.log(b);
// console.log(c);

// **insertBefore**
// var a = document.createElement("h2");
// var b = document.createTextNode("this just a laptop");
// a.appendChild(b);
// document.querySelector(".c").appendChild(a);
// var target=document.querySelector(".c");
// target.insertBefore(a,target.childNodes[0]);

// -->**create element-->**
// var a = document.createElement("h2");
// var b = document.createTextNode("this is just a number");
// a.appendChild(b);
// console.log(a);
// var c = document.querySelector(".c");
// var d = c.childNodes[0];
// c.replaceChild(a,d);

// -->**replace child-->**
// var a = document.createElement("h4");
// var b = document.createTextNode("its a just a num");
// a.appendChild(b);
// console.log(a);
// var c = document.querySelector(".c");
// var d = c.children[0];
// c.replaceChild(a,d);

// **remove-child**
// var c = document.querySelector(".c");
// var d = c.children[0];
// c.removeChild(d);

// **contains**
// var a = document.querySelector(".c");
// var b = document.querySelector(".abc");
// var find = a.contains(b);
// console.log(find);


// **isEqualNode**
// var a = document.querySelector(".list-1").childNodes;
// var b = document.querySelector(".list-2").children[2];
// var equal=a.isEqualNode(b);
// console.log(a);


// **<== from-events -->**
// **oninput**
// function abc(element) {
//     var x = element.value;
//     document.querySelector(".tryp").innerHTML = x;
// }

// **onchange**
// function change(element) {
//     var a = element.value;
//     document.querySelector(".try").innerHTML=a;
// }

// **submit**
// function add() {
//     var a = document.querySelector(".fname").value;
//     alert("hello " + a);
// }

// **invlaid**
// function invalidfun(){
//     alert("plz enter first name");
// }

// **-->animtion-->**

// **setInterval and clearInterval**
// var a = 0;
// var b = setInterval(anim, 100);
// function anim() {
//     a = a + 10;
//     if (a == 200) {
//         clearInterval(b);
//     }
//     else {
//         document.querySelector(".ttt").style.marginLeft = a + "px";
//     }
// }


// **setTimeOut**
// var a = setTimeout(anim, 3000);
// function anim() {

//     document.querySelector(".ttt").style.width="500px";
// }
// function abc(){
//     clearTimeout(a);
// }

// **window-weight and width-methods**
// var iheight = window.innerWidth;
// console.log("innerwidth:"+iheight);

// var oheight=window.outerWidth;
// console.log("outerwidth:"+oheight);

// **window-open**
// var mywindow;
// function abc() {
//     mywindow = window.open("https://www.youtube.com/watch?v=tkMZ5n8EObk&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=86", "", "height=500px,width=500px,top=200px,left=200px");
// }
// function xyz() {
//     mywindow.close();
// }

// **moveby & moveTo**
// var mywindow;
// function openwindow() {
//     mywindow = window.open("", "", "height=200px,width=200px");
//     mywindow.document.write("<p>sssssssss</p>");
// }
// function movewindow() {
//     mywindow.moveTo(100,100);
// }


// **resizeBy & resizeTO**
// var a;
// function openwindow() {
//     a = window.open("", "", "height=200px,width=200px");
//     mywindow.document.write("<p>sssssssss</p>");
// }
// function movewindow() {
//     a.resizeTo(400, 400);
// }

// **scrollTo & scrollby**
// function openwindow(){
//     window.scrollTo(0,-50); 
// }

// **location methods**
// function openwindow(){
//     location.reload();
// }

// **history object methods**
// function openwindow(){
//     history.back();
// }
// function abc(){
//     history.forward();
// }

// **offsetleft and offsetTop**
// var a=document.querySelector(".ttt");
// console.log(a.offsetTop);
// console.log(a.offsetleft);


// **scrollHeight and  scrollWidth**
// var a=document.querySelector(".ttt");
// var b =a.scrollHeight;
// var c =a.scrollWidth;
// console.log(b);
// console.log(c);

// **clientWidth and clientHeight**
// var a = document.addEventListener("mousemove", abc);
// function abc(element) {
//     console.clear();
//     var a = element.clientX;
//     var b = element.clientY;
//     console.log(a);
//     console.log(b);
// }

// **keymethods**
// var a = document.querySelector(".ttt");
// addEventListener("click", abc);
// function abc(e) {
//     console.clear();
// var a = e.ctrlKey;
// if (a) {
//     console.log("you  press control key");
// }
// else {
//     console.log("you not press control key");

// }
// var a = e.shiftKey;
// if (a) {
//     console.log("you  press shift key");
// }
// else {
//     console.log("you not press shift key");

// }
// var a = e.altKey;
// if (a) {
//     console.log("you  press alt key");
// }
// else {
//     console.log("you not press alt key");
// }
// var a = e.metaKey;
// if (a) {
//     console.log("you  press meta key");
// }
// else {
//     console.log("you not press meta key");
// }


// **mouse**
// var a = document.querySelector(".ttt");
// a.addEventListener("mousedown", abc)
// function abc(e) {
//     console.clear();
//     var b = e.button;
//     var color;
//     switch (b) {
//         case 0:
//             color = "red";
//             break;
//         case 1:
//             color = "yellow";
//             break;
//         case 1:
//             color = "pink";
//             break;

//         default:
//             color = "pink";
//             break;
//     }
//     a.style.backgroundColor = color;
// }

// **key**
// var a = document.querySelector(".try").addEventListener("keydown", abc);
// function abc(e) {
//     var b = e.key;
//     console.log(b);
// }


// **online and offline**
// var target = document.querySelector(".ttt");
// window.addEventListener("offline", abc);
// function abc() {
//     target.innerHTML = "you are offline";
//    target.style.backgroundColor="pink";
// }
// window.addEventListener("online", xyz);
// function xyz() {
//     target.innerHTML = "you are online";
//     target.style.backgroundColor="red";

// }


