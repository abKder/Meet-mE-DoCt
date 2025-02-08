const Login = document.querySelector(".Login1_link");
const iconClose = document.querySelector(".icon_close");

const Cover_box = document.querySelector(".cover_box");
const Login_link = document.querySelector(".login_link");
const Register_link = document.querySelector(".register_link");

function activateCoverBox() {
  Cover_box.classList.add("active");
}

function deactivateCoverBox() {
  Cover_box.classList.remove("active");
}

function activatePopup() {
  Cover_box.classList.add("active-popup");
}

function deactivatePopup() {
  Cover_box.classList.remove("active-popup");
}

Register_link.addEventListener("click", activateCoverBox);
Login_link.addEventListener("click", deactivateCoverBox);
Login.addEventListener("click", activatePopup);
iconClose.addEventListener("click", deactivatePopup);

