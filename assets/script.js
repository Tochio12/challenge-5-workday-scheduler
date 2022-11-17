// display today's day and date
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

$(document).ready(function () {
    // saveBtn click listener
    $(".saveButton").on("click", function () {
     // get nearby values of the description in JQuery
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save text in local storage
        localStorage.setItem(time, value);

        $(".notification").addClass("hidden");

        setTimeout(function () {
            $(".notification").removeClass("hidden");
        }, 5000);
    });

    function timeUpdater() {
        // get current number of hours
        var presentTime = dayjs().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);

            // check time and add the classes for background indicators
            if (blockTime < presentTime) {
                $(this).addClass("past");
            } else if (blockTime === presentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    timeUpdater();

});