
const image = document.getElementById('img'); 
const borderControl = document.getElementById('borderControl');

const updateBorderThickness = (event) => {
  const thickness = event.target.value;
  image.style.border = `${thickness}px solid black`;
};

borderControl.addEventListener('mousemove', updateBorderThickness);