// show current day, date, and time
var todaysDate = moment().format('dddd, MMM do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDate);

// add functionality for save button and save time and task to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })


})