// show current day, date, and time
var todaysDate = moment().format('LLLL');
$("#currentDay").html(todaysDate);

// add functionality for save button and save time and task to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // function added to keep track of time and apply proper class according to current time
    function timeTrack() {

        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var schedTime = parseInt($(this).attr("id").split("hour")[1]);

            if (schedTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (schedTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Retrieve items from local storage
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    // run timeTrack function
    timeTrack();

})