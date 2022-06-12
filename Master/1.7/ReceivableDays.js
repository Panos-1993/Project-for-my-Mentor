//Receivable days = receivables / credit sales * 365 

function myFunctionReceivablesDays() {
  var x13, x14;
  x13 = document.getElementById("Receivables").value;
  x14 = document.getElementById("CreditSales").value;
  console.log(x13 + x14);
      var result = (Number(x13) / Number(x14)) * 365;
  console.log(result);
  document.getElementById("resultReceivablesDays").innerHTML = result;
return result;
}
var wage = document.getElementById("CreditSales");
wage.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionReceivablesDays();
  }
});