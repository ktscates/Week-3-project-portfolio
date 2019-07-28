$(document).ready(function(){
    $("#design").click(function(){
        $(".design").toggle()
    });
    $("#development").click(function(){
        $(".development").toggle()
    });
    $("#product").click(function(){
        $(".product").toggle()
    });
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
    $("button").click(function(){
        alert(name+" Your message has been received. Thank you.")
    });
});
