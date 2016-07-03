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
var switch_fast_facts_header = switching_prototype(".fast-facts-header-container", "fast-facts-header-toggled");
var switch_fast_facts_content = switching_prototype(".fast-facts-columns", "fast-facts-content-toggled");

$(document).ready(function(){
    //Functions as a switch (Could be done using CSS but
    //JavaScript is easier. Switch toggle checks for
    //presence of class or non-presense.
    $(".navbar-mobile-toggler").click(function(){
	switch_toggle();
	switch_layout_width();
	switch_fast_facts_header();
	switch_fast_facts_content();
    });

    //If you click a link, we want it to scroll
    //downwards instead of just going immediately to the link.
    $('.slide-down').click(function(){
	$(document).scrollTo($($.attr(this, 'href')).offset().top - 70, 200);
	//$(document).scrollTo(.top - 70, 200);
	return false;
    });
});

