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


    const links = document.querySelectorAll('[data-target]');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Stop default anchor behavior

        const targetId = this.dataset.target;

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the clicked section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });


  function deactivatePopup() {
  Cover_box.classList.remove("active-popup");

  // Show Home section when popup closes
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active'));

  const homeSection = document.getElementById('home');
  if (homeSection) {
    homeSection.classList.add('active');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
}