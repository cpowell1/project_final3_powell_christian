$(document).ready(function () {
    $('.beefup').beefup();
});

$(window).load(function () {
    $('#mycalendar').monthly();
});

$('.img-holder').imageScroll({
    holderMinHeight: 600,
});

$('h2').mouseover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(600);
});

var formSubmit = document.getElementById('reservationsform');
formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitElement = document.createElement('article');
    submitElement.innerHTML = '<p>Thanks for your submission. We will respond shortly!</p>';
    document.getElementById('reservationsform').appendChild(submitElement);
});


