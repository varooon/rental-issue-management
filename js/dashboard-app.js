$(document).ready(function(){

  $("#add-property-button").on("click", function(){
    $("#add-property-details").show(1000);
    $("#close-div").on("click", function(){
      $("#add-property-details").hide();
    });
  });

  $("#add-issue-button").on("click", function(){
    $("#add-issue-details").show(1000);
    $("#close-issue-div").on("click", function(){
      $("#add-issue-details").hide();

    });
  });


  $("#add-property-to-dashboard").on("click", function(){

    var propertyInfo = {
      address: $("#address").val(),
      tenant: $("#tenant").val(),
      rent: $("#rent").val(),
      numberOfIssues: window.i //issue counter
    };

    HANDLE.renderTemplate({
      templateSource: "#dashboard-template",
      data: propertyInfo,
      where: "tbody",
      clearOriginal: false
    });


    $("#add-property-details").hide(function(){
      $("#address").val("");
      $("#tenant").val("");
      $("#rent").val("");
    });

  });


  window.i = 0; //issue counter

  $("#add-issue-to-dashboard").on("click", function(){
    i=i+1; //issue counter
    $("#add-issue-details").hide();
    console.log(i);
  });





  // Google Maps API to autofill address
  var places = new google.maps.places.Autocomplete($("#address")[0]);


});
