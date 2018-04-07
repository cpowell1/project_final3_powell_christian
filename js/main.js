//Beefup is the accordion jQuery Plugin on the service page, #mycalendar is the jQuery calendar plugin on the events page, .img-holder is the jQuery Plugin for parallax scrolling on the homepage, and the targeted h2 fade effect is my custom jQuery code for interactivity for all h2s on the website
$(document).ready(function () {
    $('.beefup').beefup();

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
});

//This is my custome Javascript code to add a message for when users submit the form
var formSubmit = document.getElementById('reservationsform');

if (formSubmit !== null) {
    formSubmit.addEventListener('submit', function (event) {
        event.preventDefault();

        var submitElement = document.createElement('article');

        submitElement.innerHTML = '<p>Thanks for your submission. We will respond shortly!</p>';

        document.getElementById('reservationsform').appendChild(submitElement);
    });
}
