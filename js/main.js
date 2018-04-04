var formSubmit = document.getElementById('reservationsform');
formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitElement = document.createElement('article');
    submitElement.innerHTML = '<p>Thanks for your submission. We will respond shortly!</p>';
    document.getElementById('reservationsform').appendChild(submitElement);
});

$(document).ready(function () {
    $('.beefup').beefup();
});

$(window).load(function () {
    $('#mycalendar').monthly();
});

$('.img-holder').imageScroll({
    holderMinHeight: 600,
});
