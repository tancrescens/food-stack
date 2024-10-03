// need a way to store our data
let foods = [];

window.addEventListener("DOMContentLoaded", async function () {
  foods = await loadData();

  renderFoodList();

  document
    .querySelector("#createFoodItemBtn")
    .addEventListener("click", function () {
      let foodName = document.querySelector("#foodName").value;
      let foodPrice = document.querySelector("#foodPrice").value;
      let foodRatings = document.querySelector(".ratings:checked").value;

      // the addTask function is in data.js
      createFoodItem(foods, foodName, foodPrice, foodRatings);
      // re-render all the tasks
      renderFoodList();
    });
}); // end DOMContentLoaded

// READ: Render Food List + Edit and Delete button functionality
function renderFoodList() {
  let foodUlEle = document.querySelector("#foods");

  // empty the task list of all the <li> inside it. To facilitate rendering of list.
  foodUlEle.innerHTML = ""; // remove all the children inside

  // Display + create functionality of Edit and Delete btn
  for (let foodItem of foods) {
    let liElement = document.createElement("li");
    liElement.innerHTML = `
      Food: ${foodItem.foodName} <button class="edit">Edit</button> <button class="delete">Delete</button><br />
      Price: ${foodItem.foodPrice} | Ratings: ${foodItem.foodRatings}⭐
      <br />
      <br />
    `;

    // Edit Button Function
    let editBtn = liElement.querySelector(".edit");
    editBtn.addEventListener("click", function () {
      let newFoodName = prompt("Enter the new food name: ", foodItem.foodName);
      let newFoodPrice = prompt(
        "Enter the new food price: ",
        foodItem.foodPrice
      );
      let newFoodRatings = prompt(
        "Enter the new food ratings: ",
        foodItem.foodRatings
      );
      updateFoodItem(
        foods,
        foodItem.id,
        newFoodName,
        newFoodPrice,
        newFoodRatings
      );
      renderFoodList(); // redraw all the tasks, along with any changes
    }); // end of Edit Button

    // Delete Button Function
    let deleteBtn = liElement.querySelector(".delete");
    deleteBtn.addEventListener("click", function () {
      let reallyDelete = confirm("Are you sure you want to delete?");
      if (reallyDelete) {
        deleteFoodItem(foods, foodItem.id);
        renderFoodList();
      }
    }); // end of Delete Button

    foodUlEle.appendChild(liElement);
  } // end of for-loop
} // end renderFoodList()
