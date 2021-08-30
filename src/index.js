const axios = require("axios");
const core = require("@actions/core");

const DEFAULT_CHARACTER = "amy";
const AVAILABLE_CHARACTERS = new Set(["amy", "bender", "dr-zoidberg"]);

async function run() {
  const character =
    core.getInput("character", { required: false }) || DEFAULT_CHARACTER;

  core.debug(`[Futurama] Input Character: ${character}`);
  core.debug(
    `[Futurama] AVAILABLE_CHARACTERS: ${JSON.stringify([
      ...AVAILABLE_CHARACTERS,
    ])}`
  );

  if (!AVAILABLE_CHARACTERS.has(character)) {
    core.setFailed(`Unknown character: ${character}`);
    return;
  }

  core.debug(`[Futurama] Retrieving quote for: ${character}`);

  const response = await axios.get(
    `https://futuramaapi.herokuapp.com/api/characters/${character}/1`
  );
  const firstEntry = response.data[0];
  console.log(`${firstEntry.character}: ${firstEntry.quote}`);
  core.setOutput("quote", firstEntry);
}

run();
