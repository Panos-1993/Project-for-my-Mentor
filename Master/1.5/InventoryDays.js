//Inventory days = inventory / cost of sales * 365 

function myFunction() {
    var x9, x10;
    x9 = document.getElementById("Inventory").value;
    x10 = document.getElementById("CoS").value;
    console.log(x9 + x10);
        var result = (Number(x9) / Number(x10)) * 365;
    console.log(result);
    document.getElementById("resultInventoryDays").innerHTML = result;
  return result;
}
var wage = document.getElementById("CoS");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunction();
    }
  });