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
        gifBtn.text(animal[i]);

        $("#saved").append(gifBtn);
    }

    $("#search").click(function(){
        $("#noin").hide();
        if($("#inputAni").val().trim().length === 0){
            $("#noin").show()
        }else{
            animalBtn($("#inputAni").val().trim());
        }
    });


});

function animalBtn(ani){
    var gifBtn = $("<button>");

    gifBtn.attr("value", ani);
    gifBtn.text(ani);

    $("#saved").append(gifBtn);
}