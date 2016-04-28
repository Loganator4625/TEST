function function1(){
  //STUFF GOES HERE
  alert("HI!");
}
function function2(){
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
  else {
    alert("Sorry, I do not understand...")
  }
  if(PromptTest === "No"){
    alert("Wow, I really do not like you!!!")
  }
    else {
    alert("Sorry, I do not understand...")
  }
}
