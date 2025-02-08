// Function for dynamically loading dish images
const getDishImage = (title) => {
  try {
    return require(`../img/dishes/${title}.png`);
  } catch (error) {
    console.error(`Image not found for: ${title}`);
  }
};

export default getDishImage;