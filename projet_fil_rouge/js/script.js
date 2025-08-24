function handleCredentialResponse(response) {
  console.log("La fonction handleCredentialResponse a été appelée !");

  console.log("Encoded JWT ID token: " + response.credential);

  logginSuccess();
}

async function processLogin() {
  const loginInput = document.getElementById("login");
  const passwordInput = document.getElementById("password");

  const formData = new FormData();
  formData.append("action", "login"); // Indique au handler ce qu'on veut faire
  formData.append("login", loginInput.value);
  formData.append("password", passwordInput.value);

  const response = await fetch("api/user_handler.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.success) {
    localStorage.setItem("isLogged", "true"); // Met à jour le "miroir"
    window.location.href = "index.php"; // Redirige
  } else {
    alert(result.message); // Affiche l'erreur du serveur
  }
}

async function processLogout() {
  const response = await fetch("api/user_handler.php?action=logout"); // On peut utiliser GET pour la déconnexion
  const result = await response.json();

  if (result.success) {
    localStorage.removeItem("isLogged"); // Nettoie le "miroir"
    updatePageForLogged(); // Met à jour l'UI immédiatement
    window.location.href = "index.php"; // Redirige pour rafraîchir l'état serveur
  }
}

function updatePageForLogged() {
  const isLoggedIn = localStorage.getItem("isLogged") === "true";
  const btnConnection = document.querySelectorAll(".connection_btn");
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
  document.querySelector("nav").classList.add("open");
  document.querySelector(".overlay_menu_mobile").classList.add("open");
  document.querySelector("#picto_burger").classList.add("open");
  document.querySelector("#picto_cross").classList.add("open");
}

function closeBurgerMenu() {
  document.querySelector("nav").classList.remove("open");
  document.querySelector(".overlay_menu_mobile").classList.remove("open");
  document.querySelector("#picto_burger").classList.remove("open");
  document.querySelector("#picto_cross").classList.remove("open");
}

function animImgBlocWhoAre() {
  const imgDroite = document.querySelector(".img_about_left");
  const imgGauche = document.querySelector(".img_about_right");

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

function inputValidationContact(input, funcValidation, inputLibValidate) {
  const tabInvalidMess = [
    /* `Le champ ${inputLibValidate} n'est pas valide`,
    `Non tu ne peux pas écrire cela ici...`,
    `C'est cela oui !!!`,
    `Tu es sur que c'est un ${inputLibValidate} ?` */
  ];
  const tabEmptyMess = [
    /* `Le champ ${inputLibValidate} ne peux pas être vide`,
    `Eh! Oh! tu le rempli ce champ ${inputLibValidate}?`,
    `zzzZZZZZzzzzz`,
    `Si tu pense qu'un ${inputLibValidate} peut être vide, passe ton chemin` */
  ];
  const inputValue = input.value;
  const divHelpId = input.getAttribute("aria-describedby");
  const divHelp = document.getElementById(divHelpId);
  const emptyMessage =
    tabEmptyMess.length === 0
      ? `Le champ ${inputLibValidate} est obligatoire et ne peut donc pas être vide.`
      : tabEmptyMess[getRandomNmb(tabEmptyMess.length)];
  const invalidMessage =
    tabInvalidMess.length === 0
      ? `Le champ ${inputLibValidate} n'est pas valide.`
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
  window.addEventListener("load", () => {
    updatePageForLogged();
    initGoogle();
  });

  window.addEventListener("scroll", () => {
    animImgBlocWhoAre();
  });

  const loginForm = document.getElementById("login_form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      processLogin();
    });
  }

  document.addEventListener("click", function (event) {
    if (event.target.matches("#sign_out")) {
      event.preventDefault();
      processLogout();
    }
  });

  const burgerMenu = document.querySelector("#picto_burger");
  const overlayBurgerMenu = document.querySelector(".overlay_menu_mobile");
  const btnCloseBurgerMenu = document.querySelector("#picto_cross");

  if (burgerMenu && overlayBurgerMenu && btnCloseBurgerMenu) {
    burgerMenu.addEventListener("click", openBurgerMenu);
    overlayBurgerMenu.addEventListener("click", closeBurgerMenu);
    btnCloseBurgerMenu.addEventListener("click", closeBurgerMenu);
  }

  const btn_more_descrip_down = document.querySelectorAll(
    "#btn_view_more_down"
  );
  const btn_more_descrip_up = document.querySelectorAll("#btn_view_more_up");

  if (btn_more_descrip_down.length > 0) {
    for (let i = 0; i < btn_more_descrip_down.length; i++) {
      btn_more_descrip_down[i].addEventListener("click", () => {
        const description_mission =
          btn_more_descrip_down[i].parentElement.previousElementSibling;
        description_mission.style.height = "auto";
        btn_more_descrip_down[i].classList.add("visible");
        btn_more_descrip_up[i].classList.toggle("visible");
      });
    }
  }

  if (btn_more_descrip_up.length > 0) {
    for (let i = 0; i < btn_more_descrip_up.length; i++) {
      btn_more_descrip_up[i].addEventListener("click", () => {
        const description_mission =
          btn_more_descrip_up[i].parentElement.previousElementSibling;
        description_mission.style.height = "20px";
        btn_more_descrip_up[i].classList.add("visible");
        btn_more_descrip_down[i].classList.toggle("visible");
      });
    }
  }

  const inputMailContact = document.getElementById("mail_contact");
  const inputNameContact = document.getElementById("name_contact");
  const inputAreaContact = document.getElementById("text_area_contact");

  if (inputMailContact && inputNameContact && inputAreaContact) {
    inputMailContact.addEventListener("focus", function () {
      inputValidationContact(this, mailIsValid, "E-mail");
    });
    inputMailContact.addEventListener("input", function () {
      inputValidationContact(this, mailIsValid, "E-mail");
    });
    inputMailContact.addEventListener("blur", function () {
      inputValidationContact(this, mailIsValid, "E-mail");
    });

    inputNameContact.addEventListener("focus", function () {
      inputValidationContact(this, nameIsValid, "Nom");
    });
    inputNameContact.addEventListener("input", function () {
      inputValidationContact(this, nameIsValid, "Nom");
    });
    inputNameContact.addEventListener("blur", function () {
      inputValidationContact(this, nameIsValid, "Nom");
    });

    inputAreaContact.addEventListener("focus", function () {
      inputValidationContact(this, areaIsValid, "Message");
    });
    inputAreaContact.addEventListener("input", function () {
      inputValidationContact(this, areaIsValid, "Message");
    });
    inputAreaContact.addEventListener("blur", function () {
      inputValidationContact(this, areaIsValid, "Message");
    });
  }
});
