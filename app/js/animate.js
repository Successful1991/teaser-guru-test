$(document).ready(function(){
  // -----------------   setting scroll page   -----------------
  var scrollifyOptions = {
    section : ".section-scroll",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 110,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: false,
    updateHash: true,
    touchScroll:true
  };
  if( window.matchMedia('(max-width: 421px)').matches) {
    $(".mac__video").attr( "autoplay", false);
    $.scrollify(scrollifyOptions);
  }

  // -------------------- setting animation GSAP ------------------
  var tl = new TimelineMax();
  if(window.matchMedia('(min-width: 421px)').matches){

  function animateFirstLoadingPage() {
    tl.fromTo( $(".heading"), 1, { y: -300},{y: 0},1 )
      .from( $(".title__text > h1"), 1, { display: 'none' , y: -100, x: 40 , ease: Bounce.easeOut}, "+=0.5" )
      .from( $(".title__text > p"), 1, { display: 'none' , x: -200, ease: Back.easeOut.config(1.9)} )
      .staggerFromTo($(".title__mac > .mac"), 1,{ display: 'none' , scale: 0}, {display: 'block' , scale: 1}, +0.8)
      .from( $(".navigation__partner"), 0.5, { display: "none" , y:300 } )
      .from( $(".navigation__advertiser"), 0.5, { display: "none" , y:300 });
  }
  animateFirstLoadingPage();

  $("#menu__burger").click( function () {
    var inputCheck = $("#menu__burger").prop("checked");
    console.log("checked = " , inputCheck);
    if( inputCheck === true ){
      openMenu();
    }else{
      tl.staggerFromTo($(".menu__list > li"), 0.1,{ opacity: 1}, {opacity: 0},0.2)
        .fromTo($(".heading__logo"), 0,{ display: "none"}, {display: "flex"})
        .fromTo($(".heading"), 0,{position: "absolute"}, { position: "static", justifyContent: "space-between"})
        .fromTo($(".menu"), 1.5,{ opacity: 1 ,display: "flex"}, {opacity: 0 ,display: "none"});
    }
  });

  function openMenu() {
    tl.fromTo($(".heading__logo"), 0,{ display: "flex"}, {display: "none"})
      .fromTo($(".heading"), 0,{ position: "static"}, {position: "relative", justifyContent:"flex-end", zIndex: 1000})
      .fromTo($(".menu"), 0.5,{ display: "none", x: -1000}, {display: "flex" , x:0 })
      .fromTo($(".menu__img"), 0.8,{x: -1000},{ x: 0, ease: Linear.easeNone},"+=1")
      .staggerFromTo($(".menu__list > li"), 0.4,{ opacity: 0, x: -100}, {opacity: 1, x: 0},0.5);
  }

  function transitionAnimationFurther() {
    tl.to( $(".mac__layer1"), 2, { rotation: 60 ,y:-1100 ,display: 'none'}, "mac" )
      .to( $(".mac__layer0"), 1.8, { rotation: 60 ,y:-1100, display: 'none'},"mac" )
      .to( $(".navigation__partner"), 1.5, { rotation: -80 ,y:-1800, display: "none", ease: Power3.easeOut }, "-=1.7" )
      .to( $(".navigation__advertiser"), 1, { rotation: 80 ,y:-1800, display: "none" ,ease: Power3.easeOut }, "-=1" )
      .to( $(".heading__menu"), 1, { y: -500 , display: "none", ease: Linear.easeNone },"-=0.5" )
      .to( $(".title__text > h1"), 1, { y: -800 , display: "none", ease: Linear.easeNone}, "-=0.5"  )
      .to( $(".title__text > p"), 0.8, { y: 1200, display: 'none', ease: Linear.easeNone},"-=1")
      .to( $(".mac__layer2,.mac__layer3,.mac__layer4 "), 1, { animationIterationCount: 0, y: 800 ,display: 'none', ease:Power3.easeOut },"-=0.5")
      .to( $(".heading__logo"), 1, { top: 40+"vh", left: 40+"vw", position: "absolute" , ease: Linear.easeNone} );
  }
  $(".navigation__partner, .navigation__advertiser").click(function() {transitionAnimationFurther()});
  $(".item__link").mouseover(function () {
    $(".item__link").css("color","#0000FF");
    $(this).css("color","#ffffff");
  });

  $(".item__link").mouseout(function () {
    $(".item__link").css("color","#ffffff");
  });

  $(".navigation__partner, .navigation__advertiser").mouseover(function () {
    $(this).css("transform","translateY(-10px)");
  });
  $(".navigation__partner, .navigation__advertiser").mouseout(function () {
    $(this).css("transform","translateY(0)");
  });
  } // --------------------- animation for screen width max 420 ------------------------
  if(window.matchMedia('(max-width: 420px)').matches){
    $("#menu__burger").click( function () {
      var inputCheck = $("#menu__burger").prop("checked");
      console.log("checked = " , inputCheck);
      if( inputCheck === true ){
        tl.fromTo($(".heading__logo-name"),1.5,{opacity: 0 },{opacity: 1})
          .fromTo($(".heading__logo-img"),1.5,{opacity: 1},{opacity: 0 },1)
          .fromTo($(".heading__logo-mobile"),1.5,{opacity: 0 },{opacity: 1},1)
          .fromTo($(".menu"),1.5,{display: "none",opacity: 0, top: -50 },{display: "flex",opacity: 1, top: 55})
          .staggerFromTo($(".menu__list > li"), 0.2,{ opacity: 0, y:200}, {opacity: 1, y:0},0.3);

      }else{
        tl.staggerFromTo($(".menu__list > li"), 0.1,{ opacity: 1}, {opacity: 0},0.2)
          .fromTo($(".heading__logo-name"),1.5,{opacity: 1},{opacity: 0 },1)
          .fromTo($(".heading__logo-img"),1.5,{opacity: 0 },{opacity: 1},1)
          .fromTo($(".heading__logo-mobile"),1.5,{opacity: 1 },{opacity: 0},1)

          .fromTo($(".menu"), 1.5,{ opacity: 1 ,display: "flex"}, {opacity: 0 ,display: "none"});
      }
    });
  }
  // ----------------- click to scroll ---------------------------

  $(".title__nextpage").click(function () {
    tl.to($(".nextpage__img"),1,{ rotation:180}).reverse(20);
    setTimeout(function () {
      $.scrollify.next();
    }, 400);

  });



  });

