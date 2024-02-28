function type1Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number">
        <div class="inputDropBlock">
            <input 
                name="${block}_title_${count}_subgroup0_noSeparate" 
                id="${block}_title_${count}_subgroup0_noSeparate" 
                placeholder="Введите название занятие"
                onclick="showList('${block}_title_${count}_dropdown', '${block}_title_${count}_subgroup0_noSeparate', 'items')"
                oninput="showDropdown('${block}_title_${count}_dropdown', '${block}_title_${count}_subgroup0_noSeparate', 'items')"
            />
            <div class="dropdown-content" id="${block}_title_${count}_dropdown"></div>
        </div>

        <div class="inputDropBlock">
            <input 
                name="${block}_teacher_${count}_subgroup0_noSeparate" 
                id="${block}_teacher_${count}_subgroup0_noSeparate" 
                placeholder="Введите ФИО преподавателя"
                onclick="showList('${block}_teacher_${count}_dropdown', '${block}_teacher_${count}_subgroup0_noSeparate', 'teachers')"
                oninput="showDropdown('${block}_teacher_${count}_dropdown', '${block}_teacher_${count}_subgroup0_noSeparate', 'teachers')"
            />
            <div class="dropdown-content" id="${block}_teacher_${count}_dropdown"></div>
        </div>

        <div class="inputDropBlock">
            <input 
                name="${block}_auditorium_${count}_subgroup0_noSeparate"
                id="${block}_auditorium_${count}_subgroup0_noSeparate" 
                placeholder="Введите номер аудитории"
                onclick="showList('${block}_auditorium_${count}_dropdown', '${block}_auditorium_${count}_subgroup0_noSeparate', 'auditorium')"
                oninput="showDropdown('${block}_auditorium_${count}_dropdown', '${block}_auditorium_${count}_subgroup0_noSeparate', 'auditorium')"
            />
            <div class="dropdown-content" id="${block}_auditorium_${count}_dropdown"></div>
        </div>

        <div class="inputDropBlock">
            <input 
                name="${block}_type_${count}_subgroup0_noSeparate" 
                id="${block}_type_${count}_subgroup0_noSeparate" 
                placeholder="Введите тип занятия"
                onclick="showList('${block}_type_${count}_dropdown', '${block}_type_${count}_subgroup0_noSeparate', 'types')"
                oninput="showDropdown('${block}_type_${count}_dropdown', '${block}_type_${count}_subgroup0_noSeparate', 'types')"
            />
            <div class="dropdown-content" id="${block}_type_${count}_dropdown"></div>
        </div>

        <input type="hidden" name="${block}_subgroup_${count}_subgroup0_noSeparate" value="-">
        <input type="hidden" name="${block}_separate_${count}_subgroup0_noSeparate" value="-">
    `;
}

function type2Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number">
        <div class="weekData_type2">
            <select name="${block}_title_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
            <select name="${block}_title_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
        </div>
        <div class="weekData_type2">
            <select name="${block}_teacher_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
            <select name="${block}_teacher_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
        </div>
        <div class="weekData_type2">
            <select name="${block}_auditorium_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
            <select name="${block}_auditorium_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
        </div>
        <div class="weekData_type2">
            <select name="${block}_type_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
            <select name="${block}_type_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
        </div>  
        <div class="weekData_type2 hidden">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup1_noSeparate" value="1">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup2_noSeparate" value="2">
        </div>    
        <div class="weekData_type2 hidden">
            <input type="hidden" name="${block}_separate_${count}_subgroup1_noSeparate" value="-">
            <input type="hidden" name="${block}_separate_${count}_subgroup2_noSeparate" value="-">
        </div>    
    `;
}

function type3Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number" >
        <div class="weekData_type3">
            <select name="${block}_title_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
            <select name="${block}_title_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
        </div>
        <div class="weekData_type3">
            <select name="${block}_teacher_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
            <select name="${block}_teacher_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
        </div>
        <div class="weekData_type3">
            <select name="${block}_auditorium_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
            <select name="${block}_auditorium_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
        </div>
        <div class="weekData_type3">
            <select name="${block}_type_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
            <select name="${block}_type_${count}_subgroup0_znamenatel">
            <option value="-">-</option>
                <option disabled selected>Выберите тип занятия</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
        </div>
        <div class="weekData_type3 hidden">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup0_chislitel" value="-">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup0_znamenatel" value="-">
        </div>    
        <div class="weekData_type3 hidden">
            <input type="hidden" name="${block}_separate_${count}_subgroup0_chislitel" value="числитель">
            <input type="hidden" name="${block}_separate_${count}_subgroup0_znamenatel" value="знаменатель">
        </div> 
    `;
}

function type4Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number" >
        <div class="weekData_type4">
            <div>
                <select name="${block}_title_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
            <select name="${block}_title_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
        </div>
        <div class="weekData_type4">
            <div>
                <select name="${block}_teacher_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>

            <select name="${block}_teacher_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
        </div>
        <div class="weekData_type4">
            <div>
                <select name="${block}_auditorium_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>

            <select name="${block}_auditorium_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
        </div>
        <div class="weekData_type4">
            <div>
                <select name="${block}_type_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>

            <select name="${block}_type_${count}_subgroup0_znamenatel">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
        </div>
        <div class="weekData_type4 hidden">
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_chislitel" value="1">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_chislitel" value="2">
            </div>
            <input type="hidden" name="${block}_subgroup_${count}_subgroup0_znamenatel" value="-">
        </div>    
        <div class="weekData_type4 hidden">
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup1_chislitel" value="числитель">
                <input type="hidden" name="${block}_separate_${count}_subgroup2_chislitel" value="числитель">
            </div>
            <input type="hidden" name="${block}_separate_${count}_subgroup0_znamenatel" value="знаменатель">
        </div> 
    `;
}

