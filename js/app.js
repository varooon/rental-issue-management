$(document).ready(function(){

  $(window).on("scroll", function(){
    var scrollDistance = $(window).scrollTop();
    // insert logic for navbar upon scrolling after a certain distance

  });

  $(".page-scroll").on("click", function(){
    var contentSectionDesired = $(this).attr("href");
    console.log(contentSectionDesired);
    $("body").animate( {
      scrollTop : $(contentSectionDesired).offset().top
    });
  });

  $("#sign-up-form").on("submit", function(event){
    event.preventDefault();

    var firstName = $("#first_name").val();
    var address = $("#address").val();

    //redirect to a different page once submit is clicked
    window.location.href = "signup.html";



  });

  $("#register-submit").on("submit", function(event){
    event.preventDefault();

    //redirect to a different page once submit is clicked
    window.location.href = "dashboard.html";

  });

  // Google Maps API to autofill address
  var places = new google.maps.places.Autocomplete($("#address")[0]);



});
