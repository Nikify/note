const darkBackground = "#212121"
const darkText = "#EFEBE9"
const darkHint = "#424242"
const darkButton = "#333333"
const darkIcon = "#757575"

const lightBackground = "#EFEBE9"
const lightText = "#263238"
const lightHint = "#BDBDBD"
const lightButton = "#EEEEEE"
const lightIcon = "#BDBDBD"

let darkMode = false
let scale = 5

let text = document.getElementById('field')
let mobileHint = document.getElementById('mobile-hint')
let desktopHint = document.getElementById('desktop-hint')
let button = document.getElementById('button')


document.onwheel = zoom;
document.onkeydown = keydown;

function keydown(evt){
  if (!evt) evt = event;
  if (evt.ctrlKey && evt.keyCode==32 || evt.ctrlKey && evt.keyCode==190){ 
    toggleColor()
  }
}

function toggleColor(){
  darkMode = !darkMode 

  if (darkMode) {
    text.style.backgroundColor = darkBackground
    text.style.color = darkText
    mobileHint.style.color = darkHint
    desktopHint.style.color = darkHint
    button.innerHTML = "c"
    button.style.backgroundColor = darkButton
    button.style.color = darkIcon
  }
  else {
    text.style.backgroundColor = lightBackground
    text.style.color = lightText
    mobileHint.style.color = lightHint
    desktopHint.style.color = lightHint
    button.innerHTML = "a"
    button.style.backgroundColor = lightButton
    button.style.color = lightIcon
  }
}

function zoom(event) {
  scale += event.deltaY * -0.01
  scale = Math.min(Math.max(1, scale), 20)
  text.style.fontSize = `${scale}em`
}
