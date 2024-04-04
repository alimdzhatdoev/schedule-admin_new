<?php
require 'include.php';

$schedules = $_POST;

$institute = $schedules['startDataInstitute'];
$direction = $schedules['startDataDirection'];
$grouptitle = $schedules['startDataGroup'];

$scheduleLength = count($schedules);

R::hunt('lessons', 'grouptitle = ?', [$grouptitle]);

$days = array('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
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
    'monday' => 'monday',
    'tuesday' => 'tuesday',
    'wednesday' => 'wednesday',
    'thursday' => 'thursday',
    'friday' => 'friday',
    'saturday' => 'saturday',
    'sunday' => 'sunday',
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
$teacherMass = [];

$items = R::findAll('items');
foreach($items as $data) {
    array_push($itemsMass, $data->lessonname);
}

$teachers = R::findAll('teachers');
foreach($teachers as $data) {
    array_push($teacherMass, $data->username);
}

$checkItemMass = [];
$checkTeachersMass = [];

foreach ($send as $key => $data) {
    $lesson = R::dispense('lessons');

    $lesson->institute = $institute;
    $lesson->direction = $direction;
    $lesson->grouptitle = $grouptitle;
    
    foreach ($data as $k => $el) {
        $lesson->$k = trim($el);

        if ($k == 'title'){
            if (!in_array(trim($el), $itemsMass)) {
                array_push($checkItemMass, trim($el));
            }
        }

        if ($k == 'teacher'){
            if (!in_array(trim($el), $teacherMass)) {
                array_push($checkTeachersMass, trim($el));
            }
        }
    }
    R::store($lesson);
}

$checkItemMassUnique = array_unique($checkItemMass);
$checkTeachersMassUnique = array_unique($checkTeachersMass);

if (count($checkItemMassUnique) > 0) {
    foreach ($checkItemMassUnique as $key => $data) {
        $lessonname = R::dispense('items');
        $lessonname->lessonname = $data;
        R::store($lessonname);
    }
} 

if (count($checkTeachersMassUnique) > 0) {
    foreach ($checkTeachersMassUnique as $key => $data) {
        $teachername = R::dispense('teachers');
        $teachername->username = $data;
        $teachername->position = '-';
        $teachername->type = 'преподаватель';
        $teachername->login = strtolower(transliterate($data));
        $teachername->password = generateRandomPassword(10);
        R::store($teachername);
    }
}

// print_r($send);
header("Location: /");
exit();
?>