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

                data.forEach(el => {
                    console.log(el);
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
                                        <div class="coincidences_item__element coin_${i}_weekday_type_${j}"><span>День недели:</span> <input type="text" value="${element.weekday}"></div>
                                        <div class="coincidences_item__element coin_${i}_number_type_${j}"><span>Номер пары:</span> <input type="text" value="${element.number}"></div>
                                        <div class="coincidences_item__element coin_${i}_title_type_${j}"><span>Название пары:</span> <input type="text" value="${element.title}"></div>
                                        <div class="coincidences_item__element coin_${i}_teacher_type_${j}"><span>Преподаватель:</span> <input type="text" value="${element.teacher}"></div>
                                        <div class="coincidences_item__element coin_${i}_auditorium_type_${j}"><span>Аудитория:</span> <input type="text" value="${element.auditorium}"></div>
                                        <div class="coincidences_item__element coin_${i}_type_type_${j}"><span>Тип занятия:</span> <input type="text" value="${element.type}"></div>
                                        <div class="coincidences_item__element coin_${i}_subgroup_type_${j}"><span>Подгруппы:</span> <input type="text" value="${element.subgroup}"></div>
                                        <div class="coincidences_item__element coin_${i}_separation_type_${j}"><span>Числитель / Знаменатель:</span> <input type="text" value="${element.separation}"></div>
                                    </div>
                                    <div>
                                        <button>Изменить</button>
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

                console.log(i)

                $('.coincidences').html(`
                        ${result}
                `);
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
