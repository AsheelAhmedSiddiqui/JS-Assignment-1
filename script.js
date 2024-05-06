"use strict";
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let amPm;

if (hour < 12) {
  hour = hour - 12;
  amPm = "AM";
  if (hour > 10) {
    hour = "0" + hour;
  }
} else {
  hour;
  amPm = "PM";
}
if (min < 10) {
  min = "0" + min;
}

document.write(hour + " " + amPm + " : " + min);
