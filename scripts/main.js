$(document).ready(function() {
    $('.nav-menu-icon').click(function() {
        $('.nav-link-container').toggleClass('nav-menu-vert');
        $('.nav-menu-icon').toggleClass('menu-active');
    });
});