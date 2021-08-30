const axios = require("axios");

async function run() {
  const response = await axios.get(
    "https://futuramaapi.herokuapp.com/api/characters/zapp-brannigan/1"
  );
  const firstEntry = response.data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
}

run();
