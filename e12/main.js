$(document).ready(function() {
    // run function on initial page load
    pinkchange();
    bluechange();
    redchange();
    blackchange();
    greenchange();
    // run function on resize of the window
    $(window).resize(function() {
       
    });
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
 
function pinkchange() {
    $('.first').click(function(){
        $('.first').toggleClass('pinkcolor');
    });
}
function bluechange() {
    $('.blue').mouseenter(function(){
        $('.blue').addClass('bluecolor');
        console.log('mouse enter .third');
    });

    $('.blue').mouseleave(function(){
        $('.blue').removeClass('bluecolor');
        console.log('mouse enter .bluecolor');
    });
 
}
function redchange() {
    $('.third').dblclick(function(){
        $('.third').toggleClass('redcolor');
    });
}
function blackchange() {
    $('.black').mouseenter(function(){
        $('.black').addClass('blackcolor');
        console.log('mouse enter .second');
    });

    $('.black').mouseleave(function(){
        $('.black').removeClass('blackcolor');
        console.log('mouse enter .blackcolor');
    });
 
}

function greenchange() {
    $('.fifth').click(function(){
        $('.fifth').toggleClass('greencolor');
    });
}