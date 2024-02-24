export function auditorium() {
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/auditorium/getAuditorium.php',
            data: {
                auditorium: 'auditorium'
            },
            success: function (response) {
                let auditoriums = JSON.parse(response);

                auditoriums.sort(function (a, b) {
                    return a - b;
                });

                let buildings = {};

                auditoriums.forEach(auditorium => {
                    let buildingNumber = auditorium[0];
                    let floorNumber = auditorium[1];

                    if (!buildings[buildingNumber]) {
                        buildings[buildingNumber] = {};
                    }

                    if (!buildings[buildingNumber][floorNumber]) {
                        buildings[buildingNumber][floorNumber] = [];
                    }

                    buildings[buildingNumber][floorNumber].push(auditorium);
                });

                let html = '';
                for (let buildingNumber in buildings) {
                    html += '<div class="building">';
                        html += '<div class="building_title">Корпус ' + buildingNumber + ':</div>';
                            html += '<div class="building_floars">';
                            for (let floorNumber in buildings[buildingNumber]) {
                                html += '<div class="building_floars__floar">'
                                    html += '<div class="building_floars__floar___title">Этаж ' + floorNumber + ': </div>'
                                    html += '<div class="building_floars__floar___datas">'

                                        for (let numberAud in buildings[buildingNumber][floorNumber]) {

                                            html += '<div class="block_and_delete">';
                                                html += '<div class="building_floars__floar___number moveBlock">' + buildings[buildingNumber][floorNumber][numberAud] + '</div>';
                                                // html += '<div class="building_floars__floar___number editNumber" data-number="' + buildings[buildingNumber][floorNumber][numberAud] + '"><img src="../refs/edit.png"></div>';
                                                html += '<div class="building_floars__floar___number deleteNumber" data-number="' + buildings[buildingNumber][floorNumber][numberAud] + '"><img src="../refs/delete.png"></div>';
                                            html += '</div>';
                                        }

                                    html += '</div>';
                                html += '</div>';
                            }
                            html += '</div>';
                        html += '</div>';
                    html += '</div>';
                }

                $('.showData').html(html);
            }
        });

        $('.showData').on('click', '.deleteNumber', function(){
            let number = $(this).attr('data-number');

            $.ajax({
                type: 'POST',
                url: '../includes/auditorium/delAuditorium.php',
                data: {
                    number: number
                },
                success: function (response) {
                    location.reload();
                }
            });
        });
    });

    return `
        <section class="auditorium">
            <form action="../includes/auditorium/addAuditorium.php" method="POST" class="addFormSubmit">
                <h2>Добавить аудиторию</h2>
                <input name="auditorium" type="text" placeholder="Введите номер аудитории">
                <button>Добавить аудиторию</button>
            </form>

            <div class="showData">

            </div>
        </section>
    `;
}