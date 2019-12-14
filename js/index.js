
var menuShow = false;
var btnMenu = document.querySelector("#menu-btn");
var menuBar = document.querySelector(".menu-bar");

btnMenu.addEventListener("click", menuClick);

function menuClick() {
  if (!menuShow) {
    menuBar.style.visibility = "visible";
    btnMenu.innerHTML = "Collapse&nbsp;Menu&nbsp;⤴";
  } else {
    menuBar.style.visibility = "hidden";
    btnMenu.innerHTML = "Show&nbsp;Menu&nbsp;⤵";
  }
  menuShow = !menuShow;
}
