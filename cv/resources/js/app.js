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


var skillsanim = new TimelineMax({ paused:true });
skillsanim.staggerFromTo(".skills li .progress div",0.6,{ backgroundColor:"#5d8ac6", transformOrigin:"0 0", scaleX:0.9 }, { backgroundColor:'#70A6EF', scaleX:1 },0.2);

$(".skills").on("mouseenter mouseleave",function(e){
    if(e.type=="mouseenter"){
        skillsanim.play();
    }else {
        skillsanim.reverse();
    }
});