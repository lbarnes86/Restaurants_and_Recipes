 






function Spam(){
    $("#recipeImg").attr("src", "./spam.jpg");
    $('#recipeTitle').text("Spam")
    $('#recipeContent').text("Spam at home!")

}










$("#recipeButton").on("click", function(event) {
   Spam()
})