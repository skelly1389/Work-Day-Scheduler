var ctTime = moment().format('H');

function startUp(){
    for(var j = 9; j<18; j++){
    var tempGrab = ('#' + j);
    var tempString = localStorage.getItem(tempGrab);
    console.log(tempGrab);
    console.log(tempString);
    $(tempGrab).val(tempString);
    }
}
function update() {
    var cTime = moment();
    $('#currentDay').text(cTime.format('dddd, Do MMMM'));
}
  setInterval(update, 1000);

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

$("a").click(function(event) {
    event.preventDefault();
    for(var i = 9; i<18; i++){
        var tempText = $('#' + i).val()
        localStorage.setItem('#' + i, tempText);
    }
});

startUp();