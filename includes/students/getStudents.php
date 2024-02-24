<?php
require '../include.php';

$students = R::findAll('students');

$studentsData = array();

foreach($students as $data) {
    array_push($studentsData, $data->username);
}

R::close();

$jsonData = json_encode($studentsData);

echo $jsonData;