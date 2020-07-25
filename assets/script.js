$(document).ready(function () {

    // Set Global Variables
    let todoDiv;
    // let now;
    let inputHour;

    // Set date in header
    let today = moment();
    $("#currentDay").text(today.format("dddd | LL | H mm a"));
    // now = moment().hour(6);

    // Function to Create Calendar

    function createCalendar(now) {

        now = moment().hour(6);

        for (let i = 0; i < 18; i++) {

            var todoItem = localStorage.getItem(i);
            if (!todoItem) {
                todoItem = "";
            }

            let rowSetDiv = $("<div>").addClass("row");

            let timeBlock = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(now.format("h a"));
            // i here corresponds to 0-18; data value added to element with a data value
            timeBlock.attr("data-hour", i);

            todoDiv = $("<textarea>").addClass("col-10 textarea");

            let saveDiv = $("<button>").addClass("col-1 btn saveBtn");
            saveBtnIcon = $("<i>").addClass("fas fa-save fa-3x d-flex align-items-center justify-content-center");

            todoDiv.text(todoItem);

            $(".container").append(rowSetDiv.append(timeBlock, todoDiv, saveDiv.append(saveBtnIcon)));

            if (today.isAfter(now, "hour")) {
                todoDiv.addClass("past");
            } else if (today.isBefore(now, "hour")) {
                todoDiv.addClass("future");
            } else {
                todoDiv.addClass("present");
            }
            // highlightTime();

            now.add(1, "hour");

        }
    }

    // Function to store calendar to-do items

    function storeToDo() {
        let inputText = $(this).parent().parent().find("textarea")[0].value;
        let inputHour = $(this).parent().parent().find(".hour")[0].dataset.hour;

        
        localStorage.setItem(inputHour, inputText);
    }

    // console.log(moment().hour());
    // console.log(now.format("h"));
    // console.log($(".hour").val());

// if (!moment().hour() === now) {
//     console.log("no match");

    // function hourHighlightUpdate() {
    //     // let currentHour = today;
    //     // let currentTimeBlock = now;
    //     // if (!moment().hour() == now) {
    //     //     console.log("no match");
    //         //     if (today.isAfter(now, "hour")) {
    //         //         todoDiv.addClass("past");
    //         //     } else if (today.isBefore(now, "hour")) {
    //         //         todoDiv.addClass("future");
    //         //     } else {
    //         //         todoDiv.addClass("present");
    //         //     }
    //     }
    // })

    // CLICK EVENTS
    // To load calendar when page is opened
    $(window).on("load", createCalendar());

    // To store text input when "save" icon is clicked
    $(document).on("click", "i", storeToDo);

});

// need to add a function to check the time and refresh page if rolled to a new hour
// this refresh needs to display saved items

