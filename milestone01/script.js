"use strict";
var language = document.getElementById("language-lists");
var skills = document.getElementById("skills-list");
var arrowSkills = document.querySelector("#show-hide-skills .arrow");
var arrowLanguages = document.querySelector("#show-hide-languages .arrow");
var x = 0;
var y = 0;
function hideFunction() {
    if (y === 0) {
        if (language && arrowLanguages) {
            language.style.display = 'none';
            arrowLanguages.classList.remove('up');
            arrowLanguages.classList.add('down');
        }
        y = 1;
    }
    else {
        if (language && arrowLanguages) {
            language.style.display = 'inline-block';
            arrowLanguages.classList.remove('down');
            arrowLanguages.classList.add('up');
            y = 0;
        }
    }
}
function SkillsTabFunction() {
    if (x === 0) {
        if (skills && arrowSkills) {
            skills.style.display = 'none';
            arrowSkills.classList.remove('up');
            arrowSkills.classList.add('down');
            x = 1;
        }
    }
    else {
        if (skills && arrowSkills) {
            skills.style.display = 'inline-block';
            arrowSkills.classList.remove('down');
            arrowSkills.classList.add('up');
            x = 0;
        }
    }
}
