


var moneydepartment = [{ name: "rajesh", salery: "20000" },
{ name: "kalpesh", salery: "10000" },
{ name: "rakesh", salery: "5000" },
{ name: "kalpesh", salery: "3000" },
{ name: "ramesh", salery: "200200" },
{ name: "rajesh", salery: "300000" },
{ name: "resh", salery: "200200" },
{ name: "rakesh", salery: " 1000" }
]
const trying = moneydepartment.filter((item) => {
    return item.name == "kalpesh";
})
console.log(trying);
var sum = 0;
trying.map((value) => {
    sum += Number(value.salery);
})
console.log(sum);





