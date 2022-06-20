//Quick ratio = (current assets – inventory) / current liabilities 

function myFunctionQuickRatio() {
    var x3, x4, x5;
    x3 = document.getElementById("Current Assets").value;
    x5 = document.getElementById("Inventory").value;
    x4 = document.getElementById("Current Liabilities").value;
    console.log(x3 + x5 + x4 );
        var result = (Number(x3) - Number(x5)) / (Number(x4));
    console.log(result);
    document.getElementById("resultQuickRatio").innerHTML = result;
  return result;
}
var wage = document.getElementById("Current Liabilities");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionQuickRatio();
    }
  });