export function groups(){
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/groups/getGroups.php',
            data: {
                groups: 'groups'
            },
            success: function (response) {
                let groups = JSON.parse(response);

                groups.sort(function (a, b) {
                    return a - b;
                });

                let html = '';
                html += '<div class="teachersShow_name">Преподаватели:</div>';
                html += '<div class="teachersShow">';
                for (let group in groups) {
                    html += '<div class="block_and_delete">';
                    html += '<div class="teachersShow_title moveBlock">' + groups[group] + '</div>';
                    // html += '<div class="teachersShow_title editGroups" data-group="' + groups[group] + '"><img src="../refs/edit.png"></div>';
                    html += '<div class="teachersShow_title deleteGroups" data-group="' + groups[group] + '"><img src="../refs/delete.png"></div>';
                    html += '</div>';
                }
                html += '</div>';

                $('.showData').html(html);
            }
        });

        $('.showData').on('click', '.deleteGroups', function(){
            let group = $(this).attr('data-group');

            $.ajax({
                type: 'POST',
                url: '../includes/groups/delGroups.php',
                data: {
                    group: group
                },
                success: function (response) {
                    location.reload();
                }
            });
        });
    });

    return `
        <section class="auditorium">
            <form action="../includes/groups/addGroups.php" method="POST" class="addFormSubmit">
                <h2>Добавить группу</h2>
                <input name="group" type="text" placeholder="Введите группу">
                <button>Добавить группу</button>
            </form>

            <div class="showData">

            </div>
        </section>
    `;
}