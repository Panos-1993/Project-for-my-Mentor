//Current ratio = current assets / current liabilities 

function myFunctionCurrentRatio() {
    var x3, x4;
    x3 = document.getElementById("Current assets").value;
    x4 = document.getElementById("Current liabilities").value;
    console.log(x3 + x4);
        var result = (Number(x3) / Number(x4));
    console.log(result);
    document.getElementById("resultCurrentRatio").innerHTML = result;
  return result;
}
var wage = document.getElementById("Current liabilities");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionCurrentRatio();
    }
  });