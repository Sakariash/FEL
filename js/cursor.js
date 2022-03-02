//https://codepen.io/ben-holness/pen/poJNzYa -> test for curser effect
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY + 10) + "px; left: " + (e.pageX - 5) + "px;"
  );
});

function clickEffect(e) {
  var effect = document.createElement("div");
  effect.className = "cursoreffect";
  effect.setAttribute(
    "style",
    "top: " + (e.pageY - 16) + "px; left: " + (e.pageX - 21) + "px;"
  );
  document.body.appendChild(effect);
  effect.addEventListener(
    "animationend",
    function () {
      effect.parentElement.removeChild(effect);
    }.bind(this)
  );
}
document.addEventListener("click", clickEffect);
