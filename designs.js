// Select size input
const colorInput = document.querySelector("#colorPicker");
// Select size input
const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
//Selecting pixelCanvas
const tableCanvas = document.querySelector('#pixelCanvas');

//The preventDefault() method prevents the browser from executing the default action.
document.querySelector('form').addEventListener('submit', function(event) {
 event.preventDefault();
 makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
 // Your code goes here!
 tableCanvas.innerHTML = '';
 const tbody = document.createElement('tbody');
 //making table grid
  for (let i = 0; i < inputHeight.value; i++) {
  const tr = document.createElement('tr');

  for (let j = 0; j < inputWidth.value; j++) {
   const td = document.createElement('td');
   tr.appendChild(td);
  }
	//Adding addEventListener to tr, to change background color when user clicks
  tr.addEventListener('click', function(event) {
   event.target.style.backgroundColor = colorInput.value;;

  });
  tbody.appendChild(tr);
 }
 tableCanvas.appendChild(tbody);
};
