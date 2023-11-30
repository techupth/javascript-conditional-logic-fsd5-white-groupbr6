//Exercise 2
let lightBulbStatus = "Broken";

let lightMessage;
if (lightBulbStatus === "On") {
  lightMessage = "Light blub is On.";
} else if (lightBulbStatus === "Off") {
  lightMessage = "Light blub is Off.";
} else if (lightBulbStatus === "Broken") {
  lightMessage = "Light blub is Broken.";
} else {
  lightMessage = "Please choose the correct input (On/Off/Broken)";
}

console.log(lightMessage);
