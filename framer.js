
const image = document.getElementById('img'); 
const borderControl = document.getElementById('borderControl');
const borderColourControl = document.getElementById('borderColourControl');

const updateBorderThickness = (event) => {
  const thickness = event.target.value;
  image.style.borderWidth = `${thickness}px`;
};

const updateBorderColour = (event) => {
  const colour = event.target.value;
  image.style.borderColor = colour;
};

borderControl.addEventListener('mousemove', updateBorderThickness);
borderColourControl.addEventListener('change', updateBorderColour);