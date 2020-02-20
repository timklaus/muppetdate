$(document).ready(function() {
  $("form#info").submit(function(event) {
    var gender = $("select#gender").val();
    var partiness = $("select#partiness").val();
    console.log(gender + partiness)
    if (gender === "male" && partiness === "party") {
      $("#animalphoto").show;
    } else if(gender === "male" && partiness === "noparty") {
      $("#gonzophoto").show;
    } else if(gender === "female" && partiness === "party") {
      $("#janicephoto").show;
    } else if(gender === "female" && partiness === "noparty") {
      $("#piggyphoto").show;
    } else {alert("This page is broken.")}
    
    event.preventDefault();
    });
  });