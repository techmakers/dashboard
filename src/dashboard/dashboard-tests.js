// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by dashboard.js.
import { name as packageName } from "meteor/techmakers:dashboard";

// Write your tests here!
// Here is an example.
Tinytest.add('dashboard - example', function (test) {
  test.equal(packageName, "dashboard");
});