function type5Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number" >
        <div class="weekData_type5">
            <select name="${block}_title_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
            <div>
                <select name="${block}_title_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
        </div>
        <div class="weekData_type5">
            <select name="${block}_teacher_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
            <div>
                <select name="${block}_teacher_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>
        </div>
        <div class="weekData_type5">
            <select name="${block}_auditorium_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
            <div>
                <select name="${block}_auditorium_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>
        </div>
        <div class="weekData_type5">
            <select name="${block}_type_${count}_subgroup0_chislitel">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
            <div>
                <select name="${block}_type_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>
        </div>
        <div class="weekData_type5 hidden">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup0_chislitel" value="-">
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_znamenatel" value="1">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_znamenatel" value="2">
            </div>
        </div>    
        <div class="weekData_type5 hidden">
            <input type="hidden" name="${block}_separate_${count}_subgroup0_chislitel" value="числитель">
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup1_znamenatel" value="знаменатель">
                <input type="hidden" name="${block}_separate_${count}_subgroup2_znamenatel" value="знаменатель">
            </div>
        </div> 
    `;
}

function type6Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number" >
        <div class="weekData_type6">
            <div>
                <select name="${block}_title_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
            <div>
                <select name="${block}_title_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
        </div>

        <div class="weekData_type6">
            <div>
                <select name="${block}_teacher_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>
            <div>
                <select name="${block}_teacher_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>
        </div>

        <div class="weekData_type6">
            <div>
                <select name="${block}_auditorium_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>
            <div>
                <select name="${block}_auditorium_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>
        </div>

        <div class="weekData_type6">
            <div>
                <select name="${block}_type_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>
            <div>
                <select name="${block}_type_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>
        </div>
        <div class="weekData_type6 hidden">
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_chislitel" value="1">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_chislitel" value="2">
            </div>
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_znamenatel" value="1">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_znamenatel" value="2">
            </div>
        </div>    
        <div class="weekData_type6 hidden">
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup1_chislitel" value="числитель">
                <input type="hidden" name="${block}_separate_${count}_subgroup2_chislitel" value="числитель">
            </div>
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup1_znamenatel" value="знаменатель">
                <input type="hidden" name="${block}_separate_${count}_subgroup2_znamenatel" value="знаменатель">
            </div>
        </div> 
    `;
}

