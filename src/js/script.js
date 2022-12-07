$(document).ready(function(){
    var tam = $(window).width();
  
    if (tam >=1000){
      $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }else if (tam <=500){
      $('.carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    }else if (tam <=360){
        $('.carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
 }});
//----------------------------------------------------------00
let btAbrirModals = $("#btAbrirModals");
let modals = $("#modals");
let modalClose = $("#modals .modals-close");
let modalBackground = $("#modals .modals-bg");

btAbrirModals.click(function () {
    modals.fadeIn(100);
});

modalClose.click(function () {
    modals.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground.click(function () {
   modals.fadeOut(500);
});

//----------------------------------------------------------01

let btAbrirModals1 = $("#btAbrirModals1");
let modals1 = $("#modals1");
let modalClose1 = $("#modals1 .modals-close1");
let modalBackground1 = $("#modals1 .modals-bg1");

btAbrirModals1.click(function () {
    modals1.fadeIn(500);
});

modalClose1.click(function () {
    modals1.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground1.click(function () {
   modals1.fadeOut(500);
});

//----------------------------------------------------------02

let btAbrirModals2 = $("#btAbrirModals2");
let modals2 = $("#modals2");
let modalClose2 = $("#modals2 .modals-close2");
let modalBackground2 = $("#modals2 .modals-bg2");

btAbrirModals2.click(function () {
    modals2.fadeIn(500);
});

modalClose2.click(function () {
    modals2.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground2.click(function () {
   modals2.fadeOut(500);
});

//----------------------------------------------------------03

let btAbrirModals3 = $("#btAbrirModals3");
let modals3 = $("#modals3");
let modalClose3 = $("#modals3 .modals-close3");
let modalBackground3 = $("#modals3 .modals-bg3");

btAbrirModals3.click(function () {
    modals3.fadeIn(500);
});

modalClose3.click(function () {
    modals3.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground3.click(function () {
   modals3.fadeOut(500);
});

//----------------------------------------------------------04

let btAbrirModals4 = $("#btAbrirModals4");
let modals4 = $("#modals4");
let modalClose4 = $("#modals4 .modals-close4");
let modalBackground4 = $("#modals4 .modals-bg4");

btAbrirModals4.click(function () {
    modals4.fadeIn(500);
});

modalClose4.click(function () {
    modals4.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground4.click(function () {
   modals4.fadeOut(500);
});


//----------------------------------------------------------05

let btAbrirModals5 = $("#btAbrirModals5");
let modals5 = $("#modals5");
let modalClose5 = $("#modals5 .modals-close5");
let modalBackground5 = $("#modals5 .modals-bg5");

btAbrirModals5.click(function () {
    modals5.fadeIn(500);
});

modalClose5.click(function () {
    modals5.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground5.click(function () {
   modals5.fadeOut(500);
});


//----------------------------------------------------------06

let btAbrirModals6 = $("#btAbrirModals6");
let modals6 = $("#modals6");
let modalClose6 = $("#modals6 .modals-close6");
let modalBackground6 = $("#modals6 .modals-bg6");

btAbrirModals6.click(function () {
    modals6.fadeIn(500);
});

modalClose6.click(function () {
    modals6.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground6.click(function () {
   modals6.fadeOut(500);
});


//----------------------------------------------------------07

let btAbrirModals7 = $("#btAbrirModals7");
let modals7 = $("#modals7");
let modalClose7 = $("#modals7 .modals-close7");
let modalBackground7 = $("#modals7 .modals-bg7");

btAbrirModals7.click(function () {
    modals7.fadeIn(500);
});

modalClose7.click(function () {
    modals7.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground7.click(function () {
   modals7.fadeOut(500);
});


//----------------------------------------------------------08

let btAbrirModals8 = $("#btAbrirModals8");
let modals8 = $("#modals8");
let modalClose8 = $("#modals8 .modals-close8");
let modalBackground8 = $("#modals8 .modals-bg8");

btAbrirModals8.click(function () {
    modals8.fadeIn(500);
});

modalClose8.click(function () {
    modals8.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground8.click(function () {
   modals8.fadeOut(500);
});


//----------------------------------------------------------09

let btAbrirModals9 = $("#btAbrirModals9");
let modals9 = $("#modals9");
let modalClose9 = $("#modals9 .modals-close9");
let modalBackground9 = $("#modals9 .modals-bg9");

btAbrirModals9.click(function () {
    modals9.fadeIn(500);
});

modalClose9.click(function () {
    modals9.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground9.click(function () {
   modals9.fadeOut(500);
});


//----------------------------------------------------------10

let btAbrirModals10 = $("#btAbrirModals10");
let modals10 = $("#modals10");
let modalClose10 = $("#modals10 .modals-close10");
let modalBackground10 = $("#modals10 .modals-bg10");

btAbrirModals10.click(function () {
    modals10.fadeIn(500);
});

modalClose10.click(function () {
    modals10.fadeOut(500);
});

//Caso queira que o dialogo feche ao realizar um click fora dele.
//
modalBackground10.click(function () {
   modals10.fadeOut(500);
});
