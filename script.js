// need a way to store our data
let foods = [];

window.addEventListener("DOMContentLoaded", async function () {
  foods = await loadData();

  renderFoodList();
});

function renderFoodList() {
  let foodUlEle = document.querySelector("#foods");

  // empty the task list of all the <li> inside it. To facilitate rendering of list.
  foodUlEle.innerHTML = ""; // remove all the children inside

  // Display + create functionality of Edit and Delete btn
  for (let foodItem of foods) {
    let liElement = document.createElement("li");
    liElement.innerHTML = `
      Food: ${foodItem.foodName} <button class="edit">Edit</button> <button class="delete">Delete</button><br />
      Price: ${foodItem.price} | Ratings: ${foodItem.ratings}⭐
      <br />
      <br />
    `;
    foodUlEle.appendChild(liElement);

    // Edit Button Function
    let editBtn = document.querySelector(".edit");
    editBtn.addEventListener("click", function () {});

    // Delete Button Function
    let deleteBtn = document.querySelector(".edit");
    deleteBtn.addEventListener("click", function () {});
  }
}
