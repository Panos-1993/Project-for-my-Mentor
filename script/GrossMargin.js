//Gross margin = gross profit / revenue % 

function myFunctionGrossMargin() {
    var x5, x6;
    x5 = document.getElementById("GrossProfit").value;
    x6 = document.getElementById("Revenue").value;
    console.log(x5 + x6);
        var result = (Number(x5) / Number(x6)) / 100;
    console.log(result);
    document.getElementById("resultGrossMargin").innerHTML = result;
  return result;
}
var wage = document.getElementById("Revenue");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionGrossMargin();
    }
  });