<?php
require 'include.php';

$dataList = R::findAll('lessons');
$comparedPairs = [];

foreach ($dataList as $keySend => $dataSend) {
    foreach ($dataList as $keyDB => $dataDB) {
        if (
            (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['separation'] == $dataDB['separation']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['separation'] == $dataDB['separation']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation']
            )
            or
            (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            ) or (
                $keySend != $keyDB &&
                !in_array([$keyDB, $keySend], $comparedPairs) &&
                $dataSend['weekday'] == $dataDB['weekday'] and
                $dataSend['number'] == $dataDB['number'] and
                $dataSend['title'] == $dataDB['title'] and
                $dataSend['teacher'] == $dataDB['teacher'] and
                $dataSend['auditorium'] == $dataDB['auditorium'] and
                $dataSend['separation'] == $dataDB['separation'] and
                $dataSend['subgroup'] == $dataDB['subgroup']
            )
        ) {
            echo 'ID сравниваемой записи: ' . $dataSend['id'] . '<br/>';
            echo 'ID записи с которой сравнили: ' . $dataDB['id'] . '<br/><br/>';
            $comparedPairs[] = [$keySend, $keyDB];
        }
    }
}