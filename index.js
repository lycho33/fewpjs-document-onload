// Your code goes here

//1. DOM Content loads the HTML page first
//2. Then everything else is loaded
//you can add the function inside here so the HTML will show once the DOM is loaded 
document.addEventListener("DOMContentLoaded", function() {
  updateDOM()
});

function updateDOM(){
  let p = document.querySelector('p')
  p.innerText = 'This is really cool!'
}