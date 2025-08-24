<?php

require_once '../src/auth.php';

$action = $_POST['action'] ?? $_GET['action'] ?? null;

switch ($action) {
    case 'login':
        $login = $_POST['login'] ?? '';
        $password = $_POST['password'] ?? '';

        if (verifyUserLogin($login, $password)) {
            $response = ['success' => true, 'message' => 'Connexion réussie !'];
        } else {
            $response = ['success' => false, 'message' => 'Identifiants incorrects.'];
        }
        break;

    case 'logout':
        logoutUser();
        $response = ['success' => true, 'message' => 'Déconnexion réussie.'];
        break;

    default:
        http_response_code(400);

        $response = ['success' => false, 'message' => 'Action non valide ou non reconnue.'];
        break;
}

header('Content-Type: application/json');
echo json_encode($response);