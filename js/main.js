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
    
    $(`.${block} .weekData`).each(function(index) {
        $(this).attr("data-count", index+1);
        $(this).attr("data-check", `lesson_${index+1}_${block}`);
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