
// **templet string**
// var a = "hello everybody";
// var b = `its a good day ${a} my birthday`;
// document.write(b);

// **arrow function**
// let hello = () => console.log("its a typical");
// hello();

// let welcome =  (name,age)=> {
//     console.log(`hello ${name}-${age}`);
// }
// welcome("raj","20");

// **rest operator**
// function sum(name,...args) {
//     document.write(`its a calling ${name} : `)
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     document.write(sum+"<br>");
// }
// sum("yahuu", 20, 30, 40);
// sum("rajesh", 30, 30, 10);

// **destructuning array**
// var user = ["yahoo", 23,["male", "parmar"]];
// var [name, ...argus] = user;
// console.log(name);
// console.log(argus);   
// console.log(zender);
// console.log(sername);  

// **object**
// var a = {
//     name: "hhhh",
//     age: 22,
//     sername: "parmar"
// }
// var { name, age, sername } = a;
// console.log(name);
// console.log(age);
// console.log(sername);

// **opps**
// class hello {
//     constructor() {
//         var name;
//         console.log("constracter function");
//     }
//     sorry() {
//         console.log("sorry everybody" + this.name);
//     }
// }
// let a = new hello();
// a.name = "anshil maniya";
// a.sorry();

// **inheritance**
// class employe {
//     constructor(name, age, salary) {
//         this.empname = name;
//         this.empage = age;
//         this.empsalry = salary;
//     }
//     info() {
//         document.write(`<h3>itsa manager</h3><br>
//             name:${this.empname}<br>
//             age:${this.empage}<br>
//             salary:${this.empsalry}`)

//     }
// }
// class manager extends employe {
//     info() {
//         let ta = 1000;
//         let pc = 300;
//         let total =this.empsalry+ta+pc;

//         document.write(`<h3>itsa employe</h3><br>
//             name:${this.empname}<br>
//             age:${this.empage}<br>
//             salary:${total}`)
//     }
// }
// let a = new manager("yahuu", 20,20000);
// let b =new employe("rajesh",12,10000);
// a.info();
// b.info();   

// **Promise**
// function prom(a,b) {
//     return new Promise(function (resolve, reject) {
//         var c=a/b;
//         if (a,b) {
//             resolve(`successfull:${c}`);
//         }
//         else {
//             reject("its fails");
//         }
//     })  
// }
// let onfullfilment = (result) =>{
//     console.log(result);
// }
// let onrejection = (error) =>{
//     console.log(error);
// }   
// prom(10,2).then(onfullfilment).catch(onrejection);


// **Promise all**
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("the first promise has resolved");
//         resolve(10);
//     }, 1 * 1000);
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("the second promise has resolved");
//         resolve(20);
//     }, 2 * 1000);
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("the third promise has resolved");
//         resolve(30);
//     }, 3 * 1000);
// })
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`result:${result}`);
// }).catch((error)=>{
//     console.log(`error:${error}`);
// })
// var n;
// function abc() {
//     n = document.querySelector(".try").value;
//     document.querySelector(".ppp").innerHTML = n;

// }






