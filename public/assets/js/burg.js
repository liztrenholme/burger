// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatenOrNot").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var condition = {
      devoured: eaten
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      method: "PUT",
      data: condition
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/burger/create", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});