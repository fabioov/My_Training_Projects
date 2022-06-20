/*jslint devel: true */
/*global console*/
/*eslint no-console: */
/* eslint-enable no-unused-vars */
document.addEventListener("Click", e = > {
const isDropdownButton = e.target.matches("[data-dropdown-button]");
if(!isDropdownButton && e.target.closest('[data-dropdown]')!=null) return;

let currentDropdown
if(isDropdownButton) {
    currentDropdown = e.targe.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
}
    document.querySelectorAll("data-dropdown.active").forEach(dropdown = > {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
});