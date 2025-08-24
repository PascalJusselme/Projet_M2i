<?php

function verifyUserLogin(string $login, string $password): bool
{

    $valid_users = [
        'user' => '1234',
        'admin' => '1234',
    ];

    if (isset($valid_users[$login]) && $valid_users[$login] === $password) {
        // Les identifiants sont corrects. On authentifie l'utilisateur.

        // On s'assure qu'une session est bien démarrée
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }

        // On stocke les informations dans la session
        $_SESSION['isLogged'] = true;
        $_SESSION['username'] = $login;

        return true;
    }

    return false;
}
function logoutUser(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    session_destroy();
}