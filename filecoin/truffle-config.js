module.exports = {
  environments: {
    development: {
      ipfs: {
        address: "http://127.0.0.1:5001",
      },
      filecoin: {
        address: "http://localhost:7777/rpc/v0",
        storageDealOptions: {
          epochPrice: "2500",
          duration: 518400,
        }
      },
    }
  }
};