$(document).ready(function(){
  var tl = new TimelineMax();
  
  function animateFirstLoadingPage() {
    tl.fromTo( $(".heading"), 1, { y: -300},{y: 0},1 )
      .from( $(".title__text > h1"), 1, { display: 'none' , fontSize:14 , y: -100, x: 40 , ease: Bounce.easeOut}, "+=0.5" )
      .from( $(".title__text > p"), 1, { display: 'none' , x: -200, ease: Back.easeOut.config(1.9)} )
      .staggerFromTo($(".title__mac > .mac"), 1,{ display: 'none' , scale: 0}, {display: 'block' , scale: 1}, +0.8)
      .fromTo( $(".navigation__partner"), 0.5, { display: "none" , y:300 },{ display: "flex" , y:0} )
      .fromTo( $(".navigation__advertiser"), 0.5, { display: "none" , y:300 },{display: "flex" , y:0});
  }
  animateFirstLoadingPage();
  
  $("#menu__burger").click( function () {
    var inputCheck = $("#menu__burger").prop("checked");
    console.log("checked = " , inputCheck);
    if( inputCheck === true ){
      openMenu();
    }else{
      tl.staggerFromTo($(".menu__list > .list__item"), 0.3,{ opacity: 1}, {opacity: 0},0.3)
        .fromTo($(".heading__logo"), 0,{ display: "none"}, {display: "flex"})
        .fromTo($(".heading"), 0,{position: "absolute"}, { position: "static", justifyContent: "space-between"})
        .fromTo($(".menu"), 1.5,{ opacity: 1 ,display: "flex"}, {opacity: 0 ,display: "none"},"+=1");
    }
  });

  function openMenu() {
    tl.fromTo($(".heading__logo"), 0,{ display: "flex"}, {display: "none"})
      .fromTo($(".heading"), 0,{ position: "static"}, {position: "relative", justifyContent:"flex-end"})
      .fromTo($(".menu"), 0.5,{ display: "none", x: -1000}, {display: "flex" , x:0 })
      .fromTo($(".menu__img"), 0.8,{x: -1000},{ x: 0, ease: Linear.easeNone},"+=1")
      .staggerFromTo($(".menu__list > .list__item"), 1,{ opacity: 0, x: -100}, {opacity: 1, x: 0},0.5);
  }


  function transitionAnimationFurther() {
    tl.to( $(".mac__layer1"), 2, { rotation: 60 ,yPercent:-600 ,display: 'none'}, "mac" )
      .to( $(".mac__layer0"), 1.8, { rotation: 60 ,yPercent:-600, display: 'none'},"mac" )
      .to( $(".navigation__partner"), 1.5, { rotation: -80 ,yPercent:-900, display: "none", ease: Linear.easeNone }, "-=1.5" )
      .to( $(".navigation__advertiser"), 1.2, { rotation: 80 ,yPercent:-900, display: "none" ,ease: Linear.easeNone }, "-=1.1" )
      .to( $(".heading__menu"), 1, { yPercent: -300 , display: "none", ease: Linear.easeNone },"-=0.5" )
      .to( $(".title__text > h1"), 1, { yPercent: -500 , display: "none", ease: Linear.easeNone}, "-=0.5"  )
      .to( $(".title__text > p"), 0.8, { yPercent: 1200, display: 'none', ease: Linear.easeNone},"-=1")
      .to( $(".mac__layer2,.mac__layer3,.mac__layer4 "), 1, { animationIterationCount: 0, yPercent: 500 ,display: 'none' },"-=0.5")
      .to( $(".heading__logo"), 1, { height: 90+"vh", width: 100+"vw" , ease: Linear.easeNone} );
  }

  $(".navigation__partner, .navigation__advertiser").click(function() {transitionAnimationFurther()});


  $(".item__link").mouseover(function () {
    $(".item__link").css("color","#0000FF");
    $(this).css("color","#ffffff");
  })
  $(".item__link").mouseout(function () {
    $(".item__link").css("color","#ffffff");
  })


  });

