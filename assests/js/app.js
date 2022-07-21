/*-----------jquery connected to app.js because to create click event on toggle button */
/*when we try to click on toggle icon then it will show the nav menu list  */
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

/**$ is a jquery tag to select object and it is easy to use */
/**owl carosuel file is linked because without linking it will not show in the live port , I have to call the owl carousel fumction*/
/**owl carousel for blog */
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: false,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
   
});
/**autoplaytimeout has given 3 sec because to rotate it every 3 sec automatically */
/**dots has been given to false because to remove the dots from the carousel */
/**nav: true  is a scroll<> navigation design of owl carousel */
/**calling jquery query tag with owl-carousel object to create a arrow on the website */

})