function startBar() {
  var elem = document.getElementById("progressLine");
  var widthLineBar = 0;
  
  var id = setInterval(frame, 10);
  console.log("id = ", id);
  
  function frame(){
    if(widthLineBar>=100){
      clearInterval(id);
    } else {
      widthLineBar++;
      elem.style.width = widthLineBar + '%';
      document.getElementById("label").innerHTML = widthLineBar + '%';
    }
  }
  
}