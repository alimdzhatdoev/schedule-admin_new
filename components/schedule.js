export function schedule() {
    return `
        <section class="schedule">
            <form action="../includes/pushData.php" method="POST">
                <div class="checkStartData">
                    <select name="startDataInstitute" id="startDataInstitute"></select>
                    <select name="startDataDirection" id="startDataDirection">
                        <option disabled selected>Выберите направление подготовки</option>
                        <option value="Прикладная информатика в экономике">Прикладная информатика в экономике</option>
                        <option value="Прикладная информатика в юриспруденции">Прикладная информатика в юриспруденции</option>
                        <option value="Прикладная математика и информатика">Прикладная математика и информатика</option>
                        <option value="Программная инженерия">Программная инженерия</option>
                    </select>
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
                </div>
            </div>
        </section>
        
        <script type="module" src="js/main.js"></script>
    `;
}