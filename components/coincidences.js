export function coincidences() {
    $(document).ready(function () {
        $.ajax({
            type: 'POST',
            url: '../includes/checkTableData.php',
            data: {},
            success: function (response) {
                let data = JSON.parse(response);
                console.log(data);

                // $('.showData').html();
            }
        });
    })

    return `
        <section class="auditorium">
            <div class="showData">
                Совпадения
            </div>
        </section>
        
        <script type="module" src="js/main.js"></script>
    `;
}
