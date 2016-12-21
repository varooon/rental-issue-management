$(document).ready(function(){


  $("#register-submit").on("submit", function(event){
    event.preventDefault();

    //redirect to a different page once submit is clicked
    window.location.href = "dashboard.html";

  });

  // Google Maps API to autofill address
  var places = new google.maps.places.Autocomplete($("#address")[0]);



});
