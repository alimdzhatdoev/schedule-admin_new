<?php
require '../include.php';

$group = $_POST['group'];
$direction = $_POST['direction'];

$groupSearch = R::findOne('groups', 'groupname = ?', [$group]);

if (!$groupSearch) {
    $groupSearch = R::dispense('groups');
    $groupSearch->groupname = $group;
    $groupSearch->direction = $direction;

    R::store($groupSearch);
}

header("Location: /groups");
exit();