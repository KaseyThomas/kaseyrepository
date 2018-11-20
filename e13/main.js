$(document).ready(function() {
    // run function on initial page load
    numberGuess();
});
 
function numberGuess() {
    var number = Math.floor(Math.random() * 101);
    console.log(number);
    $('button').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if (number == guess) {
            $('header').text(number + ' is correct!');
            $('input').val('');
        } else {
            $('header').text(guess + ' is incorrect!');
            $('input').val('');
        }
    });
}