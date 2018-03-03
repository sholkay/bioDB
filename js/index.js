// Preloader
$(window).on('load',function () {

    setTimeout(function () {
        $('.spinner').fadeOut("slow");

        setTimeout(function () {
            $('#prelaoder').fadeOut("slow");

            setTimeout(function () {
                $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                $('#footer').fadeIn('slow');

            }, 900);
        }, 700);
    }, 700);

});


// Homepage
$(".dot").click(function () {
    $(".dot").removeClass('active')
    $(this).addClass('active')
})

$(".aboutme-btn").click(function () {
    var targetPosition = $(".about-me").offset().top
    $("body,html").animate({ "scrollTop": targetPosition })
})

$(".coolthingsidid-btn").click(function () {
    var targetPosition = $(".cool-things-i-did").offset().top
    $("body,html").animate({ "scrollTop": targetPosition })
})

$(".contact-btn").click(function () {
    var targetPosition = $(".contactme").offset().top
    $("body,html").animate({ "scrollTop": targetPosition })
})

$(".mainpage-btn").click(function () {
    var targetPosition = 0
    $("body,html").animate({ "scrollTop": targetPosition })
})

// Slide down categories 
$('#category-tabs li a').click(function () {
    $(this).next('ul').slideToggle('500');
    $(this).find('i').toggleClass('fa-minus fa-plus ')
});
