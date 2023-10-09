let img = new Image();
let lol = document.querySelector("div");

img.onload = function() {
  lol.appendChild(img)
}

img.src = 'vscode.png'

function login(usn,pass){
  document.write("-------------------<br>")
  document.write("-------LOGIN-------<br>")
  document.write("-------------------<br>")
  document.write("username :" + usn)
  document.write("<br>password: " + pass)
}

login("dhiyaul","*******")