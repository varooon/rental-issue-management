$(document).ready(function(){

  var userName="";
  var userInput = "";

  //get a user name from user
  $("#user-name-form").on("submit", function(event){
    event.preventDefault();
    userName = $("#user-name").val();
    $("#user-name").val("");
  });


  $("#user-input-form").on("submit", function(event){
    event.preventDefault();
    //Store chat in var userInput
    userInput = $("#chat-user-input").val();

    if (userName === ""){
      userName = "Landlord";
    }

    //Paste userName & userInput in chat screen
    $("#chat-name").html(userName + ":");
    $("#chat-text").append(userInput+"<br>");

    //display message sent confirmation
    $("#message-sent").fadeIn(3000, function(){
      $("#message-sent").fadeOut();
    });

  });



});
