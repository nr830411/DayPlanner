$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
    alert("saved!")
  });

  $("#todaysDate").text(moment().format("dddd, MMMM Do"));
});