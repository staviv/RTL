
// if use button to toggle direction
/*
var button = document.createElement("button");
button.innerHTML = "RTL";
button.style = "position: fixed; top: 0; left: 0; z-index: 9999";
button.onclick = function() {
  if (document.body.style.direction == "rtl") {
    document.body.style.direction = "ltr";
    button.innerHTML = "RTL";   
  } else {
    document.body.style.direction = "rtl";
    button.innerHTML = "LTR";
  }
};
document.body.appendChild(button);
*/

// if use shortcut key to toggle direction (ctrl+shift+space)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.keyCode == 32) {
    if (document.body.style.direction == "rtl") {
      document.body.style.direction = "ltr";
      //button.innerHTML = "RTL";   
    } else {
      document.body.style.direction = "rtl";
      //button.innerHTML = "LTR";
    }
  }
});