
const image = document.getElementById('img'); 
const imgBorder = document.getElementById('imgBorder');
const borderControl = document.getElementById('borderControl');
const borderColourControl = document.getElementById('borderColourControl');
const blurControl = document.getElementById('blurControl');

/**
 * Updates the image border thickness.
 * @param {any} event The border control input event.
 */
const updateBorderThickness = (event) => {
  const thickness = event.target.value;
  imgBorder.style.borderWidth = `${thickness}px`;
};

/**
 * Updates the image border colour.
 * @param {any} event The border colour input event.
 */
const updateBorderColour = (event) => {
  const colour = event.target.value;
  imgBorder.style.borderColor = colour;
};

/**
 * Updates the image blur filter.
 * @param {any} event The blur control input event.
 */
const updateBlur = (event) => {
  const blur = event.target.value;
  image.style.filter = `blur(${blur}px)`;
};

borderControl.addEventListener('mousemove', updateBorderThickness);
borderColourControl.addEventListener('change', updateBorderColour);
blurControl.addEventListener('mousemove', updateBlur);