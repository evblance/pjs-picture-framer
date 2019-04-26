
const image = document.getElementById('img'); 
const borderControl = document.getElementById('borderControl');
const borderColourControl = document.getElementById('borderColourControl');
const blurControl = document.getElementById('blurControl');

const updateBorderThickness = (event) => {
  const thickness = event.target.value;
  image.style.borderWidth = `${thickness}px`;
};

const updateBorderColour = (event) => {
  const colour = event.target.value;
  image.style.borderColor = colour;
};

const updateBlur = (event) => {
  const blur = event.target.value;
  image.style.filter = `blur(${blur}px)`;
};

borderControl.addEventListener('mousemove', updateBorderThickness);
borderColourControl.addEventListener('change', updateBorderColour);
blurControl.addEventListener('mousemove', updateBlur);