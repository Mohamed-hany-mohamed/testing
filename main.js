function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  if (hours > 12) {
    hours = hours - 12;
  }

  var time = hours + ":" + minutes + ":" + seconds;
  document.getElementById("c").innerHTML = time;
  setTimeout(showTime, 1000);
}
showTime();
