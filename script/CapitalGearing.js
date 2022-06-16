//Capital gearing = noncurrent liabilities (debt) / ordinary shareholders funds (equity) % 

function myFunctionCapitalGearing() {
    var x1, x2;
    x1 = document.getElementById("Non-Current liabilities").value;
    x2 = document.getElementById("Equity").value;
    console.log(x1 + x2);
        var result = (Number(x1) / Number(x2)) / 100 ;
    console.log(result);
    document.getElementById("resultCapitalGearing").innerHTML = result;
  return result;
}
var wage = document.getElementById("Equity");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionCapitalGearing();
    }
  });