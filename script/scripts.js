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
    var wage = document.getElementById("Equity");
    wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionCapitalGearing();
    }
    });

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
    var wage = document.getElementById("FinanceCost");
    wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    myFunctionInterestCover();
    }
    });

function myFunctionInventoryDays() {
      var x9, x10;
      x9 = document.getElementById("Inventory").value;
      x10 = document.getElementById("CoS").value;
      console.log(x9 + x10);
      if (x9 >= 0 && x10 >= 0) {
      var result = (Number(x9) / Number(x10)) * 365;
      console.log(result);
      document.getElementById("resultInventoryDays").innerHTML = result;
      document.getElementById("rresultInventoryDays").style.backgroundColor = "green";
      return result;
    } else {
      document.getElementById("resultInventoryDays").style.backgroundColor = "red";
      }
  }
  var wage = document.getElementById("CoS");
  wage.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
          myFunction();
      }
    });

function myFunctionPayableDays() {
      var x11, x12;
      x11 = document.getElementById("Payables").value;
      x12 = document.getElementById("CreditPurchases").value;
      console.log(x11 + x12);
      if (x11 >= 0 && x12 >= 0){
      var result = (Number(x11) / Number(x12)) * 365;
      console.log(result);
      document.getElementById("resultPayableDays").innerHTML = result;
      document.getElementById("resultPayableDays").style.backgroundColor = "green";
      return result;
      } else {
      document.getElementById("resultPayableDays").style.backgroundColor = "red";
      }
      }
      var wage = document.getElementById("CreditPurchases");
      wage.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionPayableDays();
      }
      });
      
function myFunctionReceivablesDays() {
        var x13, x14;
        x13 = document.getElementById("Receivables").value;
        x14 = document.getElementById("CreditSales").value;
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
        var wage = document.getElementById("CreditSales");
        wage.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        myFunctionReceivablesDays();
        }
      });