// Triggers


//when the page loads...
$(document).ready(function () {
    //do stuff

});

//button triggers
$(document).on('click', 'button', function (event) {
    event.preventDefault();
});


//form trigger
$(document).submit('form', function (event) {
    event.preventDefault();
});
