//Payable days = payables / credit purchases * 365 

function myFunctionPayableDays() {
var x11, x12;
x11 = document.getElementById("Payables").value;
x12 = document.getElementById("CreditPurchases").value;
onsole.log(x11 + x12);
var result = (Number(x11) / Number(x12)) * 365;
console.log(result);
document.getElementById("resultPayableDays").innerHTML = result;
return result;
}
var wage = document.getElementById("CreditPurchases");
wage.addEventListener("keydown", function (e) {
if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
myFunctionPayableDays();
}
});