var page_initialization = function()
{
    $(".slide-out").addClass("slide-out-toggleOff");
    console.log("Page initialized.");
};

var switch_toggle = function()
{
    if ($(".slide-out").hasClass("slide-out-toggleOff"))
    {
	$(".slide-out").removeClass("slide-out-toggleOff", 1000, "easeOutBounce");
    }
    else
    {
	$(".slide-out").addClass("slide-out-toggleOff", 1000, "easeOutBounce");
    }
};


$(document).ready(function(){
    page_initialization();

    $(".navbar-mobile-toggler").click(function(){
	console.log("Switching toggle.");
	switch_toggle();
    });

    $('a.slide-down').click(function(){
	$('html, body').animate({
	    scrollTop: $($.attr(this, 'href')).offset().top - 70}, 500);
	    return false;
    });
});

