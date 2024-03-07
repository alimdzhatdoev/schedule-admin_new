export function teachers() {
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/teachers/getTeachers.php',
            data: {
                teachers: 'teachers'
            },
            success: function (response) {
                let teachers = JSON.parse(response);

                teachers.sort(function (a, b) {
                    return a - b;
                });

                let html = '';
                html += '<div class="teachersShow_name">Преподаватели:</div>';
                html += '<div class="teachersShow">';
                for (let teacher in teachers) {
                    html += '<div class="block_and_delete">';
                    html += '<div class="teachersShow_title moveBlock">' + teachers[teacher] + '</div>';
                    // html += '<div class="teachersShow_title editTeacher" data-teacher="' + teachers[teacher] + '"><img src="../refs/edit.png"></div>';
                    html += '<div class="teachersShow_title deleteTeacher" data-teacher="' + teachers[teacher] + '"><img src="../refs/delete.png"></div>';
                    html += '</div>';
                }
                html += '</div>';

                $('.showData').html(html);
            }
        });

        $('.showData').on('click', '.deleteTeacher', function () {
            let teacher = $(this).attr('data-teacher');
            console.log(teacher);

            $.ajax({
                type: 'POST',
                url: '../includes/teachers/delTeachers.php',
                data: {
                    teacher: teacher
                },
                success: function (response) {
                    location.reload();
                }
            });
        });
    });
    
    return `
    <section class="auditorium">
        <form action="../includes/teachers/addTeachers.php" method="POST" class="addFormSubmit">
            <h2>Добавить преподавателя</h2>
            <input name="username" type="text" placeholder="Введите ФИО преподавателя">
            <input name="position" type="text" placeholder="Введите должность преподавателя">
            <input name="login" type="text" placeholder="Введите логин преподавателя">
            <input name="password" type="password" placeholder="Введите пароль преподавателя">
            <input name="type" type="hidden" value="преподаватель">
            <button>Добавить преподавателя</button>
        </form>

        <div class="showData"></div>
    </section>
`;
}