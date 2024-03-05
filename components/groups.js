export function groups() {
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
                html += '<div class="teachersShow_name">Группы:</div>';
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

        loadDirections();

        $('.showData').on('click', '.deleteGroups', function () {
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

        function loadDirections() {
            fetch('../includes/groups/getDirections.php')
                .then(response => response.json())
                .then(data => {
                    const selectGroup = document.getElementById('directionsData');
                    selectGroup.innerHTML = '';

                    const disabledOption = document.createElement('option');
                    disabledOption.disabled = true;
                    disabledOption.selected = true;
                    disabledOption.textContent = 'Выберите направление';
                    selectGroup.appendChild(disabledOption);

                    data.sort().forEach(group => {
                        const option = document.createElement('option');
                        option.value = group;
                        option.textContent = group;
                        selectGroup.appendChild(option);
                    });
                })
                .catch(error => console.error('Ошибка:', error));
        }
    });

    return `
        <section class="auditorium">
            <form action="../includes/groups/addGroups.php" method="POST" class="addFormSubmit">
                <h2>Добавить группу</h2>
                <select name="direction" id="directionsData"></select>
                <input name="group" type="text" placeholder="Введите группу">
                <button>Добавить группу</button>
            </form>

            <div class="showData">

            </div>
        </section>
        
        <script type="module" src="js/main.js"></script>
    `;
}
