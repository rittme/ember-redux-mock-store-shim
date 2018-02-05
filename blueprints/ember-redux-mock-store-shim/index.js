module.exports = {
  afterInstall: function() {
    return this.addPackagesToProject([
      { name: "redux-mock-store", target: "1.5.1" }
    ]);
  },

  normalizeEntityName: function() {
    // this prevents an error when the entityName is not specified
  }
};
