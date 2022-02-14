"use strict";
document.addEventListener("mousemove", function (e) {
  const body = document.querySelector("body");
  const heart = document.createElement("span");
  const x = e.offsetX;
  const y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  let size = Math.random() * 80;
  heart.style.width = 15 + size + "px";
  heart.style.height = 15 + size + "px";

  let transformValue = Math.random() * 360;
  heart.style.transform = "rotate(" + transformValue + "deg)";
  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 1000);
});
