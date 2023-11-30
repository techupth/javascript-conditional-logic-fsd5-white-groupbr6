//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let lightMessage;
lightMessage =
  lightBulbStatus === "On"
    ? (lightMessage = "Light blub is On.")
    : lightBulbStatus === "Off"
    ? (lightMessage = "Light blub is Off")
    : (lightMessage = "Please choose the correct input (On/Off");
console.log(lightMessage);
