let width = 16;
let height = 16;
const NO_OF_SQUAURES = 50;
//select body element
let body = document.querySelector('body');
// create div element
let container  = document.createElement('div');
//create button element
let button  = document.createElement('button');

// function to activate on mouse hover
function activateMouseHover(e) {
  e.target.style.backgroundColor = 'blue';
}

// function to activate on mouseleave
function deActivateMouseHover(e) {
  e.target.style.backgroundColor = 'black';
  e.target.style.opacity = "0.75";
}

//added text to button tag
button.textContent = "Clear Grid";

// added class to button element
button.classList.add('btn');

// added container class to div element
container.classList.add('container');

//created a for loop to display grid y*y size of squares n times on container class div
for (let i= 0; i < NO_OF_SQUAURES; i++){

  let sixteenBySixteenDiv = document.createElement('div');
  sixteenBySixteenDiv.classList.add('grid');
  sixteenBySixteenDiv.style.height = height +"px";
  sixteenBySixteenDiv.style.width = width+"px"
  container.appendChild(sixteenBySixteenDiv)

  sixteenBySixteenDiv.addEventListener('mouseover', activateMouseHover)

  sixteenBySixteenDiv.addEventListener('mouseleave', deActivateMouseHover)


}

button.addEventListener('click', function (e) {
    // clear the container class  div content
    container.innerHTML = ''

    // prompt user for input
    let gridSize = window.prompt("Please enter the size of grid: ")

    //created a for loop to display grid yxy size of squares n times on container class div
    for (let i= 0; i < NO_OF_SQUAURES; i++){

      let sixteenBySixteenDiv = document.createElement('div')

      sixteenBySixteenDiv.classList.add('grid')

      sixteenBySixteenDiv.style.height = gridSize+'px'

      sixteenBySixteenDiv.style.width = gridSize+"px"
      
      container.appendChild(sixteenBySixteenDiv)

      sixteenBySixteenDiv.addEventListener('mouseover', activateMouseHover)

      sixteenBySixteenDiv.addEventListener('mouseleave', deActivateMouseHover)

    }

})

body.appendChild(button)
body.appendChild(container)
