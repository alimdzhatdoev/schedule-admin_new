export function coincidences() {
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/checkTableData.php',
            data: {},
            success: function (response) {
                let data = JSON.parse(response);

                let result = '';

                let i = 1;
                let j = 0;

                let russianDay = {
                    'monday': 'понедельник',
                    'tuesday': 'вторник',
                    'wednesday': 'среда',
                    'thursday': 'четверг',
                    'friday': 'пятница',
                    'saturday': 'суббота',
                    'sunday': 'воскресенье',
                };

                if (data.length > 0) {
                    data.forEach(el => {
                        result += '<div class="coincidences_check">';
                        result += `<div class="coincidences_title">Совпадение ${i}</div>`;
                        result += '<div class="coincidences_data">';
                        el.forEach(element => {
                            result += `
                                <div class="coincidences_item">
                                    <div class="coincidences_item__gap">
                                        <div class="coincidences_item__element coin_${i}_institute_type_${j}"><span>Институт:</span> <input type="text" value="${element.institute}"></div>
                                        <div class="coincidences_item__element coin_${i}_direction_type_${j}"><span>Направление:</span> <input type="text" value="${element.direction}"></div>
                                        <div class="coincidences_item__element coin_${i}_grouptitle_type_${j}"><span>Группа:</span> <input type="text" value="${element.grouptitle}"></div>
                                        <div class="coincidences_item__element coin_${i}_weekday_type_${j}"><span>День недели:</span> <input type="text" value="${russianDay[element.weekday]}"></div>
                                        <div class="coincidences_item__element coin_${i}_number_type_${j}"><span>Номер пары:</span> <input type="text" value="${element.number}"></div>
                                        <div class="coincidences_item__element coin_${i}_title_type_${j}"><span>Название пары:</span> <input type="text" value="${element.title}"></div>
                                        <div class="coincidences_item__element coin_${i}_teacher_type_${j}"><span>Преподаватель:</span> <input type="text" value="${element.teacher}"></div>
                                        <div class="coincidences_item__element coin_${i}_auditorium_type_${j}"><span>Аудитория:</span> <input type="text" value="${element.auditorium}"></div>
                                        <div class="coincidences_item__element coin_${i}_type_type_${j}"><span>Тип занятия:</span> <input type="text" value="${element.type}"></div>
                                        <div class="coincidences_item__element coin_${i}_subgroup_type_${j}"><span>Подгруппы:</span> <input type="text" value="${element.subgroup}"></div>
                                        <div class="coincidences_item__element coin_${i}_separation_type_${j}"><span>Числитель / Знаменатель:</span> <input type="text" value="${element.separation}"></div>
                                    </div>
                                    <div>
                                        <button idElement="${element.id}">Изменить</button>
                                    </div>
                                </div>
                            `
                            j++;
                        });
                        j = 0;
                        result += '</div>';
                        result += '</div>';
                        i++;
                    });

                    $(document).ready(function () {
                        for (let k = 1; k < i; k++) {
                            // let instituteBlock1 = $(`.coin_${k}_institute_type_0 input`).val();
                            // let instituteBlock2 = $(`.coin_${k}_institute_type_1 input`).val();
                            // if (instituteBlock1 == instituteBlock2){
                            //     $(`.coin_${k}_institute_type_0`).css('background', 'red');
                            //     $(`.coin_${k}_institute_type_1`).css('background', 'red');
                            // }

                            // let directionBlock1 = $(`.coin_${k}_direction_type_0 input`).val();
                            // let directionBlock2 = $(`.coin_${k}_direction_type_1 input`).val();
                            // if (directionBlock1 == directionBlock2){
                            //     $(`.coin_${k}_direction_type_0`).css('background', 'red');
                            //     $(`.coin_${k}_direction_type_1`).css('background', 'red');
                            // }

                            // let grouptitleBlock1 = $(`.coin_${k}_grouptitle_type_0 input`).val();
                            // let grouptitleBlock2 = $(`.coin_${k}_grouptitle_type_1 input`).val();
                            // if (grouptitleBlock1 == grouptitleBlock2){
                            //     $(`.coin_${k}_grouptitle_type_0`).css('background', 'red');
                            //     $(`.coin_${k}_grouptitle_type_1`).css('background', 'red');
                            // }

                            // let typeBlock1 = $(`.coin_${k}_type_type_0 input`).val();
                            // let typeBlock2 = $(`.coin_${k}_type_type_1 input`).val();
                            // if (typeBlock1 == typeBlock2){
                            //     $(`.coin_${k}_type_type_0`).css('background', 'red');
                            //     $(`.coin_${k}_type_type_1`).css('background', 'red');
                            // }

                            let weekdayBlock1 = $(`.coin_${k}_weekday_type_0 input`).val();
                            let weekdayBlock2 = $(`.coin_${k}_weekday_type_1 input`).val();
                            if (weekdayBlock1 == weekdayBlock2) {
                                $(`.coin_${k}_weekday_type_0`).css('background', 'red');
                                $(`.coin_${k}_weekday_type_1`).css('background', 'red');
                            }

                            let numberBlock1 = $(`.coin_${k}_number_type_0 input`).val();
                            let numberBlock2 = $(`.coin_${k}_number_type_1 input`).val();
                            if (numberBlock1 == numberBlock2) {
                                $(`.coin_${k}_number_type_0`).css('background', 'red');
                                $(`.coin_${k}_number_type_1`).css('background', 'red');
                            }

                            let titleBlock1 = $(`.coin_${k}_title_type_0 input`).val();
                            let titleBlock2 = $(`.coin_${k}_title_type_1 input`).val();
                            if (titleBlock1 == titleBlock2) {
                                $(`.coin_${k}_title_type_0`).css('background', 'red');
                                $(`.coin_${k}_title_type_1`).css('background', 'red');
                            }

                            let teacherBlock1 = $(`.coin_${k}_teacher_type_0 input`).val();
                            let teacherBlock2 = $(`.coin_${k}_teacher_type_1 input`).val();
                            if (teacherBlock1 == teacherBlock2) {
                                $(`.coin_${k}_teacher_type_0`).css('background', 'red');
                                $(`.coin_${k}_teacher_type_1`).css('background', 'red');
                            }

                            let auditoriumBlock1 = $(`.coin_${k}_auditorium_type_0 input`).val();
                            let auditoriumBlock2 = $(`.coin_${k}_auditorium_type_1 input`).val();
                            if (auditoriumBlock1 == auditoriumBlock2) {
                                $(`.coin_${k}_auditorium_type_0`).css('background', 'red');
                                $(`.coin_${k}_auditorium_type_1`).css('background', 'red');
                            }

                            let subgroupBlock1 = $(`.coin_${k}_subgroup_type_0 input`).val();
                            let subgroupBlock2 = $(`.coin_${k}_subgroup_type_1 input`).val();
                            if (subgroupBlock1 == subgroupBlock2) {
                                $(`.coin_${k}_subgroup_type_0`).css('background', 'red');
                                $(`.coin_${k}_subgroup_type_1`).css('background', 'red');
                            }

                            let separationBlock1 = $(`.coin_${k}_separation_type_0 input`).val();
                            let separationBlock2 = $(`.coin_${k}_separation_type_1 input`).val();
                            if (separationBlock1 == separationBlock2) {
                                $(`.coin_${k}_separation_type_0`).css('background', 'red');
                                $(`.coin_${k}_separation_type_1`).css('background', 'red');
                            }
                        }
                    })

                    $('.coincidences').html(`
                            ${result}
                    `);
                } else {
                    $('.coincidences').html(`
                        <div class="nonExistent">Совпадений не найдено!!!</div>
                    `);
                }


            }
        });
    })

    return `
        <section class="auditorium">
            <div class="showDataCoincidences">
                <div class="coincidences"></div>
            </div>
        </section>
        
        <script type="module" src="js/main.js"></script>
    `;
}
