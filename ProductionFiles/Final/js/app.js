var switching_prototype=function(t,o){return function(){$(t).toggleClass(o)}},force_off_prototype_additive=function(t,o){return function(){$(t).addClass(o)}},force_off_prototype_subtractive=function(t,o){return function(){$(t).removeClass(o)}},create_page_hook=function(t,o,e,i,c,r){new ScrollMagic.Scene({offset:$(t).offset().top-c,duration:$(o).offset().top-$(t).offset().top}).setClassToggle(e,r).addTo(i)},create_page_hook_oneshot=function(t,o,e,i,c,r){new ScrollMagic.Scene({offset:$(t).offset().top-c}).removeClassToggle().setClassToggle(e,r).reverse(!1).addTo(i)},switch_toggle=switching_prototype(".slide-out","slide-out-toggleOff"),switch_layout_width=switching_prototype(".page-layout-element","shrunken"),switch_fast_facts_header=switching_prototype(".fast-facts-header-container","fast-facts-header-toggled"),switch_fast_facts_content=switching_prototype(".fast-facts-columns","fast-facts-content-toggled"),switch_intro_content=switching_prototype(".introduction-text-container","introduction-text-toggled"),switch_mobile_toggler=switching_prototype(".navbar-mobile-toggler","navbar-mobile-toggler-toggled"),force_toggle=force_off_prototype_additive(".slide-out","slide-out-toggleOff"),force_layout_width=force_off_prototype_subtractive(".page-layout-element","shrunken"),force_fast_facts_header=force_off_prototype_subtractive(".fast-facts-header-container","fast-facts-header-toggled"),force_fast_facts_content=force_off_prototype_subtractive(".fast-facts-columns","fast-facts-content-toggled"),force_intro_content=force_off_prototype_subtractive(".introduction-text-container","introduction-text-toggled"),force_mobile_toggler=force_off_prototype_subtractive(".navbar-mobile-toggler","navbar-mobile-toggler-toggled");$(document).ready(function(){$(".navbar-mobile-toggler").click(function(){switch_toggle(),switch_layout_width(),switch_fast_facts_header(),switch_fast_facts_content(),switch_intro_content(),switch_mobile_toggler()}),$(".page-layout-element").click(function(){force_toggle(),force_layout_width(),force_fast_facts_header(),force_fast_facts_content(),force_intro_content(),force_mobile_toggler()});var t=$($(".ii").attr("href")).offset().top-50;$(".ii").click(function(){return $("html,body").animate({scrollTop:t},300,function(){window.scrollY<t+50&&window.scrollY>t-50||(console.log(window.scrollY),console.log(t),window.location.replace("#introduction"))}),!1}),la=$($(".ia").attr("href")).offset().top-50,$(".ia").click(function(){return $("html,body").animate({scrollTop:la},300,function(){window.scrollY<la+50&&window.scrollY>la-50||window.location.replace("#about-divider")}),!1}),$(".btn-read").click(function(){return $("html,body").animate({scrollTop:la},300,function(){window.scrollY<la+50&&window.scrollY>la-50||window.location.replace("#about-divider")}),!1}),lg=$($(".ig").attr("href")).offset().top-50,$(".ig").click(function(){return $("html,body").animate({scrollTop:lg},300,function(){window.scrollY<lg+50&&window.scrollY>lg-50||window.location.replace("#gallery-divider")}),!1}),lc=$($(".ic").attr("href")).offset().top-50,$(".ic").click(function(){return $("html,body").animate({scrollTop:lc},300,function(){window.scrollY<lc+50&&window.scrollY>lc-50||window.location.replace("#contact-divider")}),!1});var o=new ScrollMagic.Controller;create_page_hook("body",".about-divider","#link-to-home",o,70,"slide-out-item-active"),create_page_hook_oneshot("body",".about-divider",".introduction-text-container",o,70,"is-revealed"),create_page_hook(".about-divider",".gallery-divider","#link-to-about",o,70,"slide-out-item-active"),create_page_hook_oneshot(".about-divider",".about-divider",".about-divider-cont",o,600,"is-revealed"),create_page_hook_oneshot(".about-body",".gallery-divider",".fast-facts-cont",o,400,"is-revealed"),create_page_hook(".gallery-divider",".contact-divider","#link-to-gallery",o,70,"slide-out-item-active"),create_page_hook_oneshot(".gallery-divider",".gallery-divider",".gallery-divider-cont",o,600,"is-revealed"),create_page_hook(".contact-divider",".footer","#link-to-contact",o,70,"slide-out-item-active"),create_page_hook_oneshot(".contact-divider",".contact-divider",".contact-divider-cont",o,600,"is-revealed"),create_page_hook_oneshot(".contact-divider",".footer",".contact-body-cont",o,200,"is-revealed")});