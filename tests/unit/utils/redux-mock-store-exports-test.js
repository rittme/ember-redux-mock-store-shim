import { test, module } from "qunit";

import configureStore from "redux-mock-store";

module("Unit | Util | Redux Mock Store Exports", {
  beforeEach() {
    this.store = configureStore()();
  }
});

test("exports configureStore", function(assert) {
  assert.equal(typeof configureStore, "function");
});

test("configureStore has dispatch", function(assert) {
  assert.equal(typeof this.store.dispatch, "function");
});

test("configureStore has getState", function(assert) {
  assert.equal(typeof this.store.getState, "function");
});

test("configureStore has getActions", function(assert) {
  assert.equal(typeof this.store.getActions, "function");
});

test("configureStore has clearActions", function(assert) {
  assert.equal(typeof this.store.clearActions, "function");
});

test("configureStore has subscribe", function(assert) {
  assert.equal(typeof this.store.subscribe, "function");
});

test("configureStore has replaceReducer", function(assert) {
  assert.equal(typeof this.store.replaceReducer, "function");
});
