/**
 *
 */


FastClick.attach(document.body);

$(".mail-area").html($.base64.decode("b2t0YXlAeWFuZGV4LmNvbQ=="));
$(".phone-area").html($.base64.decode("KCs5MCkgNTQ0IDIwOSA2NSAwMA=="));


var $card = $(".card");

$(document).on("mousemove",function(e) {
    var ax = -($(window).innerWidth()/2- e.pageX)/20;
    var ay = ($(window).innerHeight()/2- e.pageY)/10;
    //$card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    TweenMax.to(".card",1,{ transform:"rotateX("+ay+"deg) rotateY("+ax+"deg)"});
});


var introtl = new TimelineMax({ paused:true });

introtl.from($card,1,{scale:.9, opacity:0});
//introtl.set($card,1,{transform:"rotateX(-60deg) rotateY(-30deg)"});
introtl.to($card,1,{transform:"rotateX(10deg) rotateY(10deg)"},-0.5);


introtl.set("#wrapper",{opacity:1, display:'block'});
introtl.to(".overlay",0.3,{scale:2, y:-100, opacity:0, display:'none'});
introtl.from(".container",.3,{scale:0.2},"-=0.3");

introtl.staggerFrom(".col-paddings ul li, .col-paddings h3",.5,{ opacity:0, x:-100},0.05);


function intro_animation(){
    introtl.timeScale(2)
    introtl.play();

}

intro_animation();





function applySkew(){
    var winwidth = $(window).width();
    var winheight = $(window).height();
    var appheight = 650;
    var h = winheight-appheight;
    if(h<0) h = 0;
    var deg = Math.atan(h/winwidth)/Math.PI*180;
    TweenMax.set("#wrapper",{skewY:deg, transformOrigin:"0% 0%", scaleX:1});
    TweenMax.set(".skew-fix",{skewY:-deg, transformOrigin:"0% 0%"});

}

$(window).on("resize",applySkew);applySkew();


TweenMax.set("#btn-next span",{ rotation:45 });
$("#btn-next").on("mouseenter",function(){
    TweenMax.to(this,.3,{ scaleY:0.7, scaleX:1.2 });
}).on("mouseleave",function(){
    TweenMax.to(this,.3,{ scaleY:1, scaleX:1 });
});


$("#main").on("mousewheel",function(e,d){
    e.preventDefault();
    var $first = $("#main").find(".intro").first();
    var k = $first.width();
    var pos = d*-500;
    TweenMax.to("#main",.6,{scrollTo:{x:"+="+pos},ease:Expo.easeOut});
});

$("#btn-next").on('click',function(e){
    e.preventDefault();

    var $first = $("#main").find(".intro").first();
    var $next = $(this).parents('section').next();
    if($next.length){
        e.preventDefault();
        var scrollPos = $next.offset().left - $first.offset().left;
        TweenMax.to("#main",1,{scrollTo:{x:scrollPos},ease:Expo.easeOut});
    }

});

$(".navbar-main .nav a").on('click',function(e){
    var rel = $(this).attr("href");
    var $first = $("#main").find(".intro").first();
    var $next = $("#main").find("#"+rel.split("#").pop()).first();
    if($next.length){
        e.preventDefault();
        var scrollPos = $next.offset().left - $first.offset().left;
        TweenMax.to("#main",1,{scrollTo:{x:scrollPos},ease:Expo.easeOut});
    }


});




var skillsanim = new TimelineMax({ paused:true });
skillsanim.staggerFromTo(".skills li .progress div",0.6,{ backgroundColor:"#5d8ac6", transformOrigin:"0 0", scaleX:0.9 }, { backgroundColor:'#70A6EF', scaleX:1 },0.2);

$(".skills").on("mouseenter mouseleave",function(e){
    if(e.type=="mouseenter"){
        skillsanim.play();
    }else {
        skillsanim.reverse();
    }
});