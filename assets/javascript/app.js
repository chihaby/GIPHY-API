//API key:   X0q7NDn3AonDXHvmg85i9K35Q0Ig8Nwk
var topics = ['cycling', 'beach',' music', 'travel', 'guitar', 'piano', 'violin'];

function renderMovies(){

    $("#movie-section").empty();
    for (var i=0; i<topics.length; i++){
        var a = $("<button>");
        a.addClass("movie");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#movie-section").append(a);
    }

    $(".movie").on("click", function(event){

        event.preventDefault();
       var person = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?q= "+
        person + "&api_key=TYTxoNPlHG0YG4muSpJHoaGWGTPLzvNn&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
            var results = response.data;
            
        for (var j = 0; j < results.length; j++) {
    
            if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[j].rating;
                var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");
                personImage.attr("src", results[j].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(personImage);
                $("#gifs-appear-here").prepend(gifDiv);
            }
        }
    });
    });

}

$("#add-movie").on("click", function(event){

    event.preventDefault();
    var newTopic = $("#movie-input").val().trim();
    topics.push(newTopic);
    renderMovies();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q= "+
    newTopic + "&api_key=TYTxoNPlHG0YG4muSpJHoaGWGTPLzvNn&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        var results = response.data;
        
    for (var j = 0; j < results.length; j++) {

        if (results[j].rating !== "r" && results[j].rating !== "pg-13") {
            var gifDiv = $("<div>");
            var rating = results[j].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");
            personImage.attr("src", results[j].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(personImage);
            $("#gifs-appear-here").prepend(gifDiv);
        }
    }
});
});

// $("#movie-sectione").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });



renderMovies();