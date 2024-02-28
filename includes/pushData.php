<?php
require 'include.php';

$schedules = $_POST;

$institute = $schedules['startDataInstitute'];
$direction = $schedules['startDataDirection'];
$grouptitle = $schedules['startDataGroup'];

$scheduleLength = count($schedules);

$days = array('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
$daySchedules = array();
$count = 0;

foreach ($days as $day) {
    $daySchedules[$day] = array();

    foreach ($schedules as $scheduleKey => $schedule) {
        if (strpos($scheduleKey, $day) !== false) {
            $findName = $day . '_number';
            if (strpos($scheduleKey, $findName) !== false) {
                $count = $count + 1;
            }
            $daySchedules[$day][$count][$scheduleKey] = $schedule;
        }
    }
    $count = 0;
}

foreach ($days as $day) {
    foreach ($daySchedules as $schedulekey => $schedule) {
        if (strpos($schedulekey, $day) !== false) {
            foreach ($schedule as $key => $data) {
                $les_num = $schedule[$key][$day . '_number_' . $key];
                unset($daySchedules[$day][$key][$day . '_number_' . $key]);

                foreach ($data as $k => $el) {
                    if (strpos($k, 'title')) {
                        $dataMass = explode('_', $k);
                        $data_num = $dataMass[2];
                        $data_subgroup = $dataMass[3];
                        $data_separate = $dataMass[4];

                        $daySchedules[$day][$key][$day . '_number_' . $data_num . '_' . $data_subgroup . '_' . $data_separate] = $les_num;
                    }
                }
            }
        }
    }
}

$newMass = [];
$massCount = 1;

foreach ($days as $day) {
    foreach ($daySchedules as $schedulekey => $schedule) {
        if (strpos($schedulekey, $day) !== false) {
            foreach ($schedule as $key => $data) {
                foreach ($data as $k => $el) {
                    $newMass[$day][$key][$massCount] = $el;
                    $massCount = $massCount + 1;
                }
                $massCount = 1;
            }
        }
    }
}

$newMass2 = [];
$num = 1;

foreach ($days as $day) {
    foreach ($newMass as $key => $data) {
        if (strpos($key, $day) !== false) {
            foreach ($data as $k => $el) {
                for ($i = 0; $i < count($el) / 7; $i++) {
                    for ($j = $i + 1; $j <= count($el); $j = $j + count($el) / 7) {
                        $newMass2[$day][$k][$i][0] = $day;
                        $newMass2[$day][$k][$i][$num] = $el[$j];
                        $num++;
                    }
                    $num = 1;
                }
            }
        }
    }
}


$DB_mass = [];

$num_db = 0;

foreach ($days as $day) {
    foreach ($newMass2 as $key => $data) {
        if (strpos($key, $day) !== false) {
            foreach ($data as $k => $el) {
                foreach ($el as $q => $a) {
                    array_push($DB_mass, $a);
                }
            }
        }
    }
}

$data_elements = [
    0 => 'weekday',
    1 => 'title',
    2 => 'teacher',
    3 => 'auditorium',
    4 => 'type',
    5 => 'subgroup',
    6 => 'separation',
    7 => 'number',
];

$russianDay = [
    'monday' => 'Понедельник',
    'tuesday' => 'Вторник',
    'wednesday' => 'Среда',
    'thursday' => 'Четверг',
    'friday' => 'Пятница',
    'saturday' => 'Суббота',
    'sunday' => 'Воскресенье',
];

$send = [];

foreach ($DB_mass as $key => $data) {
    foreach ($data as $k => $el) {
        if ($k == 'weekday') {
            $send[$key][$data_elements[$k]] = $russianDay[$el];
        } else {
            $send[$key][$data_elements[$k]] = $el;
        }
    }
}


$itemsMass = [];

$items = R::findAll('items');
foreach($items as $data) {
    array_push($itemsMass, $data->lessonname);
}

$checkMass = [];

foreach ($send as $key => $data) {
    $lesson = R::dispense('lessons');

    $lesson->institute = $institute;
    $lesson->direction = $direction;
    $lesson->grouptitle = $grouptitle;
    
    foreach ($data as $k => $el) {
        $lesson->$k = $el;

        if ($k == 'title'){
            if (!in_array($el, $itemsMass)) {
                array_push($checkMass, $el);
            }
        }
    }
    R::store($lesson);
}

if (count($checkMass) > 0) {
    $lessonname = R::dispense('items');

    foreach ($checkMass as $key => $data) {
        $lessonname->lessonname = $data;
    }
    
    R::store($lessonname);
}

//print_r($send);
header("Location: /");
exit();
?>