const axios = require("axios");
const core = require("@actions/core");

async function run() {
  const character = core.getInput("character", { required: false });
  console.log(character);

  const response = await axios.get(
    "https://futuramaapi.herokuapp.com/api/characters/zapp-brannigan/1"
  );
  const firstEntry = response.data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
}

run();
