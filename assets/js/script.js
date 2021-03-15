function update() {
    var cTime = moment();
    $('#currentDay').text(cTime.format('dddd, Do MMMM H:mm:ss'));
  }
  setInterval(update, 1000);