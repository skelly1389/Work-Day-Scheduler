var ctTime = moment('13','H').format('H');

function update() {
    var cTime = moment();
    $('#currentDay').text(cTime.format('dddd, Do MMMM H:mm:ss'));
}
  setInterval(update, 1000);

for(var i = 9; i<18; i++){
    console.log(ctTime);
    console.log(('#' + i));
    if(i > ctTime){
        console.log('green')
        $("#"+i).addClass("bg-success");
    }
    else if(i < ctTime){
        console.log('gray');
        $("#"+i).addClass("bg-secondary");
    }
    else{
        console.log('red')
        $("#"+i).addClass("bg-danger");
    }
}