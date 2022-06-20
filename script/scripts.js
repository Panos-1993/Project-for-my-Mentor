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
