let BIN_ID = "66fe9366ad19ca34f8b2127e";
let BASE_URL = "https://api.jsonbin.io/v3";

// loads data from db to global array in script.js
async function loadData() {
  let response = await axios.get(`${BASE_URL}/b/${BIN_ID}`);
  return response.data.record; //returns the array that contains food objects
}
