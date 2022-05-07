// can use `process.env.SECRET_MNEMONIC` or `process.env.SECRET_PRIV_KEY`
// to populate secret in CI environment instead of hardcoding

// We are configuring dotenv here 
require('dotenv').config();

module.exports = {
  custom_tester_1: {
    mnemonic:
      "shiver position copy catalog upset verify cheap library enjoy extend second peasant basic kit polar business document shrug pass chuckle lottery blind ecology stand",
  },
  custom_tester_2: {
    privateKey: "fGl1yNoUnnNUqTUXXhxH9vJU0htlz9lWwBt3fQw+ixw=",
  },
  bombay: {
    // Instead of the actual seed phrase we can use this :D
    mnemonic: SEED_PHRASE,
  },
};
