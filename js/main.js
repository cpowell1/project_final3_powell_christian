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
    //EC form jQuery
    $('#orderform').submit(function () {
        $('#orderform').remove();
        var thankYou = $('p').innerHTML = '<p>Thank you for your order, we will get back with you shortly!</p>';
        $('#form').append(thankYou);
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

//EC Javascript
var formInfo = document.getElementById('orderform');
var nameField = document.getElementById('inputValue1');
var serviceType = document.getElementById('inputValue2');
var packageType = document.getElementById('inputValue3');
var numberofDays = document.getElementById('inputValue4');
var desiredDate = document.getElementById('inputValue5');

formInfo.addEventListener('change', function (event) {
    event.preventDefault();

    var displayMessage = document.createElement('p');

    displayMessage.innerHTML = nameField.value + ', you have made a request for ' + serviceType.value + ' with the ' + packageType.value + ' package. You want to reserve this service for ' + desiredDate.value + ' for ' + numberofDays.value + ' days.';

    document.getElementById('orderform').appendChild(displayMessage);

    displayMessage.addEventListener('click', function () {
        displayMessage.remove();
    });
});

