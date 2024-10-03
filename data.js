let BIN_ID = "66feac11e41b4d34e43c5e13";
let BASE_URL = "https://api.jsonbin.io/v3";

// loads data from db to global array in script.js
async function loadData() {
  let response = await axios.get(`${BASE_URL}/b/${BIN_ID}/latest`);
  return response.data.record; //returns the array that contains food objects
}

async function createFoodItem(foods, foodName, foodPrice, foodRatings) {
  let foodItem = {
    id: foods.length,
    foodName: foodName,
    foodPrice: foodPrice,
    foodRatings: foodRatings,
  };
  foods.push(foodItem);
  console.log("foods", foods);
  await axios.put(`${BASE_URL}/b/${BIN_ID}`, foods);
}
