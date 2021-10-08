// Grab id currentDay and make variable in JS
// Set var to the correct moment JS format 
var $headerDate = $("#currentDay")
$headerDate.text(moment().format("dddd, MMM Do"))

// grab the rows
// make var for current hour
var $rows = document.getElementsByClassName("row")
var currentHour = parseInt(moment().format("H"))

// make rows into an array to loop over
var array$rows = Array.from($rows)

// Saves inputs to local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var savedChar = $(this).siblings("input").val()
    localStorage.setItem($(this).parent().attr("id"), savedChar)
})

// creates loop function for local storage to load in and color scheme
function init(){
    // i is for row since ids start at 9 / j (can start at 0) is for color scheme
    for (var i = 9, j=0; i < 18; i++, j++) {
        var savedChar = localStorage.getItem(i)
        // selects row inputs by row id and pushes local storage info
        $("#" + i).children("input").val(savedChar)
        // vars for iteration row ids and parse them
        var rowIdString = array$rows[j].id
        var rowHour = parseInt(rowIdString)
        // if statement to set colors based on iteration
        if (rowHour) { 
            if (currentHour === rowHour) {    
                // selects rows id and the input child and sets new class
                $("#" + rowIdString).children("input").addClass("present")
            } else if (currentHour < rowHour) {
                $("#" + rowIdString).children("input").addClass("future")
            } else {
                $("#" + rowIdString).children("input").addClass("past")
            }
        }
    }
}

// run init on page load
init()