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
      network_id: '1337',
      gas: 500000,
    }
  }
};
