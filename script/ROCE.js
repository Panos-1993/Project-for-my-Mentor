//Return on capital employed (ROCE) = operating profit + (noncurrent liabilities + total revenue) * % 

function myFunctionROCE() {
    var x15, x16, x17;
    x15 = document.getElementById("OperatingProfit").value;
    x16 = document.getElementById("Non-CurrentLiabilities").value;
    x17 = document.getElementById("Revenue").value;
    console.log(x15 + x16 + x17);
        var result = (Number(x15) + Number(x16) + Number(x17)) / 100;
    console.log(result);
    document.getElementById("resultROCE").innerHTML = result;
  return result;
}
var wage = document.getElementById("Revenue");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionROCE();
    }
  });