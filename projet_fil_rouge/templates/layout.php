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
            <a href="index.php">
                <img src="./img/logo2_2.png" alt="Logo du site" class="logo" />
            </a>
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
                    <a href="index.php" class="link_animated">ACCUEIL</a>
                </li>
                <li>
                    <a href="index.php?page=missions" class="link_animated">NOS MISSIONS</a>
                </li>
                <li>
                    <a href="#" class="link_animated">VOUS & NOUS</a>
                </li>
                <li class="last_link_nav">
                    <a class="connection_btn" href="index.php?page=login">S'inscrire / Se Connecter</a>
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

    <div class="content_container">
        <?= $content ?>
    </div>

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
                    <li><a href="index.php">ACCUEIL</a></li>
                    <li><a href="index.php?page=missions">NOS MISSIONS</a></li>
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
    
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="./js/script.js"></script>
</body>

</html>