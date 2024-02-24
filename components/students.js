export function students(){
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/students/getStudents.php',
            data: {
                students: 'students'
            },
            success: function (response) {
                let students = JSON.parse(response);

                students.sort(function (a, b) {
                    return a - b;
                });

                let html = '';
                html += '<div class="teachersShow_name">Студенты:</div>';
                html += '<div class="teachersShow">';
                for (let student in students) {
                    html += '<div class="block_and_delete">';
                    html += '<div class="teachersShow_title moveBlock">' + students[student] + '</div>';
                    html += '<div class="teachersShow_title editStudent" data-student="' + students[student] + '"><img src="../refs/edit.png"></div>';
                    html += '<div class="teachersShow_title deleteStudent" data-student="' + students[student] + '"><img src="../refs/delete.png"></div>';
                    html += '</div>';
                }
                html += '</div>';

                $('.showData').html(html);
            }
        });

        $('.showData').on('click', '.deleteStudent', function () {
            let student = $(this).attr('data-student');
            console.log(student);

            $.ajax({
                type: 'POST',
                url: '../includes/students/delStudents.php',
                data: {
                    student: student
                },
                success: function (response) {
                    location.reload();
                }
            });
        });
    });
    
    return `
    <section class="auditorium">
        <form action="../includes/students/addStudents.php" method="POST" class="addFormSubmit">
            <h2>Добавить студента</h2>
            <input name="username" type="text" placeholder="Введите ФИО студента">
            <input name="numzachetka" type="text" placeholder="Введите номер зачетки студента">
            <input name="groupname" type="text" placeholder="Введите группу студента">
            <input name="subgroup" type="text" placeholder="Введите подгруппу студента">
            <input name="login" type="text" placeholder="Введите логин студента">
            <input name="password" type="password" placeholder="Введите пароль студента">
            <input name="type" type="hidden" value="студент">
            <button>Добавить студента</button>
        </form>

        <div class="showData"></div>
    </section>
`;
}