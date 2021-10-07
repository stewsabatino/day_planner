var $headerDate = $("#currentDay")
$headerDate.text(moment().format("dddd, MMM Do"))


var $rows = document.getElementsByClassName("row")
var currentHour = parseInt(moment().format("H"))

var array$rows = Array.from($rows)
console.log(array$rows)

// array$rows.forEach((row) => {
//     var rowIdString = row.id
//     var rowHour = parseInt(rowIdString)
//     console.log(rowHour)
//     if (rowHour) { 
//         if (currentHour === rowHour) {    
//             $("#" + rowIdString).children("input").addClass("present")
//         } else if (currentHour < rowHour) {
//             $("#" + rowIdString).children("input").addClass("future")
//         } else {
//             $("#" + rowIdString).children("input").addClass("past")
//         }
//     }
// })

function setColor(element, color) {
    element.style.backgroundColor = color
}



$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var savedChar = $(this).siblings("input").val()
    console.log($(this).parent().attr("id"))
    localStorage.setItem($(this).parent().attr("id"), savedChar)
})

function init(){
    for (var i = 9, j=0; i < 17; i++, j++) {
        var savedChar = localStorage.getItem(i)
        $("#" + i).children("input").val(savedChar)
        var rowIdString = array$rows[j].id
        var rowHour = parseInt(rowIdString)
        console.log(rowHour)
        if (rowHour) { 
            if (currentHour === rowHour) {    
                $("#" + rowIdString).children("input").addClass("present")
            } else if (currentHour < rowHour) {
                $("#" + rowIdString).children("input").addClass("future")
            } else {
                $("#" + rowIdString).children("input").addClass("past")
            }
        }
    }
}

init()