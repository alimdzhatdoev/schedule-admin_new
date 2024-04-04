export function schedule() {
    function loadData(fileName, blockID, disabledText, param1, param2) {
        fetch('../includes/groups/' + fileName)
            .then(response => response.json())
            .then(data => {
                const selectGroup = document.getElementById(blockID);
                selectGroup.innerHTML = '';

                const disabledOption = document.createElement('option');
                disabledOption.disabled = true;
                disabledOption.selected = true;
                disabledOption.textContent = disabledText;
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

    loadData('getInstitutes.php', 'startDataInstitute', 'Выберите институт');

    $(document).ready(function () {
        $('#startDataInstitute').on('change', function () {
            var selectedInstitute = $(this).val();

            $('#startDataGroup').empty();
            $('#startDataGroup').css('display', 'none');
            $('#startDataDirection').css('display', 'block');

            $.ajax({
                url: '../includes/groups/getDirections.php',
                method: 'GET',
                data: {
                    institute: selectedInstitute
                },
                dataType: 'json',
                success: function (data) {
                    data.sort();
                    const selectGroup = document.getElementById('startDataDirection');
                    selectGroup.innerHTML = '';

                    const disabledOption = document.createElement('option');
                    disabledOption.disabled = true;
                    disabledOption.selected = true;
                    disabledOption.textContent = 'Выберите направление';
                    selectGroup.appendChild(disabledOption);

                    $.each(data, function (index, direction) {
                        $('#startDataDirection').append('<option value="' + direction + '">' + direction + '</option>');
                    });
                },
                error: function (xhr, status, error) {
                    console.error('Ошибка:', error);
                }
            });
        });

        $('#startDataDirection').on('change', function () {
            var selectedDirection = $(this).val();

            $('#startDataGroup').css('display', 'block');
            $.ajax({
                url: '../includes/groups/getGroups.php',
                method: 'GET',
                data: {
                    direction: selectedDirection
                },
                dataType: 'json',
                success: function (data) {
                    data.sort();
                    const selectGroup = document.getElementById('startDataGroup');
                    selectGroup.innerHTML = '';

                    const disabledOption = document.createElement('option');
                    disabledOption.disabled = true;
                    disabledOption.selected = true;
                    disabledOption.textContent = 'Выберите группу';
                    selectGroup.appendChild(disabledOption);

                    $.each(data, function (index, group) {
                        $('#startDataGroup').append('<option value="' + group + '">' + group + '</option>');
                    });
                },
                error: function (xhr, status, error) {
                    console.error('Ошибка:', error);
                }
            });
        });

        $('#startDataGroup').on('change', function () {
            var selectedGroup = $(this).val();

            var elements = document.querySelectorAll('.weekData');

            elements.forEach(function (element) {
                element.parentNode.removeChild(element);
            });

            $.ajax({
                url: '../includes/getLessonsGroup.php',
                method: 'GET',
                data: {
                    selectedGroup: selectedGroup
                },
                dataType: 'json',
                success: function (data) {
                    data.sort();

                    let days = {
                        'monday': 'monday',
                        'tuesday': 'tuesday',
                        'wednesday': 'wednesday',
                        'thursday': 'thursday',
                        'friday': 'friday',
                        'saturday': 'saturday',
                        'sunday': 'sunday',
                    };

                    let mass = {
                        'monday': [],
                        'tuesday': [],
                        'wednesday': [],
                        'thursday': [],
                        'friday': [],
                        'saturday': [],
                        'sunday': [],
                    };

                    $.each(days, function (index, day) {
                        // Сначала создаем массивы для каждой пары
                        for (let i = 1; i <= 8; i++) {
                            mass[day].push([]);
                        }

                        // Заполняем массивы объектами
                        $.each(data, function (index, group) {
                            if (group.weekday == day) {
                                mass[day][parseInt(group.number) - 1].push(group);
                            }
                        });
                        
                        $('.weekType_types__element').css({
                            backgroundColor: 'transparent', 
                            pointerEvents: 'none', 
                            border: '1px solid rgb(46, 49, 129)'
                        })
                        $('.type_element').css({ 
                            border: '1px solid rgb(46, 49, 129)'
                        })

                        // Удаляем пустые массивы
                        mass[day] = mass[day].filter(function (array) {
                            return array.length > 0;
                        });

                        let count_separation_chislitel = 0;
                        let count_separation_znamenatel = 0;
                        let count_subgroup_podgruppa1 = 0;
                        let count_subgroup_podgruppa2 = 0;

                        let les_type = '';

                        $.each(mass[day], function (index, lesson) {
                            $.each(lesson, function (index, les) {
                                if (les['separation'] == 'числитель') {
                                    count_separation_chislitel++;
                                }
                                if (les['separation'] == 'знаменатель') {
                                    count_separation_znamenatel++;
                                }
                                if (les['subgroup'] == '1') {
                                    count_subgroup_podgruppa1++;
                                }
                                if (les['subgroup'] == '2') {
                                    count_subgroup_podgruppa2++;
                                }
                            })

                            if (
                                count_separation_chislitel == 0 &&
                                count_separation_znamenatel == 0 &&
                                count_subgroup_podgruppa1 == 0 &&
                                count_subgroup_podgruppa2 == 0
                            ) {
                                les_type = 'type1'
                            }

                            if (
                                count_separation_chislitel == 0 &&
                                count_separation_znamenatel == 0 &&
                                count_subgroup_podgruppa1 == 1 &&
                                count_subgroup_podgruppa2 == 1
                            ) {
                                les_type = 'type2'
                            }

                            if (
                                count_separation_chislitel == 1 &&
                                count_separation_znamenatel == 1 &&
                                count_subgroup_podgruppa1 == 0 &&
                                count_subgroup_podgruppa2 == 0
                            ) {
                                les_type = 'type3'
                            }

                            if (
                                count_separation_chislitel == 2 &&
                                count_separation_znamenatel == 1 &&
                                count_subgroup_podgruppa1 == 1 &&
                                count_subgroup_podgruppa2 == 1
                            ) {
                                les_type = 'type4'
                            }

                            if (
                                count_separation_chislitel == 1 &&
                                count_separation_znamenatel == 2 &&
                                count_subgroup_podgruppa1 == 1 &&
                                count_subgroup_podgruppa2 == 1
                            ) {
                                les_type = 'type5'
                            }

                            if (
                                count_separation_chislitel == 2 &&
                                count_separation_znamenatel == 2 &&
                                count_subgroup_podgruppa1 == 2 &&
                                count_subgroup_podgruppa2 == 2
                            ) {
                                les_type = 'type6'
                            }

                            if (
                                count_separation_chislitel == 1 &&
                                count_separation_znamenatel == 1 &&
                                count_subgroup_podgruppa1 == 2 &&
                                count_subgroup_podgruppa2 == 1
                            ) {
                                les_type = 'type7'
                            }

                            if (
                                count_separation_chislitel == 1 &&
                                count_separation_znamenatel == 1 &&
                                count_subgroup_podgruppa1 == 1 &&
                                count_subgroup_podgruppa2 == 2
                            ) {
                                les_type = 'type8'
                            }


                            let count = index + 1;
                            let block = day;

                            if (les_type == 'type1') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type1">
                                        ${type1Change(block, count)}
                                    </div>
                                `);

                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separate'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separate'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type2') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type2">
                                        ${type2Change(block, count)}
                                    </div>
                                `);

                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separate'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separate'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type3') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type3">
                                        ${type3Change(block, count)}
                                    </div>
                                `);

                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type4') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type4">
                                        ${type4Change(block, count)}
                                    </div>
                                `);
                                
                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type5') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type5">
                                        ${type5Change(block, count)}
                                    </div>
                                `);
                                
                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type6') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type6">
                                        ${type6Change(block, count)}
                                    </div>
                                `);
                                
                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type7') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type7">
                                        ${type7Change(block, count)}
                                    </div>
                                `);
                                
                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            if (les_type == 'type8') {
                                $(`.${day}`).append(`
                                    <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type8">
                                        ${type8Change(block, count)}
                                    </div>
                                `);
                                
                                $.each(lesson, function (index, les) {
                                    let subgroup = 'subgroup0';
                                    let separate = 'noSeparate';

                                    if (les['subgroup'] == '1') {
                                        subgroup = 'subgroup1';
                                    }
                                    if (les['subgroup'] == '2') {
                                        subgroup = 'subgroup2';
                                    }

                                    if (les['separation'] == "числитель") {
                                        separate = 'chislitel';
                                    }
                                    if (les['separation'] == "знаменатель") {
                                        separate = 'znamenatel';
                                    }

                                    $(`[name="${day}_number_${count}"]`).val(les['number']);

                                    $(`#${day}_title_${count}_${subgroup}_${separate}`).val(les['title']);
                                    $(`#${day}_teacher_${count}_${subgroup}_${separate}`).val(les['teacher']);
                                    $(`#${day}_auditorium_${count}_${subgroup}_${separate}`).val(les['auditorium']);
                                    $(`#${day}_type_${count}_${subgroup}_${separate}`).val(les['type']);
                                })
                            }

                            count_separation_chislitel = 0;
                            count_separation_znamenatel = 0;
                            count_subgroup_podgruppa1 = 0;
                            count_subgroup_podgruppa2 = 0;



                            // monday_title_1_subgroup0_noSeparate

                        })


                    });

                    console.log(mass);

                },
                error: function (xhr, status, error) {
                    console.error('Ошибка:', error);
                }
            });
        });


    });


    return `
        <section class="schedule">
            <form action="../includes/pushData.php" method="POST">
                <div class="checkStartData">
                    <select name="startDataInstitute" id="startDataInstitute"></select>
                    <select name="startDataDirection" id="startDataDirection"></select>
                    <select name="startDataGroup" id="startDataGroup"></select>
                </div>
                <h2>Расписание:</h2>
                <section class="monday">
                    <div class="weekDay">
                        <div class="weekDay_title">Понедельник</div>
                        <div class="weekDay_add" data-element="monday">+</div>
                    </div>
                </section>

                <section class="tuesday">
                    <div class="weekDay">
                        <div class="weekDay_title">Вторник</div>
                        <div class="weekDay_add" data-element="tuesday">+</div>
                    </div>
                </section>

                <section class="wednesday">
                    <div class="weekDay">
                        <div class="weekDay_title">Среда</div>
                        <div class="weekDay_add" data-element="wednesday">+</div>
                    </div>
                </section>

                <section class="thursday">
                    <div class="weekDay">
                        <div class="weekDay_title">Четверг</div>
                        <div class="weekDay_add" data-element="thursday">+</div>
                    </div>
                </section>

                <section class="friday">
                    <div class="weekDay">
                        <div class="weekDay_title">Пятница</div>
                        <div class="weekDay_add" data-element="friday">+</div>
                    </div>
                </section>

                <section class="saturday">
                    <div class="weekDay">
                        <div class="weekDay_title">Суббота</div>
                        <div class="weekDay_add" data-element="saturday">+</div>
                    </div>
                </section>

                <button id="addScheduleToDB">Добавить</button>
            </form>

            <div class="weekType">
                <div class="weekType_title">Выберите тип:</div>
                <div class="weekType_types">
                    <div class="weekType_types__element type1 type_element" data-type="type1">
                        <div class="type_element type1_block"></div>
                    </div>
                    <div class="weekType_types__element type2 type_element" data-type="type2">
                        <div class="type_element type2_block"></div>
                        <div class="type_element type2_block"></div>
                    </div>
                    <div class="weekType_types__element type3 type_element" data-type="type3">
                        <div>
                            <div class="type_element type3_block"></div>
                            <div class="type_element type3_block"></div>
                        </div>
                    </div>
                    <div class="weekType_types__element type7 type_element" data-type="type7">
                        <div>
                            <div class="type_element type7_block"></div>
                            <div class="type_element type7_block"></div>
                        </div>
                        <div>
                            <div class="type_element type7_block"></div>
                        </div>
                    </div>
                    <div class="weekType_types__element type8 type_element" data-type="type8">
                        <div>
                            <div class="type_element type8_block"></div>
                        </div>
                        <div>
                            <div class="type_element type8_block"></div>
                            <div class="type_element type8_block"></div>
                        </div>
                    </div>
                    <div class="weekType_types__element type4 type_element" data-type="type4">
                        <div>
                            <div class="type_element type4_block"></div>
                            <div class="type_element type4_block"></div>
                        </div>
                        <div class="type_element type4_block"></div>
                    </div>
                    <div class="weekType_types__element type5 type_element" data-type="type5">
                        <div class="type_element type5_block"></div>
                        <div>
                            <div class="type_element type5_block"></div>
                            <div class="type_element type5_block"></div>
                        </div>
                    </div>
                    <div class="weekType_types__element type6 type_element" data-type="type6">
                        <div>
                            <div class="type_element type6_block"></div>
                            <div class="type_element type6_block"></div>
                        </div>
                        <div>
                            <div class="type_element type6_block"></div>
                            <div class="type_element type6_block"></div>
                        </div>
                    </div>
                    <div class="deleteLineButtonBlock">Удалить строку</div>
                </div>
            </div>
        </section>

        <script src="js/types.js"></script>
        <script src="js/main.js"></script>
    `;
}