navbarChange = () => {
    if ($(window).scrollTop() > 530) {
        $('.navbar').addClass("gradient");
    } else {
        $('.navbar').removeClass("gradient");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        navbarChange();
    })
}