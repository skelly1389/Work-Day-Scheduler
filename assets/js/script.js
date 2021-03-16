var ctTime = moment().format('H');

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
    console.log($('#9').val());
    for(var i = 9; i<18; i++){
        var tempText = $('#' + i).val()
        localStorage.setItem('#' + i, tempText);
    }
});