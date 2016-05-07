var money = 0;
var ore = 0;
var metal = 0;
var oreModifier = 1;







function javaTest() {
  money += 1;
  document.getElementById("money").innerHTML = money;
}
function moneySellTest() {
  if (money >= 1) {
    money -= 1;
    document.getElementById("money").innerHTML = money;
  }
}
function clearMoneyTest() {
  money = 0
  document.getElementById("money").innerHTML = money;
}

function getOre() {
  ore += 1;
  document.getElementById("ore").innerHTML = ore;
}
function sellOre() {
  metal += ore * oreModifier;
  ore = 0;
  document.getElementById("ore").innerHTML = ore;
  document.getElementById("metal").innerHTML = metal;
}
function increaseModifier() {
  oreModifier *= 1;
  document.getElementById("modifierNumber") = oreModifier;
}












function function1() {
  //STUFF GOES HERE
  alert("HI!");
}
function poop() {
  var PromptTest = prompt("Hello! I am an awesome prompt here to be all cool and stuff! Do you think I am cool? Yes or No?");
  if (PromptTest === "Yes"){
    var PromptTest2 = prompt("Lovely! I think you are a jerk but I will say no more on that! Am I a jerk?");
    if (PromptTest2 ==="No"){
      alert("Agreed! Enjoy the rest of the Webpage...");
      return;
    }
    if (PromptTest2 === "Yes"){
      alert("What?? Screw you man!");
      return;
  }

  }
  if(PromptTest === "No"){
    alert("Wow, I really do not like you!!!")
  }
    else {
    alert("Sorry, I do not understand...")
  }
}
