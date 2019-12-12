$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
    alert("saved!")
  });

  $("#todaysDate").text(moment().format("dddd, MMMM Do"));

function hourUpdater() {
  var currentHour = moment().hours();

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

hourUpdater();


var interval = setInterval(hourUpdater, 15000);

$("#hour-9 .input").val(localStorage.getItem("hour-9"));
$("#hour-10 .input").val(localStorage.getItem("hour-10"));
$("#hour-11 .input").val(localStorage.getItem("hour-11"));
$("#hour-12 .input").val(localStorage.getItem("hour-12"));
$("#hour-13 .input").val(localStorage.getItem("hour-13"));
$("#hour-14 .input").val(localStorage.getItem("hour-14"));
$("#hour-15 .input").val(localStorage.getItem("hour-15"));
$("#hour-16 .input").val(localStorage.getItem("hour-16"));
$("#hour-17 .input").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));
});