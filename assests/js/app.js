/*-----------jquery connected to app.js because to create click event on toggle button */
/*when we try to click on toggle icon then it will show the nav menu list  */
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
})