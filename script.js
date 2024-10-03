// need a way to store our data
let foods = [];

window.addEventListener("DOMContentLoaded", async function () {
  foods = await loadData();

  renderFoodList();
});

function renderFoodList() {
  // let foodListEle = document.querySelector("#foods")
  // for(let foodItem in foods){
  // }
}
