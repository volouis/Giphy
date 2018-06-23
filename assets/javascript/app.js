var animal = [
    "bird",
    "dog",
    "cat",
    "elephant",
    "rat"
];

$(document).ready(function(){
    
    for(var i = 0; i < animal.length; i++){
        var gifBtn = $("<button>");

        gifBtn.attr("value", animal[i]);
        gifBtn.addClass("animal");
        gifBtn.text(animal[i]);

        $("#saved").append(gifBtn);
    }

    $("#search").click(function(){
        $("#noin").hide();
        if($("#inputAni").val().trim().length === 0){
            $("#noin").show()
        }else{
            //animalBtn($("#inputAni").val().trim());
            var gifBtn = $("<button>");

            gifBtn.attr("value", $("#inputAni").val().trim());
            gifBtn.addClass("animal");
            gifBtn.text($("#inputAni").val().trim());

            $("#saved").append(gifBtn);
        }
    });

    $(document).on("click","button.animal",function(){
        $("#gifer").empty();

        var mal = $(this).attr("value")

        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ mal +"&api_key=dc6zaTOxFJmzC";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            for(var i = 0; i < response.data.length; i++){
                var contained = $("<div>");

                contained.append("<p>Rating: " + response.data[i].rating + "</p>");
                contained.append("<img src=" + response.data[i].images.fixed_height.url + ">");

                $("#gifer").append(contained);
            }
        });
    });
});

function animalBtn(ani){
    var gifBtn = $("<button>");

    gifBtn.attr("value", ani);
    gifBtn.addClass("animal");
    gifBtn.text(ani);

    $("#saved").append(gifBtn);
}