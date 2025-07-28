document.addEventListener("DOMContentLoaded", () => {
    // Gestion des boutons "voir plus/moins" pour les descriptions de mission
    const btn_more_descrip_down = document.querySelectorAll("#btn_view_more_down");
    const btn_more_descrip_up = document.querySelectorAll("#btn_view_more_up");

    for (let i = 0; i < btn_more_descrip_down.length; i++) {
        btn_more_descrip_down[i].addEventListener("click", () => {
            const description_mission = btn_more_descrip_down[i].parentElement.previousElementSibling;
            description_mission.style.height = "auto";
            btn_more_descrip_down[i].classList.add("visible");
            btn_more_descrip_up[i].classList.toggle("visible");
        });
    }

    for (let i = 0; i < btn_more_descrip_up.length; i++) {
        btn_more_descrip_up[i].addEventListener("click", () => {
            const description_mission = btn_more_descrip_up[i].parentElement.previousElementSibling;
            description_mission.style.height = "20px"; // Confirme cette hauteur par défaut

            btn_more_descrip_up[i].classList.add("visible");
            btn_more_descrip_down[i].classList.toggle("visible");
        });
    }

    // --- Début de la gestion du Menu Burger et Redimensionnement ---

    // Sélection des éléments du menu burger
    const navBar = document.querySelector('.nav_bar');
    const overlayMenuMobile = document.querySelector('.overlay_menu_mobile');
    const mobileTitle = document.querySelector('.mobile_title');
    const pictoBurger = document.querySelector(".menu_icon_m"); // S'assure que le sélecteur est correct
    const btnCloseBurgerMenu = document.querySelector(".btn_nav_close"); // S'assure que le sélecteur est correct

    // Fonctions d'ouverture et de fermeture du menu burger
    function openBurgerMenu() {
        navBar.classList.add('open');
        overlayMenuMobile.classList.add('open');
        mobileTitle.classList.add('close'); // Si cette classe est toujours pertinente
    }

    function closeBurgerMenu() {
        navBar.classList.remove('open');
        overlayMenuMobile.classList.remove('open');
        mobileTitle.classList.remove('close'); // Si cette classe est toujours pertinente
    }

    // Attacher les écouteurs d'événements pour le menu burger
    pictoBurger.addEventListener("click", () => {
        openBurgerMenu();
    });

    overlayMenuMobile.addEventListener("click", () => {
        closeBurgerMenu();
    });

    btnCloseBurgerMenu.addEventListener("click", () => {
        closeBurgerMenu();
    });

    // Logique de gestion du redimensionnement (Définition locale dans DOMContentLoaded)
    let resizeTimer;
    const minWidthDesktop = 861; // Ton point de rupture, à confirmer

    // Fonction pour gérer le redimensionnement
    function handleResize() {
        // Ajoute la classe 'no-transition' au body pour désactiver temporairement les animations
        document.body.classList.add('no-transition');

        // Réinitialise le timer à chaque événement 'resize'
        clearTimeout(resizeTimer);

        // Définit un timer pour retirer la classe 'no-transition' après un court délai
        // quand l'utilisateur a fini de redimensionner (debounce)
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('no-transition');

            // Si le menu est ouvert en mobile et qu'on passe en desktop, le fermer.
            if (window.innerWidth >= minWidthDesktop && navBar.classList.contains('open')) {
                closeBurgerMenu();
            }
        }, 200); // Délai de 200ms
    }

    // Attacher l'écouteur d'événement 'resize'
    window.addEventListener('resize', handleResize);

    // Gérer l'état initial au chargement de la page pour éviter les flashes
    function handleInitialLoad() {
        document.body.classList.add('no-transition');
        setTimeout(() => {
            document.body.classList.remove('no-transition');
        }, 50); // Un très court délai

        if (window.innerWidth >= minWidthDesktop) {
            closeBurgerMenu(); // S'assurer que le menu est fermé si on est sur desktop
        }
    }
    // Appeler la fonction au chargement initial
    handleInitialLoad();

    // --- Fin de la gestion du Menu Burger et Redimensionnement ---


    // Gestion des fenêtres modales
    const modalWindows = document.getElementById("modal_container");
    const closeModal = document.getElementById("close_modal_btn");
    const btnsConnection = document.querySelectorAll(".btn_connection");

    closeModal.addEventListener("click", () => {
        modalWindows.classList.remove("visible_modal");
    });

    // Écouteur de clic sur l'overlay de la modale
    modalWindows.addEventListener("click", (event) => {
        if (event.target === modalWindows) { // S'assure que c'est bien l'overlay et non le contenu
            modalWindows.classList.remove("visible_modal");
        }
    });

    for (let i = 0; i < btnsConnection.length; i++) {
        const element = btnsConnection[i];
        element.addEventListener("click", () => {
            modalWindows.classList.add("visible_modal");
        });
    }
});