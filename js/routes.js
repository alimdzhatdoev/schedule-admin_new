import { students } from '../components/students.js';
import { auditorium } from '../components/auditorium.js';
import { schedule } from '../components/schedule.js';
import { teachers } from '../components/teachers.js';
import { groups } from '../components/groups.js';
import { coincidences } from '../components/coincidences.js';

window.onload = function () {
    function link(idBlock, link, component) {
        document.getElementById(idBlock).addEventListener("click", function (event) {
            event.preventDefault();
            history.pushState({}, "", link);
            $(".renderSection").html(component);
            setActiveElement(idBlock); // Устанавливаем активный элемент после смены раздела
        });
    }

    function setActiveElement(idBlock) {
        let blocks = $('.navPanel');
        blocks.each(function (index, block) {
            let id = $(block).attr('id');
            $(`#${id}`).css('border-bottom', '1px solid transparent');
        });
        $(`#${idBlock}`).css('border-bottom', '1px solid #000');
    }

    function routesData() {
        if (window.location.pathname === '/') {
            $(".renderSection").html(schedule);
            setActiveElement('scheduleLink');
        } else if (window.location.pathname === '/students') {
            $(".renderSection").html(students);
            setActiveElement('studentsLink');
        } else if (window.location.pathname === '/teachers') {
            $(".renderSection").html(teachers);
            setActiveElement('teachersLink');
        } else if (window.location.pathname === '/auditorium') {
            $(".renderSection").html(auditorium);
            setActiveElement('auditoriumLink');
        } else if (window.location.pathname === '/groups') {
            $(".renderSection").html(groups);
            setActiveElement('groupsLink');
        } else if (window.location.pathname === '/coincidences') {
            $(".renderSection").html(coincidences);
            setActiveElement('coincidencesLink');
        }
    }

    window.onpopstate = function() {
        routesData();
    };

    routesData();

    // Установка обработчиков событий для ссылок
    link('scheduleLink', '/', schedule);
    link('studentsLink', '/students', students);
    link('teachersLink', '/teachers', teachers);
    link('auditoriumLink', '/auditorium', auditorium);
    link('groupsLink', '/groups', groups);
    link('coincidencesLink', '/coincidences', coincidences);
}
