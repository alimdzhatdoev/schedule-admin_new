<?php 
session_start();
require 'rb/rb.php';

// R::setup( 'mysql:host=localhost; dbname=alimdzg3_db', 'alimdzg3_db', 'KQ*v6tBv' );
R::setup( 'mysql:host=localhost; dbname=alimdzg3_db', 'root', '' );

if (!R::testConnection()) {
    exit('Нет подключения к БД');
}

function formatstr($str){
    $str = trim($str);
    $str = stripslashes($str);
    $str = htmlspecialchars($str);
    return $str;
}

?>