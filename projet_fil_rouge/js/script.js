document.addEventListener("DOMContentLoaded", () => {
  const btn_more_descrip_down = document.querySelectorAll(
    "#btn_view_more_down"
  );
  const btn_more_descrip_up = document.querySelectorAll("#btn_view_more_up");

  for (let i = 0; i < btn_more_descrip_down.length; i++) {
    btn_more_descrip_down[i].addEventListener("click", () => {
      const description_mission =
        btn_more_descrip_down[i].parentElement.previousElementSibling;

      description_mission.style.height = "auto";

      btn_more_descrip_down[i].classList.add("visible");
      btn_more_descrip_up[i].classList.toggle("visible");
    });
  }

  for (let i = 0; i < btn_more_descrip_up.length; i++) {
    btn_more_descrip_up[i].addEventListener("click", () => {
      const description_mission =
        btn_more_descrip_up[i].parentElement.previousElementSibling;

      description_mission.style.height = "20px";

      btn_more_descrip_up[i].classList.add("visible");
      btn_more_descrip_down[i].classList.toggle("visible");
    });
  }

  const burgerMenu = document.querySelector(".menu_icon_m");
  burgerMenu.addEventListener("click", () => {
    openBurgerMenu();
  });

  const overlayBurgerMenu = document.querySelector(".overlay_menu_mobile");
  overlayBurgerMenu.addEventListener("click", () => {
    closeBurgerMenu()
  });

  const btnCloseBurgerMenu = document.querySelector(".btn_nav_close");
  btnCloseBurgerMenu.addEventListener("click", () => {
    closeBurgerMenu();
  });

  const modalWindows = document.getElementById("modal_container");
  const closeModal = document.getElementById("close_modal_btn");
  const btnsConnection = document.querySelectorAll(".btn_connection");

  closeModal.addEventListener("click", () => {
    modalWindows.classList.remove("visible_modal");
  });

  modalWindows.addEventListener("click", () => {
    modalWindows.classList.remove("visible_modal");
  });

  for (let i = 0; i < btnsConnection.length; i++) {
    const element = btnsConnection[i];

    element.addEventListener("click", () => {
      modalWindows.classList.add("visible_modal");
    });
  }
});

function openBurgerMenu() {
  document.querySelector('.nav_bar').classList.add('open');
  document.querySelector('.overlay_menu_mobile').classList.add('open');
  document.querySelector('.mobile_title').classList.add('close');
}

function closeBurgerMenu() {
  document.querySelector('.nav_bar').classList.remove('open');
  document.querySelector('.overlay_menu_mobile').classList.remove('open');
  document.querySelector('.mobile_title').classList.remove('close');
}

function gestionBurgerMenu() {
  const overlay = document.querySelector(".overlay_menu_mobile");
  const menu = document.querySelector(".nav_bar");

  if (menu.classList.contains("open")) {
    // Fermeture
      closeBurgerMenu()
  } else {
    // Ouverture
      openBurgerMenu()
  }
}
