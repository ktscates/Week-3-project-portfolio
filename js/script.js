$(document).ready(function(){

    // Toggle the what we do icons to show the content and show the icons back when you click on it again.

    $(".designlogo").click(function(){
        
        $(".design").toggle();
        $(".designlogo").hide();
    });

    $(".design").click(function(){

        $(".designlogo").toggle();
        $(".design").hide();
    });

    $(".devlogo").click(function(){

        $(".development").toggle()
        $(".devlogo").hide();
    });

    $(".development").click(function(){

        $(".devlogo").toggle();
        $(".development").hide();
    });

    $(".prodlogo").click(function(){

        $(".product").toggle()
        $(".prodlogo").hide()
    });

    $(".product").click(function(){

        $(".prodlogo").toggle();
        $(".product").hide();
    });

    //Hover the portfolio images to show text with a white background.

    $("#work1").mouseover(function () {

        $("#text1").show();
        $("#text1").addClass("text1");
    });

    $("#work1").mouseleave(function () {

        $("#text1").hide();
    });

    $("#work2").mouseover(function () {

        $("#text2").show();
        $("#text2").addClass("text2");
    });

    $("#work2").mouseleave(function () {

        $("#text2").hide();
    });

    $("#work3").mouseover(function () {

        $("#text3").show();
        $("#text3").addClass("text3");
    });

    $("#work3").mouseleave(function () {

        $("#text3").hide();
    });

    $("#work4").mouseover(function () {

        $("#text4").show();
        $("#text4").addClass("text4");
    });

    $("#work4").mouseleave(function () {

        $("#text4").hide();
    });

    $("#work5").mouseover(function () {

        $("#text5").show();
        $("#text5").addClass("text5");
    });

    $("#work5").mouseleave(function () {

        $("#text5").hide();
    });

    $("#work6").mouseover(function () {

        $("#text6").show();
        $("#text6").addClass("text6");
    });

    $("#work6").mouseleave(function () {

        $("#text6").hide();
    });

    $("#work7").mouseover(function () {

        $("#text7").show();
        $("#text7").addClass("text7");
    });

    $("#work7").mouseleave(function () {

        $("#text7").hide();
    });

    $("#work8").mouseover(function () {

        $("#text8").show();
        $("#text8").addClass("text8");
    });

    $("#work8").mouseleave(function () {

        $("#text8").hide();
    });

    //The form function it pops up an alert when you click on send.

    $("form").submit(function(event){

        var names=$("#name").val();
        var emails=$("#email").val();
        var text=$("#area").val();

        alert(names+", Your Message has been received. Thank You for contacting Us. We will get back to you using your email: "+emails);

        event.preventDefault();

        $("#name").val("");
        $("#email").val("");
        $("#area").val("");
    })
});
