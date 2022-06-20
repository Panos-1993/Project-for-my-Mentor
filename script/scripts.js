function myFunctionCapitalGearing() {
    var x1, x2;
    x1 = document.getElementById("Non-Current liabilities").value;
    x2 = document.getElementById("Equity").value;
    console.log(x1 + x2);
    if (x1 >= 0 && x2 >= 0){
    var result = (Number(x1) / Number(x2)) / 100 ;
    console.log(result);
    document.getElementById("resultCapitalGearing").innerHTML = result;
    document.getElementById("resultCapitalGearing").style.backgroundColor = "green";
    return result;
    } else {
    document.getElementById("resultCapitalGearing").style.backgroundColor = "red";
    }
    }
    var capitalGearing = document.getElementById("Equity");
    if (capitalGearing != null){
      capitalGearing.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionCapitalGearing();
    }
    }); }

function myFunctionInterestCover() {
    var x7, x8;
    x7 = document.getElementById("OperatingProfit").value;
    x8 = document.getElementById("FinanceCost").value;
    console.log(x7 + x8);
    if (x7 >= 0 && x8 >= 0){
    var result = (Number(x7) / Number(x8));
    console.log(result);
    document.getElementById("resultInterestCover").innerHTML = result;
    document.getElementById("resultInterestCover").style.backgroundColor = "green";
    return result;
    } else {
      document.getElementById("resultInterestCover").style.backgroundColor = "red";
      }
    }
    var interestCover = document.getElementById("FinanceCost");
    if (interestCover != null){
      interestCover.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionInterestCover();
    }
    }); }

function myFunctionInventoryDays() {
      var x9, x10;
      x9 = document.getElementById("Inventory").value;
      x10 = document.getElementById("CoS").value;
      console.log(x9 + x10);
      if (x9 >= 0 && x10 >= 0) {
      var result = (Number(x9) / Number(x10)) * 365;
      console.log(result);
      document.getElementById("resultInventoryDays").innerHTML = result;
      document.getElementById("resultInventoryDays").style.backgroundColor = "green";
      return result;
    } else {
      document.getElementById("resultInventoryDays").style.backgroundColor = "red";
      }
  }
  var wage = document.getElementById("CoS");
  if (wage != null){
  wage.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionInventoryDays();
      }
    }); }

function myFunctionPayableDays() {
      var x11, x12;
      x11 = document.getElementById("PayablesPayablesDays").value;
      x12 = document.getElementById("CreditPurchasesPayablesDays").value;
      console.log(x11 + x12);
      if (x11 >= 0 && x12 >= 0){
      var result = (Number(x11) / Number(x12)) * 365;
      console.log(result);
      document.getElementById("resultDaysPayable").innerHTML = result;
      document.getElementById("resultDaysPayable").style.backgroundColor = "green";
      return result;
      } else {
      document.getElementById("resultDaysPayable").style.backgroundColor = "red";
      }
      }
      var creditPurchases = document.getElementById("CreditPurchasesPayablesDays");
      if (creditPurchases != null){
        creditPurchases.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionPayableDays();
      }
      }); }

function myFunctionReceivablesDays() {
        var x13, x14;
        x13 = document.getElementById("Receivables").value;
        x14 = document.getElementById("CreditSalesReceivables").value;
        console.log(x13 + x14);
        if (x13 >= 0 && x14 >= 0){
        var result = (Number(x13) / Number(x14)) * 365;
        console.log(result);
        document.getElementById("resultReceivablesDays").innerHTML = result;
        document.getElementById("resultReceivablesDays").style.backgroundColor = "green";
        return result;
        } else {
        document.getElementById("resultReceivablesDays").style.backgroundColor = "red";
        }
        }
        var receivablesDays = document.getElementById("CreditSalesReceivables");
        if (receivablesDays != null){
          receivablesDays.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionReceivablesDays();
        }
      }); }