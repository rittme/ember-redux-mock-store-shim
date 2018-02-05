/* eslint-env node */
"use strict";

const mergeTrees = require("broccoli-merge-trees");
const Funnel = require("broccoli-funnel");
const path = require("path");

module.exports = {
  name: "redux-mock-store",

  treeForAddon(tree) {
    const reduxMockStorePath = path.dirname(
      require.resolve("redux-mock-store/dist/index-es.js")
    );
    let reduxMockStoreTree = this.treeGenerator(reduxMockStorePath);

    reduxMockStoreTree = new Funnel(reduxMockStoreTree, {
      files: ["index-es.js"],
      getDestinationPath: function(relativePath) {
        if (relativePath === "index-es.js") {
          return "index.js";
        }

        return relativePath;
      }
    });

    let addon = this.addons.find(addon => addon.name === "ember-cli-babel");
    reduxMockStoreTree = addon.transpileTree(reduxMockStoreTree, {
      "ember-cli-babel": {
        compileModules: false
      }
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxMockStoreTree);
    }

    const trees = mergeTrees([reduxMockStoreTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
