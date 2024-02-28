<?php
require 'include.php';

$tableName = $_POST['tableName'];

$table = R::findAll($tableName);

$tableData = array();

if ($tableName == 'teachers'){
    foreach($table as $data) {
        array_push($tableData, $data->username);
    }
}

if ($tableName == 'auditorium'){
    foreach($table as $data) {
        array_push($tableData, $data->number);
    }
}

if ($tableName == 'types'){
    foreach($table as $data) {
        array_push($tableData, $data->typename);
    }
}

if ($tableName == 'items'){
    foreach($table as $data) {
        array_push($tableData, $data->lessonname);
    }
}

R::close();

$jsonData = json_encode($tableData);

echo $jsonData;
?>
