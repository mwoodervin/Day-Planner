$(document).ready(function() {
    
    // Set Global Variables

    let todoDiv;

    // set date in header
    let today = moment();
    
    $("#currentDay").text(today.format("LL"));
    // Create Calendar
    // how do I make the hours work?

    function createCalendar(date) {

        date = moment().hour(6);

        for (let i = 0; i < 18; i++) {
            
            let rowDiv = $("<div>").addClass("row");

            let timeBlock = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(date.format("h a"));
            
            todoDiv = $("<textarea>").addClass("col-10 textarea");
            
            let saveDiv = $("<button>").addClass("col-1 btn saveBtn");
            saveBtnIcon = $("<i>").addClass("fas fa-save fa-3x d-flex align-items-center justify-content-center");

            date.add(1, "hour");
            
            $(".container").append(rowDiv.append(timeBlock,todoDiv,saveDiv.append(saveBtnIcon)));

            if (today.isAfter(date, "hour")) {
                todoDiv.addClass("past");
            } else if (today.isBefore(date, "hour")) {
                todoDiv.addClass("future");
            } else {
                todoDiv.addClass("present");
            }
        }
    }

    $(window).on("load", createCalendar());

    // // function to store input
    // function storeToDo() {
    //     console.log(todoDiv.innerHTML);
    //     localStorage.setItem("todoList", JSON.stringify(todoDiv.text)); 
    // };

    // // function to retrieve input

    // function getToDo() {
    //     localStorage.getItem("todoList", JSON.parse(todoDiv.text));
    // };

    // // on-click event to save todoItems to local storage
    // $(".btn").click(storeToDo);

});

