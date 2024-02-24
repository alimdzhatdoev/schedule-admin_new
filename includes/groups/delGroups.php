<?php
require '../include.php';

$group = $_POST['group'];

$groups = R::findOne('groups', 'groupname = ?', [$group]);

if ($groups) {
    R::trash($groups);
}