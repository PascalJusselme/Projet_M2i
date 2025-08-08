function handleCredentialResponse(response) {
  console.log("La fonction handleCredentialResponse a été appelée !");

  console.log("Encoded JWT ID token: " + response.credential);

  logginSuccess();
}

function logginSuccess() {
  localStorage.setItem("isLogged", "true");

  updatePageForLogged();

  const modalWindow = document.getElementById("modal_container");
  if (modalWindow) {
    modalWindow.classList.remove("visible_modal");
  }
}

function logoutFunct() {
  localStorage.removeItem("isLogged");

  updatePageForLogged();
}

function updatePageForLogged() {
  const isLoggedIn = localStorage.getItem("isLogged") === "true";
  const btnConnection = document.querySelectorAll(".btn_connection");
  const profilBtn = document.querySelector(".profil");

  if (isLoggedIn) {
    for (let i = 0; i < btnConnection.length; i++) {
      const element = btnConnection[i];
      element.classList.add("connected");
    }
    profilBtn.classList.add("connected");
  } else {
    for (let i = 0; i < btnConnection.length; i++) {
      const element = btnConnection[i];
      element.classList.remove("connected");
    }
    profilBtn.classList.remove("connected");
  }
}

function initGoogle() {
  google.accounts.id.initialize({
    client_id:
      "212073117357-k7brmcsr9q22dot5186epl0nucv3827t.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });

  const buttonContainer = document.getElementById("buttonDiv");
  if (buttonContainer) {
    google.accounts.id.renderButton(buttonContainer, {
      theme: "outline",
      size: "medium",
      shape: "circle",
      type: "standard",
    });
  }
}

function getRandomNmb(max) {
  return Math.floor(Math.random() * max);
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

function animImgBlocWhoAre() {
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

function mailIsValid(text) {
  const mailRegex =
    /^[a-zA-Z0-9]([a-zA-Z0-9._+-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9.-])*[a-zA-Z0-9]\.[a-z]{1,5}$/;

  return text !== "" && mailRegex.test(text);
}

function nameIsValid(text) {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{1,50}$/;

  return text !== "" && nameRegex.test(text);
}

function areaIsValid(text) {
  const areaRegex = /^[a-zA-Z0-9\s.,!?;:*+=/"#&%$()\-_'À-ÿ]{1,500}$/;
  return text !== "" && areaRegex.test(text);
}

function inputValidationContact(input, funcValidation, inputLib) {
  const tabInvalidMess = [
    /* `Le champ ${inputLib} n'est pas valide`,
    `Non tu ne peux pas écrire cela ici...`,
    `C'est cela oui !!!`,
    `Tu es sur que c'est un ${inputLib} ?` */
  ];
  const tabEmptyMess = [
    /* `Le champ ${inputLib} ne peux pas être vide`,
    `Eh! Oh! tu le rempli ce champ ${inputLib}?`,
    `zzzZZZZZzzzzz`,
    `Si tu pense qu'un ${inputLib} peut être vide, passe ton chemin` */
  ];
  const inputValue = input.value;
  const divHelpId = input.getAttribute("aria-describedby");
  const divHelp = document.getElementById(divHelpId);
  const emptyMessage =
    tabEmptyMess.length === 0
      ? `Le champ ${inputLib} est obligatoire et ne peut donc pas être vide.`
      : tabEmptyMess[getRandomNmb(tabEmptyMess.length)];
  const invalidMessage =
    tabInvalidMess.length === 0
      ? `Le champ ${inputLib} n'est pas valide.`
      : tabInvalidMess[getRandomNmb(tabInvalidMess.length)];

  input.classList.remove("valid", "invalid");
  divHelp.classList.remove("visible");

  if (inputValue === "") {
    input.classList.add("invalid");
    divHelp.classList.add("visible");
    divHelp.textContent = emptyMessage;
    return;
  }

  const isValid = funcValidation(inputValue);

  if (isValid) {
    input.classList.add("valid");
    divHelp.classList.remove("visible");
  } else {
    input.classList.add("invalid");
    divHelp.classList.add("visible");
    divHelp.textContent = invalidMessage;
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    animImgBlocWhoAre();
  });

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
  for (let i = 0; i < btnsConnection.length; i++) {
    const element = btnsConnection[i];
    element.addEventListener("click", () => {
      modalWindows.classList.add("visible_modal");
      initGoogle();
    });
  }

  const inputMailContact = document.getElementById("mail_contact");
  inputMailContact.addEventListener("focus", function () {
    inputValidationContact(this, mailIsValid, "E-mail");
  });
  inputMailContact.addEventListener("input", function () {
    inputValidationContact(this, mailIsValid, "E-mail");
  });
  inputMailContact.addEventListener("blur", function () {
    inputValidationContact(this, mailIsValid, "E-mail");
  });

  const inputNameContact = document.getElementById("name_contact");
  inputNameContact.addEventListener("focus", function () {
    inputValidationContact(this, nameIsValid, "Nom");
  });
  inputNameContact.addEventListener("input", function () {
    inputValidationContact(this, nameIsValid, "Nom");
  });
  inputNameContact.addEventListener("blur", function () {
    inputValidationContact(this, nameIsValid, "Nom");
  });

  const inputAreaContact = document.getElementById("text_area_contact");
  inputAreaContact.addEventListener("focus", function () {
    inputValidationContact(this, areaIsValid, "Message");
  });
  inputAreaContact.addEventListener("input", function () {
    inputValidationContact(this, areaIsValid, "Message");
  });
  inputAreaContact.addEventListener("blur", function () {
    inputValidationContact(this, areaIsValid, "Message");
  });

  const btnConnectOnModal = document.querySelector(".button_validate_connec");
  btnConnectOnModal.addEventListener("click", function () {
    logginSuccess();
  });

  const btnDisconnection = document.getElementById("sign_out");
  btnDisconnection.addEventListener("click", () => {
    logoutFunct();
  });
});

window.addEventListener("load", () => {
  updatePageForLogged();
});
