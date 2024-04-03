<?php require 'includes/include.php'; ?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Расписание - административная панель</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/style.css"> 
</head>

<body>

    <nav>
        <ul>
            <li><div class="navPanel" id="scheduleLink">Расписание</div></li>
            <li><div class="navPanel" id="studentsLink">Студенты</div></li>
            <li><div class="navPanel" id="teachersLink">Преподаватели</div></li>
            <li><div class="navPanel" id="groupsLink">Группы </div></li>
            <li><div class="navPanel" id="auditoriumLink">Аудитории</div></li>
            <li><div class="navPanel findCoincidence" id="coincidencesLink">Найти совпадения</div></li>
        </ul>
    </nav>

    <section class="renderSection"></section>

</body>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="module" src="js/routes.js"></script>
<script src="js/types.js"></script>

</html>