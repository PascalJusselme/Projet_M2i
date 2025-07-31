document.addEventListener("DOMContentLoaded", () => {
  function animationImage() {
    const imgDroite = document.querySelector(".img_pres");
    const imgGauche = document.querySelector(".img_number");

    if (imgDroite) {
      const imgDroiteRect = imgDroite.getBoundingClientRect();

      if (imgDroiteRect.top < window.innerHeight * 0.8) {
        imgDroite.classList.add("is_visible");
      } else {
        imgDroite.classList.remove("is_visible");
      }
    }

    if (imgGauche) {
      const imgGaucheRect = imgGauche.getBoundingClientRect();

      if (imgGaucheRect.top < window.innerHeight * 0.8) {
        imgGauche.classList.add("is_visible");
      } else {
        imgGauche.classList.remove("is_visible");
      }
    }
  }

  window.addEventListener("scroll", () => {
    animationImage();
  });

  const btn_more_descrip_down = document.querySelectorAll(
    "#btn_view_more_down"
  );
  const btn_more_descrip_up = document.querySelectorAll("#btn_view_more_up");

  for (let i = 0; i < btn_more_descrip_down.length; i++) {
    btn_more_descrip_down[i].addEventListener("click", () => {
      const description_mission =
        btn_more_descrip_down[i].parentElement.previousElementSibling;
      console.log("ok");
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

  function openBurgerMenu() {
    document.querySelector(".nav_bar_m").classList.add("open");
    document.querySelector(".overlay_menu_mobile").classList.add("open");
    document.querySelector("#picto_burger").classList.add("open");
    document.querySelector("#btn_close").classList.add("open");
  }

  function closeBurgerMenu() {
    document.querySelector(".nav_bar_m").classList.remove("open");
    document.querySelector(".overlay_menu_mobile").classList.remove("open");
    document.querySelector("#picto_burger").classList.remove("open");
    document.querySelector("#btn_close").classList.remove("open");
  }

  const burgerMenu = document.querySelector("#picto_burger");
  burgerMenu.addEventListener("click", () => {
    openBurgerMenu();
  });

  const overlayBurgerMenu = document.querySelector(".overlay_menu_mobile");
  overlayBurgerMenu.addEventListener("click", () => {
    closeBurgerMenu();
  });

  const btnCloseBurgerMenu = document.querySelector("#btn_close");
  btnCloseBurgerMenu.addEventListener("click", () => {
    closeBurgerMenu();
  });

  const modalWindows = document.getElementById("modal_container");
  const closeModal = document.getElementById("btn_close_modal");
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
