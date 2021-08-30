const axios = require("axios");
const core = require("@actions/core");

const DEFAULT_CHARACTER = "amy";

async function run() {
  const character =
    core.getInput("character", { required: false }) || DEFAULT_CHARACTER;
  const response = await axios.get(
    `https://futuramaapi.herokuapp.com/api/characters/${character}/1`
  );
  const firstEntry = response.data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
  core.setOutput("quote", firstEntry);
}

run();
