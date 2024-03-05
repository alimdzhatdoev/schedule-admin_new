let counts = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0
};

$(document).on('click', '.weekType_types__element', function () {
    let changeBlock = JSON.parse(localStorage['block']);

    let blockName = `lesson_${changeBlock.dataCount}_${changeBlock.dataBlock}`;

    let type = $(this).attr('data-type');

    $(`.type_element`).css('border', '1px solid #2e3181')
    $(`.${type}_block`).css('border', '1px solid #fff')

    $(`.weekType_types__element`).css('background-color', 'transparent')
    $(`.weekType_types [data-type="${type}"]`).css('background-color', '#2e3181')

    if (type == 'type1') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type1Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type1');
    }

    if (type == 'type2') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type2Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type2');
    }

    if (type == 'type3') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type3Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type3');
    }

    if (type == 'type4') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type4Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type4');
    }

    if (type == 'type5') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type5Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type5');
    }

    if (type == 'type6') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type6Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type6');
    }

    if (type == 'type7') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type7Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type7');
    }

    if (type == 'type8') {
        $(`[data-check="${changeBlock.dataCheck}"]`).html(type8Change(changeBlock.dataBlock, changeBlock.dataCount))
        $(`[data-check="${blockName}"]`).attr('data-type', 'type8');
    }
})

$(document).on('click', '.weekDay_add', function () {
    let block = $(this).attr("data-element");

    counts[block] += 1;

    let count = counts[block];

    $(`.${block}`).append(`
        <div class="weekData" data-check="lesson_${count}_${block}" data-count="${count}" data-block="${block}" data-type="type1">
            ${type1Change(block, count)}
        </div>
    `);

    $(`.${block} .weekData`).each(function (index) {
        $(this).attr("data-count", index + 1);
        $(this).attr("data-check", `lesson_${index + 1}_${block}`);
    });

})

$(document).on('click', '.weekData', function () {
    let type = $(this).attr("data-type");

    $(`.weekType_types__element`).css('background-color', 'transparent')
    $(`.weekType_types__element`).css('pointer-events', 'all')
    $(`.weekType_types [data-type="${type}"]`).css('background-color', '#2e3181')
    $(`.type_element`).css('border', '1px solid #2e3181')
    $(`.${type}_block`).css('border', '1px solid #fff')

    $('.weekData').css("background-color", "");
    $(this).css("background-color", "#2e3181");

    let data = {};
    data.dataCheck = $(this).attr("data-check");
    data.dataCount = $(this).attr("data-count");
    data.dataBlock = $(this).attr("data-block");

    localStorage.setItem('block', JSON.stringify(data));
});

$(document).on('click', '#addScheduleToDB', function (event) {
    let startDataInstitute = $("#startDataInstitute").val();
    let startDataDirection = $("#startDataDirection").val();
    let startDataGroup = $("#startDataGroup").val();

    let count = 0;

    $("input").each(function () {
        if ($(this).val() === '') {
            count = count + 1;
        }
    });

    if (startDataInstitute == null || startDataDirection == null || startDataGroup == null || count > 0) {
        event.preventDefault();
        alert('Заполните все данные');
    }
});

//Институты
fetch('../includes/groups/getInstitutes.php')
    .then(response => response.json())
    .then(data => {
        const selectGroup = document.getElementById('startDataInstitute');
        selectGroup.innerHTML = '';

        const disabledOption = document.createElement('option');
        disabledOption.disabled = true;
        disabledOption.selected = true;
        disabledOption.textContent = 'Выберите институт';
        selectGroup.appendChild(disabledOption);

        data.sort().forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.textContent = group;
            selectGroup.appendChild(option);
        });
    })
    .catch(error => console.error('Ошибка:', error));

//Направления
fetch('../includes/groups/getDirections.php')
    .then(response => response.json())
    .then(data => {
        const selectGroup = document.getElementById('startDataDirection');
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

//Группы
fetch('../includes/groups/getGroups.php')
    .then(response => response.json())
    .then(data => {
        const selectGroup = document.getElementById('startDataGroup');
        selectGroup.innerHTML = '';

        const disabledOption = document.createElement('option');
        disabledOption.disabled = true;
        disabledOption.selected = true;
        disabledOption.textContent = 'Выберите группу';
        selectGroup.appendChild(disabledOption);

        data.sort().forEach(group => {
            const option = document.createElement('option');
            option.value = group;
            option.textContent = group;
            selectGroup.appendChild(option);
        });
    })
    .catch(error => console.error('Ошибка:', error));
