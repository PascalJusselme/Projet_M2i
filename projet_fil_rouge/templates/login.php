<div class="login_container">
    <div class="login_glob">
        <form class="login_form" id="login_form">
            <div class="input_login">
                <input type="text" id="login" placeholder="Login *" required />
                <input type="password" id="password" placeholder="Mot de Passe *" required />
            </div>
            <button class="login_button">Se connecter</button>
        </form>
        <div class="remember">
            <label class="custom_checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <p>Se souvenir de moi</p>
            </label>
            <a href="index.php?page=forget_pwd" class="link_animated">Mot de passe oublié ?</a>
        </div>
        <div class="create_account">
            <p>Vous n'avez pas de compte ?</p>
            <a href="index.php?page=register" class="link_animated">Inscrivez-vous.</a>
        </div>
        <div id="buttonDiv"></div>
    </div>
</div>