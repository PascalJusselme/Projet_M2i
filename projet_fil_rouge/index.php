<?php
require_once 'src/db.php';

$page = $_GET['page'] ?? 'home';

ob_start();

switch ($page) {
  case 'home':
    require 'templates/index.php';
    break;

  default:
    http_response_code(404);
    echo '<h1>Page non trouvée</h1>';
    break;
}

$content = ob_get_clean();

require 'templates/layout.php';