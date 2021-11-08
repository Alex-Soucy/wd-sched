// show current day, date, and time
var todaysDate = moment().format('dddd, MMM do YYYY, h:mm a');
$("#currentDay").html(todaysDate);

// add functionality for save button and save time and task to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // function added to keep track of time and apply proper class according to current time
    function timeTracker() {

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


    timeTracker();

})