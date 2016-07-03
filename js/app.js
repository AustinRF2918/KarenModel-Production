var switching_prototype = function(selector, toggleableClass)
{
    return function(){
	if ($(selector).hasClass(toggleableClass))
	{
	    $(selector).removeClass(toggleableClass);
	}
	else
	{
	    $(selector).addClass(toggleableClass);
	}
    };
};

//Toggle constructs
var switch_toggle = switching_prototype(".slide-out", "slide-out-toggleOff");
var switch_layout_width = switching_prototype(".page-layout-element", "shrunken");

//Simple DOM animation.
//Attr this should be a a this value called from an
//anonymous function( $('...').click(function(){ scroll_down(this...)})
//Offset value designates to what point we should scroll past or before
//our point, and time is obvious.
var scroll_down = function(attr_this, offset_value, time)
{
    $('html, body').animate({
	    scrollTop: $($.attr(attr_this, 'href')).offset().top - offset_value}, time);
};

$(document).ready(function(){
    //Functions as a switch (Could be done using CSS but
    //JavaScript is easier. Switch toggle checks for
    //presence of class or non-presense.
    $(".navbar-mobile-toggler").click(function(){
	switch_toggle();
	switch_layout_width();
    });

    //If you click a link, we want it to scroll
    //downwards instead of just going immediately to the link.
    $('a.slide-down').click(function(){
	scroll_down(this, 70, 500);
	return false;
    });
});

