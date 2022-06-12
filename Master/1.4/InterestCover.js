//Interest cover = operating profit / finance cost 

function myFunctionInterestCover() {
    var x7, x8;
    x7 = document.getElementById("OperatingProfit").value;
    x8 = document.getElementById("FinanceCost").value;
    console.log(x7 + x8);
        var result = (Number(x7) / Number(x8));
    console.log(result);
    document.getElementById("resultInterestCover").innerHTML = result;
  return result;
}
var wage = document.getElementById("FinanceCost");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionInterestCover();
    }
  });