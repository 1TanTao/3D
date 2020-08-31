"use strict";

var box = document.getElementById("box");
var items = document.getElementById("items");
init();

function init() {
  box.style.transform = "rotateX(360deg)rotateY(360deg)";
  box.style.transition = "all 24s linear";
  items.style.transform = "rotateX(360deg)rotateY(360deg)";
  items.style.transition = "all 24s linear";
}

setInterval(init, 24000);
setTimeout(init, 100);