function type7Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number">
        <div class="weekData_type7">
            <div>
                <select name="${block}_title_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
            <select name="${block}_title_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
        </div>
        <div class="weekData_type7">
            <div>
                <select name="${block}_teacher_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>
            <select name="${block}_teacher_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
        </div>
        <div class="weekData_type7">
            <div>
                <select name="${block}_auditorium_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>
            <select name="${block}_auditorium_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
        </div>
        <div class="weekData_type7">
            <div>
                <select name="${block}_type_${count}_subgroup1_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup1_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>
            <select name="${block}_type_${count}_subgroup2_noSeparate">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
        </div>  
        <div class="weekData_type7 hidden">
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_chislitel" value="1">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup1_znamenatel" value="1">
            </div>
            <input type="hidden" name="${block}_subgroup_${count}_subgroup2_noSeparate" value="2">
        </div>    
        <div class="weekData_type7 hidden">
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup1_chislitel" value="числитель">
                <input type="hidden" name="${block}_separate_${count}_subgroup1_znamenatel" value="знаменатель">
            </div>
            <input type="hidden" name="${block}_separate_${count}_subgroup2_noSeparate" value="-">
        </div>    
    `;
}

function type8Change(block, count) {
    return `
        <input type="text" placeholder="№" name="${block}_number_${count}" class="weekData_number">
        <div class="weekData_type8">
            <select name="${block}_title_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                <option value="Информатика и программирование">Информатика и программирование</option>
                <option value="Математика">Математика</option>
                <option value="История России">История России</option>
            </select>
            <div>
                <select name="${block}_title_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
                <select name="${block}_title_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите занятие</option>
            <option value="-">-</option>
                    <option value="Информатика и программирование">Информатика и программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="История России">История России</option>
                </select>
            </div>
        </div>
        <div class="weekData_type8">
            <select name="${block}_teacher_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                <option value="Преподаватель 1">Преподаватель 1</option>
                <option value="Преподаватель 2">Преподаватель 2</option>
                <option value="Преподаватель 3">Преподаватель 3</option>
                <option value="Преподаватель 4">Преподаватель 4</option>
                <option value="Преподаватель 5">Преподаватель 5</option>
            </select>
            <div>
                <select name="${block}_teacher_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
                <select name="${block}_teacher_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите преподавателя</option>
            <option value="-">-</option>
                    <option value="Преподаватель 1">Преподаватель 1</option>
                    <option value="Преподаватель 2">Преподаватель 2</option>
                    <option value="Преподаватель 3">Преподаватель 3</option>
                    <option value="Преподаватель 4">Преподаватель 4</option>
                    <option value="Преподаватель 5">Преподаватель 5</option>
                </select>
            </div>
        </div>
        <div class="weekData_type8">
            <select name="${block}_auditorium_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                <option value="215">215</option>
                <option value="216">216</option>
                <option value="217">217</option>
                <option value="218">218</option>
                <option value="219">219</option>
            </select>
            <div>
                <select name="${block}_auditorium_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
                <select name="${block}_auditorium_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите аудиторию</option>
            <option value="-">-</option>
                    <option value="215">215</option>
                    <option value="216">216</option>
                    <option value="217">217</option>
                    <option value="218">218</option>
                    <option value="219">219</option>
                </select>
            </div>
        </div>
        <div class="weekData_type8">
            <select name="${block}_type_${count}_subgroup1_noSeparate">
                <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                <option value="Лекционное занятие">Лекционное занятие</option>
                <option value="Лабораторное занятие">Лабораторное занятие</option>
                <option value="Практическое занятие">Практическое занятие</option>
            </select>
            <div>
                <select name="${block}_type_${count}_subgroup2_chislitel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
                <select name="${block}_type_${count}_subgroup2_znamenatel">
                    <option disabled selected>Выберите тип занятия</option>
            <option value="-">-</option>
                    <option value="Лекционное занятие">Лекционное занятие</option>
                    <option value="Лабораторное занятие">Лабораторное занятие</option>
                    <option value="Практическое занятие">Практическое занятие</option>
                </select>
            </div>
        </div>  
        <div class="weekData_type8 hidden">
            <input type="hidden" name="${block}_subgroup_${count}_subgroup1_noSeparate" value="1">
            <div>
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_chislitel" value="2">
                <input type="hidden" name="${block}_subgroup_${count}_subgroup2_znamenatel" value="2">
            </div>
        </div>    
        <div class="weekData_type8 hidden">
            <input type="hidden" name="${block}_separate_${count}_subgroup1_noSeparate" value="-">
            <div>
                <input type="hidden" name="${block}_separate_${count}_subgroup2_chislitel" value="числитель">
                <input type="hidden" name="${block}_separate_${count}_subgroup2_znamenatel" value="знаменатель">
            </div>
        </div>    
    `;
}




function showDropdown(dropDownBlockID, BlockValueID, tableName) {
    let value = $(`#${BlockValueID}`).val();
    let dropdownList = $(`#${dropDownBlockID}`);

    dropdownList.empty();

    $.ajax({
        url: '../includes/getDropDownInfo.php',
        method: 'POST',
        data: { tableName: tableName },
        dataType: 'text',
        success: function (response) {
            const data = JSON.parse(response);

            const filteredData = data.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            filteredData.sort((a, b) => a.localeCompare(b));

            const lastFiveItems = filteredData.slice(-5);
            lastFiveItems.forEach(item => {
                const option = $(`<div class="elements">${item}</div>`);
                option.on('click', function () {
                    $(`#${BlockValueID}`).val(item);
                    dropdownList.hide();
                });
                dropdownList.append(option);
            });
        },
        error: function (xhr, status, error) {
            console.error('Ошибка при выполнении AJAX-запроса:', error);
        }
    });

    dropdownList.show();

    $(document).on('click', function (event) {
        if (!dropdownList.is(event.target) && dropdownList.has(event.target).length === 0 && event.target !== $(`#${BlockValueID}`)[0]) {
            dropdownList.hide();
        }
    });
}

function showList(dropDownBlockID, BlockValueID, tableName) {
    showDropdown(dropDownBlockID, BlockValueID, tableName);
}
