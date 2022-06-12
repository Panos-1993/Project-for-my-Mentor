//Return on sales (ROS) = operating profit + revenue % 

function myFunctionROS() {
    var x15, x17;
    x15 = document.getElementById("OperatingProfit").value;
    x17 = document.getElementById("Revenue").value;
    console.log(x15 + x17);
        var result = (Number(x15) + Number(x17)) / 100;
    console.log(result);
    document.getElementById("resultROS").innerHTML = result;
  return result;
}
var wage = document.getElementById("Revenue");
wage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
      myFunctionROS();
    }
  });