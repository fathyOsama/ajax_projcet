$(document).ready(function () {
    $("#form-submit").submit(function (event) {
        performSearch(event);
    });
});


function performSearch(event) {
    var request;
    event.preventDefault();


    request = $.ajax({
        url: "https://api.weatherapi.com/v1/current.json?",
        type: "Get",
        data: {
            q: $("#City").val(),
            key: 'b178a853a4174fa4a73132202251009',
            aqi: 'no'
            // units : 'cairo'
        },
        success: function (response) {
            console.log("GET Success:", response);
        },
        error: function (xhr, status, error) {
            console.error("GET Error:", error);
        }
    });


    request.done(function (response) {
        formatSearch(response);
        //  $('#log_complete').append('<li>'+ response.current.temp_c +'</li>');
        setTimeout(function () {
            $("#city-name").text("");
            $("#city-weather").text("");
        }, 5000);
        setTimeout(function () { performSearch(event); }, 10000);



        console.log(response.location.name)

    });

    $('div.feedback-box-complete').html('complete feedback');
}

function formatSearch(jsonOjbect) {
    var city_name = jsonOjbect.location.name;
    var city_weather = jsonOjbect.current.temp_c;


    $("#city-name").text(city_name);
    $("#city-weather").text(city_weather);
}






