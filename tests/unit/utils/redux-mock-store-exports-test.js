import { test, module } from "qunit";

import configureStore from "redux-mock-store";

module("Unit | Redux Mock Store | Tests");

test("exports configureStore", function(assert) {
  assert.equal(typeof configureStore, "function");
});

test("configureStore has dispatch", function(assert) {
  assert.equal(typeof configureStore.dispatch, "function");
});

test("configureStore has getState", function(assert) {
  assert.equal(typeof configureStore.getState, "function");
});

test("configureStore has getActions", function(assert) {
  assert.equal(typeof configureStore.getActions, "function");
});

test("configureStore has clearActions", function(assert) {
  assert.equal(typeof configureStore.clearActions, "function");
});

test("configureStore has subscribe", function(assert) {
  assert.equal(typeof configureStore.subscribe, "function");
});

test("configureStore has replaceReducer", function(assert) {
  assert.equal(typeof configureStore.replaceReducer, "function");
});
