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
}

$("#add-movie").on("click", function(event){

    event.preventDefault();
    var newTopic = $("#movie-input").val().trim();
    topics.push(newTopic);
    renderMovies();
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // newTopic + "&api_key=dc6zaTOxFJmzC&limit=10";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q= "+
    newTopic + "&api_key=TYTxoNPlHG0YG4muSpJHoaGWGTPLzvNn&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
        console.log(response);
    })
});





renderMovies();