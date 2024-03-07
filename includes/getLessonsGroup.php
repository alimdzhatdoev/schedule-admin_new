<?php
require 'include.php';

$selectedGroup = $_GET['selectedGroup'];

$table = R::find('lessons', 'grouptitle = ?', [$selectedGroup]);

$tableData = array();

foreach ($table as $data) {
    array_push($tableData, [
        'id' => $data->id,
        'institute' => $data->institute,
        'direction' => $data->direction,
        'grouptitle' => $data->grouptitle,
        'weekday' => $data->weekday,
        'number' => $data->number,
        'title' => $data->title,
        'teacher' => $data->teacher,
        'auditorium' => $data->auditorium,
        'type' => $data->type,
        'subgroup' => $data->subgroup,
        'separation' => $data->separation
    ]);
}

R::close();

$jsonData = json_encode($tableData);

echo $jsonData;
?>