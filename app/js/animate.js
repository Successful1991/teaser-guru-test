$(document).ready(function(){

  var tl = new TimelineMax();

  tl.from( $(".heading"), 1, { yPercent: -300 , ease: Linear.easeNone },1 )
    .from( $(".title__text > h1"), 1, { display: 'none' , fontSize:14 , yPercent: -100, xPercent: 40 , ease: Bounce.easeOut}, "+=0.5" )
    .from( $(".title__text > p"), 1, { display: 'none' , xPercent: -200, ease: Back.easeOut.config(1.9)} )
    .from( $(".mac__layer1"), 1, { display: 'none' , scale: 0} )
    .from( $(".mac__layer2"), 1, { display: 'none' , scale: 0},"-=0.2")
    .from( $(".mac__layer3"), 1, { display: 'none' , scale: 0},"-=0.2" )
    .from( $(".mac__layer4"), 1, { display: 'none' , scale: 0},"-=0.2" )
    .from( $(".mac__layer0"), 1, { display: 'none' , scale: 0},"-=0.2" )
    .from( $(".navigation__partner"), 1, { display: "none" , yPercent:200 , ease: Linear.easeNone }, "-=0.2" )
    .from( $(".navigation__advertiser"), 1, { display: "none" , yPercent:200 , ease: Linear.easeNone }, "-=0.5" );





  $("#menu__burger").click( function () {
    var inputCheck = $("#menu__burger").prop("checked");
    console.log("checked = " , inputCheck);
    if( inputCheck === true ){
      $(".menu").css("display","flex");
    }else{
      $(".menu").css("display","none");
    }
  })





  });

