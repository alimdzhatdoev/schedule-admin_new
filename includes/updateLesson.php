<?php
require 'include.php';

$idElement = $_GET['idElement'];

$institute = $_GET['institute'];
$direction = $_GET['direction'];
$grouptitle = $_GET['grouptitle'];
$weekday = $_GET['weekday'];
$number = $_GET['number'];
$title = $_GET['title'];
$teacher = $_GET['teacher'];
$auditorium = $_GET['auditorium'];
$type = $_GET['type'];
$subgroup = $_GET['subgroup'];
$separation = $_GET['separation'];

$englishDay = [
    'понедельник' => 'monday',
    'вторник' => 'tuesday',
    'среда' => 'wednesday',
    'четверг' => 'thursday',
    'пятница' => 'friday',
    'суббота' => 'saturday',
    'воскресенье' => 'sunday',
];

$lesson = R::load('lessons', $idElement);
$lesson -> institute = $institute;
$lesson -> direction = $direction;
$lesson -> grouptitle = $grouptitle;
$lesson -> weekday = $englishDay[$weekday];
$lesson -> number = $number;
$lesson -> title = $title;
$lesson -> teacher = $teacher;
$lesson -> auditorium = $auditorium;
$lesson -> type = $type;
$lesson -> subgroup = $subgroup;
$lesson -> separation = $separation;
R::store($lesson);

echo "Занятие изменено";
