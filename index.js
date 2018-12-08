
var newInput = document.getElementById("input")

function send(){
  var box = document.createElement("div")
  box.id = "box"
  document.getElementById("mainDiv").appendChild(box)
  var element = document.createElement("p")
  element.innerHTML = newInput.value
  newInput.value = "";
  box.appendChild(element)
  var tinyBox = document.createElement("div")
  tinyBox.id = "tinyBox"
  box.appendChild(tinyBox)
  var close = document.createElement("button")
  var x = document.createTextNode("x")
  tinyBox.appendChild(close)
  close.appendChild(x)
  close.addEventListener("click",remove)
}

function sendTarea(e){
  if (e.keyCode === 13) {
    send();
  }
}



document.getElementById("button").addEventListener("click",send)
newInput.addEventListener("keyup",sendTarea);

function remove(e){
  console.log(e.target.parentNode.parentNode);
  var variable =e.target.parentNode.parentNode
  document.getElementById("mainDiv").removeChild(variable)
}
