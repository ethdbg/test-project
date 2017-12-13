module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    debug: {
      host: 'localhost',
      port: 8546,
      network_id: '*',
      gas: 500000,
    }
  }
};
