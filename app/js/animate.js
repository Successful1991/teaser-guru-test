$(document).ready(function(){

  var tl = new TimelineMax();

  tl.from( $(".heading"), 1, { top: -100, ease: Linear.easeNone },1 )
    .from( $(".mac__layer1"), 1, { display: 'none' , scale: 0, ease: Linear.easeNone} )
    .from( $(".mac__layer0"), 1, { display: 'none' , scale: 0, ease: Linear.easeNone} )
    .from( $(".mac__layer2"), 1, { display: 'none' , scale: 0, ease: Linear.easeNone},"-=0.2")
    .from( $(".mac__layer3"), 1, { display: 'none' , scale: 0, ease: Linear.easeNone},"-=0.2" )
    .from( $(".mac__layer4"), 1, { display: 'none' , scale: 0, ease: Linear.easeNone}, "-=0.2" )
    .from( $(".navigation__partner"), 1, { display: "none" ,top: 600, ease: Linear.easeNone }, "-=0.2" )
    .from( $(".navigation__advertiser"), 1, { display: "none" , top: 600, ease: Linear.easeNone}, "-=0.2" );





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

