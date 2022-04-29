// Desktop/Learn-Terra/clicker-portal/lib/index.js
module.exports = ({ wallets, refs, config, client }) => ({
  getCount: () => client.query("counter", { get_count: {} }),
  increment: (signer = wallets.validator) =>
    client.execute(signer, "counter", { increment: {} }),

  // This is what we're adding. "clicker" is the contract we want to interact with, "getAgent47" is the function.
  getAgent47: () => client.query("clicker", { get_agent47: {} }),

  getMission: () => client.query("clicker", { get_mission: {} }),
});