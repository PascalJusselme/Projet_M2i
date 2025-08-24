<?php
// Pour voir les erreurs pendant le développement
ini_set('display_errors', 1);
error_reporting(E_ALL);


require_once 'src/db.php';

session_start();

$page = $_GET['page'] ?? 'home';

$isLoggedIn = isset($_SESSION['isLogged']) && $_SESSION['isLogged'] === true;

if ($isLoggedIn && $page === 'login') {
  header('Location: index.php'); 
  exit;
}

ob_start();

switch ($page) {
  case 'home':
    require 'templates/index.php';
    break;

  case 'login':
    require 'templates/login.php';
    break;

  case 'register':
    require 'templates/register.php';
    break;
    
    case 'forget_pwd':
    require 'templates/forget_pass.php';
    break;

  default:
    http_response_code(404);
    echo '<h1>Page non trouvée</h1>';
    break;
}

$content = ob_get_clean();

require 'templates/layout.php';