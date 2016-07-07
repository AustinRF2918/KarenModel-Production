//Factory for switching functions, takes the selector and the class that
//we will be toggling.
var switching_prototype = function(selector, toggleableClass)
{
    return function(){
	($(selector).toggleClass(toggleableClass));
    };
};

//Factory for additive forcer functions, takes the selector and the class
//that we will be toggling.
var force_off_prototype_additive = function(selector, toggleableClass)
{
    return function(){
	$(selector).addClass(toggleableClass);
    };
};

//Factory for subtractive forcer functions, takes the selector and the class
//that we will be toggling.
var force_off_prototype_subtractive = function(selector, toggleableClass)
{
    return function(){
	$(selector).removeClass(toggleableClass);
    };
};

var create_page_hook = function(startPoint, stopPoint, linkID, ssCont, offset, className)
{
	new ScrollMagic.Scene({
	    offset: $(startPoint).offset().top - offset,
	    duration: $(stopPoint).offset().top - $(startPoint).offset().top 
	})
	    .setClassToggle(linkID, className)
	    .addTo(ssCont);
};

var create_page_hook_oneshot = function(startPoint, stopPoint, linkID, ssCont, offset, className)
{
	new ScrollMagic.Scene({
	    offset: $(startPoint).offset().top - offset,
	})
	    .removeClassToggle()
	    .setClassToggle(linkID, className)
	    .reverse(false)
	    .addTo(ssCont);
};

//Toggle constructs
var switch_toggle = switching_prototype(".slide-out", "slide-out-toggleOff");
var switch_layout_width = switching_prototype(".page-layout-element", "shrunken");
var switch_fast_facts_header = switching_prototype(".fast-facts-header-container", "fast-facts-header-toggled");
var switch_fast_facts_content = switching_prototype(".fast-facts-columns", "fast-facts-content-toggled");
var switch_intro_content = switching_prototype(".introduction-text-container", "introduction-text-toggled");
var switch_mobile_toggler = switching_prototype(".navbar-mobile-toggler", "navbar-mobile-toggler-toggled")

//Forcer Constructs
//Note that some of these are additive and some area
//subtractive: this is because I didn't realize it at
//the time, but I actually made some CSS elements ADDED
//if you clicked the toggle, and made some SUBTRACTED.
var force_toggle = force_off_prototype_additive(".slide-out", "slide-out-toggleOff");
var force_layout_width = force_off_prototype_subtractive(".page-layout-element", "shrunken");
var force_fast_facts_header = force_off_prototype_subtractive(".fast-facts-header-container", "fast-facts-header-toggled");
var force_fast_facts_content = force_off_prototype_subtractive(".fast-facts-columns", "fast-facts-content-toggled");
var force_intro_content = force_off_prototype_subtractive(".introduction-text-container", "introduction-text-toggled");
var force_mobile_toggler = force_off_prototype_subtractive(".navbar-mobile-toggler", "navbar-mobile-toggler-toggled");


$(document).ready(function(){
    //Functions as a switch (Could be done using CSS but
    //JavaScript is easier. Switch toggle checks for
    //presence of class or non-presense.
    $(".navbar-mobile-toggler").click(function(){
	switch_toggle();
	switch_layout_width();
	switch_fast_facts_header();
	switch_fast_facts_content();
	switch_intro_content();
	switch_mobile_toggler();
    });

    //Functions as a force, basically means the user
    //can really easily click out of the sidebar.
    $(".page-layout-element").click(function(){
	force_toggle();
	force_layout_width();
	force_fast_facts_header();
	force_fast_facts_content();
	force_intro_content();
	force_mobile_toggler();
    });

    //If you click a link, we want it to scroll
    //downwards instead of just going immediately to the link.

    var li = $($('.ii').attr('href')).offset().top - 50;
    $('.ii').click(function(){
	$('html,body').animate({scrollTop:li}, 300, function(){
	    if ($('html').offset().top != li)
	    {
		window.location.replace("#introduction");
	    }
	});
	    return false;
    });

    la = $($('.ia').attr('href')).offset().top - 50;
    $('.ia').click(function(){
	$('html,body').animate({scrollTop:la}, 300, function(){
	    if ($('html').offset().top != la)
	    {
		window.location.replace("#about-divider");
	    }
	});
	    return false;
    });

    $('.btn-read').click(function(){
	$('html,body').animate({scrollTop:la}, 300, function(){
	    if ($('html').offset().top != la)
	    {
		window.location.replace("#about-divider");
	    }
	});
	    return false;
    });

    lg = $($('.ig').attr('href')).offset().top - 50;
    $('.ig').click(function(){
	$('html,body').animate({scrollTop:lg}, 300, function(){
	    if ($('html').offset().top != lg)
	    {
		window.location.replace("#gallery-divider");
	    }
	});
	    return false;
    });

    lc = $($('.ic').attr('href')).offset().top - 50;
    $('.ic').click(function(){
	$('html,body').animate({scrollTop:lc}, 300, function(){
	    if ($('html').offset().top != lc)
	    {
		window.location.replace("#contact-divider");
	    }
	});
	    return false;
    });

    var controller = new ScrollMagic.Controller();
    var home_hook = create_page_hook('body', '.about-divider', '#link-to-home', controller, 70, "slide-out-item-active");
    var home_hook_slide_in = create_page_hook_oneshot('body', '.about-divider', '.introduction-text-container', controller, 70, "is-revealed");
    var about_hook = create_page_hook('.about-divider', '.gallery-divider', '#link-to-about', controller, 70, "slide-out-item-active");
    var about_divider_slide_in = create_page_hook_oneshot('.about-divider', '.about-divider', '.about-divider-cont', controller, 600, "is-revealed");
    var fast_facts_slide_in = create_page_hook_oneshot('.about-body', '.gallery-divider', '.fast-facts-cont', controller, 400, "is-revealed");
    var gallery_hook = create_page_hook('.gallery-divider', '.contact-divider', '#link-to-gallery', controller, 70, "slide-out-item-active");
    var gallery_divider_slide_in = create_page_hook_oneshot('.gallery-divider', '.gallery-divider', '.gallery-divider-cont', controller, 600, "is-revealed");
    var contact_hook = create_page_hook('.contact-divider', '.footer', '#link-to-contact', controller, 70, "slide-out-item-active");
    var contact_divider_slide_in = create_page_hook_oneshot('.contact-divider', '.contact-divider', '.contact-divider-cont', controller, 600, "is-revealed");
    var contact_slide_in = create_page_hook_oneshot('.contact-divider', '.footer', '.contact-body-cont', controller, 200, "is-revealed");
});


