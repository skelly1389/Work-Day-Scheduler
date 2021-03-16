// sets a universal variable for time as of page load
var ctTime = moment().format('H');

// on page load grabs saved text from local storage and prints it to input boxes
function startUp(){
    for(var j = 9; j<18; j++){
    var tempGrab = ('#' + j);
    var tempString = localStorage.getItem(tempGrab);
    $(tempGrab).val(tempString);
    }
}

// checks time and updates top of page every second
function update() {
    var cTime = moment();
    $('#currentDay').text(cTime.format('dddd, Do MMMM'));
}
  setInterval(update, 1000);

  // checks to see if the current time is before, during, or after slotted time for the card
  // then changes the background color to indicate that state
for(var i = 9; i<18; i++){
    if(i > ctTime){
        $('#'+i).addClass('bg-success');

    }
    else if(i < ctTime){
        $('#'+i).addClass('bg-secondary');
    }
    else{
        $('#'+i).addClass('bg-danger');
    }
}

// saves text in all input boxes to local storage on click
$("a").click(function(event) {
    event.preventDefault();
    for(var i = 9; i<18; i++){
        var tempText = $('#' + i).val()
        localStorage.setItem('#' + i, tempText);
    }
});

// makes sure saved text populates on page load
startUp();