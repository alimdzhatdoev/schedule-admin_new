<?php
require '../include.php';

if (isset($_GET['institute'])) {
    $selectedInstitute = $_GET['institute'];
    $groups = R::find('directions', 'institute = ?', [$selectedInstitute]);
} else {
    $groups = R::findAll('directions');
}

$groupsData = array();

foreach($groups as $data) {
    array_push($groupsData, $data->direction);
}

R::close();

$jsonData = json_encode($groupsData);

echo $jsonData;
