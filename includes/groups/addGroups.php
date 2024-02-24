<?php
require '../include.php';

$group = $_POST['group'];

$groupSearch = R::findOne('auditorium', 'groupname = ?', [$group]);

if (!$groupSearch) {
    $groupSearch = R::dispense('groups');
    $groupSearch->groupname = $group;

    R::store($groupSearch);
}

header("Location: /groups");
exit();