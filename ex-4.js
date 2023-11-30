//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let lightMessage;

switch (lightBulbStatus) {
  case "On":
    lightMessage = "Light blub is On.";
    break;
  case "Off":
    lightMessage = "Light blub is Off.";
    break;
  case "Broken":
    lightMessage = "Light blub is Broken.";
    break;
  default:
    lightMessage = "Please choose the correct input (On/Off/Broken)";
    break;
}

console.log(lightMessage);
