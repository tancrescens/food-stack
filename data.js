let BIN_ID = "66feac11e41b4d34e43c5e13";
let BASE_URL = "https://api.jsonbin.io/v3";

// loads data from db to global array in script.js
async function loadData() {
  let response = await axios.get(`${BASE_URL}/b/${BIN_ID}/latest`);
  return response.data.record; //returns the array that contains food objects
}

// CREATE: food item
async function createFoodItem(foods, foodName, foodPrice, foodRatings) {
  let foodItem = {
    id: foods.length + 1,
    foodName: foodName,
    foodPrice: foodPrice,
    foodRatings: foodRatings,
  };

  foods.push(foodItem);
  console.log("foods", foods);
  await axios.put(`${BASE_URL}/b/${BIN_ID}`, foods);
} // end of CREATE: createFoodItem()

// UPDATE: foodItem
async function updateFoodItem(
  foods,
  foodId,
  newFoodName,
  newFoodPrice,
  newFoodRatings
) {
  // using findIndex
  let index = foods.findIndex(function (food) {
    return food.id == foodId; // if the annoymous function returns true, then the index of food is the result
  });
  // Do the replacement
  // make sure index is no null, undefined or 0 etc.
  if (index || index === 0) {
    foods[index] = {
      id: foodId,
      foodName: newFoodName,
      foodPrice: newFoodPrice,
      foodRatings: newFoodRatings,
    };
  }

  await axios.put(`${BASE_URL}/b/${BIN_ID}`, foods);
} // end of UPDATE: updateFoodItem()

// DELETE: delete food item
async function deleteFoodItem(foods, foodId) {
  let index = foods.findIndex(function (food) {
    return food.id == foodId;
  });

  // delete from global foods array
  foods.splice(index, 1);

  await axios.put(`${BASE_URL}/b/${BIN_ID}`, foods);
}
