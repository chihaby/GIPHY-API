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
        console.log(results);
    }
    });
});

renderMovies();

function pause(){
    $(".").on("click", function() {
        var state = $(this).attr("src");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
        console.log(this);
    });
}

