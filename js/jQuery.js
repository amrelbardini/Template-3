// JavaScript source code
/* global $, jQuery, alert */

$(document).ready(function (){
    "use strict";

    //nice scroll

    $("html").niceScroll();


    $('.carousel').carousel(
    {
        interval:5000,


    });
    // show color option div when we click on the gear 
    $('.gear-check').click(function (){
        $('.color-option').fadeToggle(1000);


    });
    //change theme color on click

    var colorLi = $('.color-option ul li');

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#07F").end()
        .eq(2).css("backgroundColor", "#4fea64").end()
        .eq(3).css("backgroundColor", "#d827db").end();

    colorLi.click(function (){
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });
    // scroll top button

    var scrollButton = $("#scroll-top");

    $(window).scroll(function (){
        

        if($(this).scrollTop()>=1500)
        {
            scrollButton.show();
        } else
        {
            scrollButton.hide();
        }


    });
    // pressing on the the button
    scrollButton.click(function (){
        $("html,body").animate({scrollTop:0},600);
    });


});

$(window).on("load",function (){
    
    $(".loading-overlay .spinner").fadeOut(1000,
    function (){
        $(this).parent().fadeOut(1000, function (){
            $(this).remove();
            $("body").css("overflow", "auto");
        });
        
    });


});