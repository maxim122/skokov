
$(".fon-wrapper").on("click", function() {
    $(".fon-wrapper").css("display", "none");
    $(".strategic").css("background-image", "none");
    $(".video-wrapper").css("display", "block");
});

$(document).ready(function() {
        $('ul.navbar-nav a.nav-link').each(function () {
        if (this.href == location.href) $(this).parent().addClass('active');
     });
});
// $(".fon-wrapper").css()