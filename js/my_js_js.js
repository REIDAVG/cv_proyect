/* 
funciones
 */
 //function init ()
  //  {
        /* mensaje en pantalla*/
    //   alert("Hola Desde JS");
       /*$("#perfil").hide();*/
       
   // }
/* llamada a funcion*/
//init();
$(document).ready(function () {
    
    $(".hambur").click(function (e)
    {
        e.preventDefault();//suprimir el movimiento del a
        $("header .container nav").toggleClass("open"); /*SI TIENE LA CLASE OPEN LA QUITA SINO LA PONE*/
        $(".hambur i").toggleClass("fa-times");//Cambiar Hamburguesa a X o viceversa

    });

    $("header .container nav a").click(function ()
    {
        $("header .container nav").removeClass("open");
        $(".hambur i").removeClass("fa-times");

        var dev = $(this).attr("href");

        $("html,body").animate({
            "scrolltop": $(dev).offset().top
        });
    });
});