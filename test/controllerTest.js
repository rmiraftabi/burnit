var data = require('../lib/data.js'),
  controller = require('../lib/controller.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.testData = function(test) {
  test.equal(data.activities.crossfit.met, 8.0);
  test.equal(data.activities['soccer'].met, 7.0);
  test.equal(data.defaultActivities.length, 3);
  test.done();
}

/*
exports.testCalculation = function(test) {
  test.equal(controller.calculateTime(300, 60, 'crossfit'), 0.625);
  test.equal(controller.calculateTime("300kcal", "60kg", 'crossfit'), 0.625);
  test.equal(new String(controller.calculateTime(
      "300cal", "132lbs", 'crossfit')).substring(0, 5), "0.625");
  test.done();
}

exports.testTimeConversion = function(test) {
  var time = controller.calculateTime(300, 60, 'crossfit');
  test.equal(controller.convertTimeToString(time), "37:30");
  time = controller.calculateTime(300, 60, 'lyingTV');
  test.equal(controller.convertTimeToString(time), "5:00:00");
  test.done();
}
*/

exports.testGetDefaultCalories = function(test) {
  var response = controller.getDefaultCalories('200');
  test.equal(response['60'].activities[0].time, '46:31');
  test.done();
}
