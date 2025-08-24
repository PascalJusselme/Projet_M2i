<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="./style/style.css" />
    <link rel="stylesheet" href="./style/style-mobile.css" />
    <link rel="stylesheet" href="./style/style-tab.css" />
    <title>Les &Eacute;claireurs Solidaires</title>
</head>

<body>
    <div class="overlay_menu_mobile"></div>

    <header>
        <div class="div_logo">
            <img src="./img/logo2_2.png" alt="Logo du site" class="logo" />
        </div>
        <div class="div_picto_menu">
            <img src="./img/hamb_menu.png" id="picto_burger" />
            <img src="./img/cross.png" id="picto_cross" />
        </div>
        <nav>
            <ul class="nav_bar_menu">
                <h1>
                    Les &Eacute;claireurs <span class="color_word">Solidaires</span>
                </h1>
                <li>
                    <a href="index.html">ACCUEIL</a>
                </li>
                <li>
                    <a href="#">NOS MISSIONS</a>
                </li>
                <li>
                    <a href="#">VOUS & NOUS</a>
                </li>
                <li class="last_link_nav">
                    <button class="connection_btn">S'inscrire / Se Connecter</button>
                    <div class="profil">
                        <div>
                            <p>Nom de Profil</p>
                            <button id="sign_out">Sign out</button>
                        </div>
                        <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Photo profil" />
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    <?= $content ?>

    <footer>
        <section class="high_footer">
            <div class="address_contact_footer">
                Nos Coordonnees
                <ul>
                    <li>Claire Michelle</li>
                    <li>62 avenue de l’Imagerie</li>
                    <li>69000, Lyon Cedex 09</li>
                    <li>e-mail : claire-michelle@gmail.com</li>
                    <li>whatsApp :</li>
                </ul>
            </div>

            <div class="site_map">
                Plan du site
                <ul>
                    <li><a href="#">ACCUEIL</a></li>
                    <li><a href="#">NOS MISSIONS</a></li>
                    <li><a href="#">VOUS & NOUS</a></li>
                </ul>
            </div>
        </section>
        <div class="bottom_footer">
            <div class="blc_copy">
                &copy; Tous droits r&eacute;serv&eacute;s - CGU - Les
                &Eacute;claireurs Solidaires
            </div>
            <div class="bloc_picto">
                <a href="#"><img src="./img/icon-X.png" id="picto" /></a>
                <a href="#"><img src="./img/icon-insta.png" id="picto" /></a>
                <a href="#"><img src="./img/icon-facebook.png" id="picto" /></a>
            </div>
        </div>
    </footer>

    <div id="modal_container" class="modal_container">
        <div class="modal_glob">
            <div class="entete_modal">
                <h1>Les &Eacute;claireurs Solidaires</h1>
                <div class="btn_modal_close">
                    <img src="./img/cross.png" id="btn_close_modal" />
                </div>
            </div>
            <div class="modal_content">
                <form class="modal_form" action="valid_connec.html">
                    <div class="input_login">
                        <input type="text" id="login" placeholder="Login *" required />
                        <input type="password" id="password" placeholder="Mot de Passe *" required />
                    </div>
                    <button class="button_validate_connec">Se connecter</button>
                </form>
                <div class="remember">
                    <label class="custom_checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <p>Se souvenir de moi</p>
                    </label>
                    <a href="#">Mot de passe oublié ?</a>
                </div>
                <div class="create_account">
                    <p>Vous n'avez pas de compte ?</p>
                    <a href="#">Inscrivez-vous.</a>
                    <!-- <a href="#" onclick="signOut();">Sign out</a> -->
                    <!-- BOUTON SIGNOUT GOOGLE A VOIR APRES RAJOUT DE LA PARTIE PROFIL-->
                </div>
                <div id="buttonDiv"></div>
            </div>
        </div>
    </div>

    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="./js/script.js"></script>
</body>

</html>