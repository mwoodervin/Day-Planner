$(document).ready(function () {

    // Set Global Variables
    let todoDiv;
    let text = $(".textarea");

    // let now;
    let inputHour;
    let inputText;
    let timeblock;
    // let inputText = $(this).parent().parent().find("textarea")[0];
    // let inputHour = $(this).parent().parent().find(".hour")[0].dataset.hour;

    // Set date in header
    let today = moment();
    $("#currentDay").text(today.format("dddd | LL | h mm a"));
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

            timeBlock = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(now.format("h a"));

            timeBlock.attr("data-hour", i);

            todoDiv = $("<textarea>").addClass("col-10 textarea");

            let saveDiv = $("<button>").addClass("col-1 btn saveBtn");
            saveBtnIcon = $("<i>").addClass("fas fa-save fa-2x d-flex align-items-top justify-content-center");
            clearBtnIcon = $("<i>").addClass("fas fa-backspace fa-2x d-flex align-items-bottom justify-content-center");

            todoDiv.text(todoItem);

            $(".container").append(rowSetDiv.append(timeBlock, todoDiv, saveDiv.append(saveBtnIcon,clearBtnIcon)));

            if (today.isAfter(now, "hour")) {
                todoDiv.addClass("past");
            } else if (today.isBefore(now, "hour")) {
                todoDiv.addClass("future");
            } else {
                todoDiv.addClass("present");
            }

            now.add(1, "hour");

        }

    }

    // Function to store calendar to-do items

    function storeToDo() {
        let inputText = $(this).parent().parent().find("textarea")[0].value;
        let inputHour = $(this).parent().parent().find(".hour")[0].dataset.hour;
        
        localStorage.setItem(inputHour, inputText);
    }

    function clearToDo() {
        let inputText = $(this).parent().parent().find("textarea")[0].value;
        // let textBox = $(this).parent().parent().find("textarea")[0];
        // let inputHour = $(this).parent().parent().find(".hour")[0].dataset.hour;

        localStorage.removeItem(inputHour);
        console.log(inputText);

        $((".textarea")[0]).remove();

        // inputText.text = [];
       }

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
    $(document).on("click", ".fa-save", storeToDo);

    // To clear text input when "clear" icon is clicked
    $(document).on("click", ".fa-backspace", clearToDo);


});

// need to add a function to check the time and refresh page if rolled to a new hour
// this refresh needs to display saved items

