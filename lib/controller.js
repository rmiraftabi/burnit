'use strict';

var data = require('./data.js'),
  parseNumber = new RegExp(/([\d])+(\.[\d]*)?/);

function createOnlyInteger(time) {
  return Math.round(time) - ((Math.round(time) > time) ? 1 : 0);
}

function transformCalories(calories) {
  if (typeof calories === 'number') {
    return calories;
  } else if (typeof calories === 'string') {
    return parseFloat(parseNumber.exec(calories)[0]);
  }
  return 0;
}

function transformWeight(weight) {
  if (typeof weight === 'number') {
    return weight;
  } else if (typeof weight === 'string') {
    if (weight.indexOf('lb') > -1) {
      return parseFloat(parseNumber.exec(weight)[0]) / 2.2;
    } else {
      // assume kilos
      return parseFloat(parseNumber.exec(weight)[0]);
    }
  }
  return 1;
}

function calculateTime(calories, weight, activity) {
  return convertTimeToString(
      transformCalories(calories) / (data.activities[activity].met *
      transformWeight(weight)));
}

function convertTimeToString(time) {
  var hours = createOnlyInteger(time);
  var minutesRaw = 60 * (time - hours);
  var minutes = createOnlyInteger(minutesRaw);
  var seconds = Math.round(60 * (minutesRaw - minutes));
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return (hours > 0) ? hours + ":" + minutes + ":" + seconds :
      minutes + ":" + seconds;
}

// TODO create convertTimeToString with locale...

module.exports = {
  getDefaultCalories : function(calories) {
    var response = {};
    var weights = [60, 80, 100];
    for (var i = 0; i < weights.length; i++) {
      var w = weights[i];
      var activities = [];
      for (var j = 0; j < data.defaultActivities.length; j++) {
        var activity = data.defaultActivities[j];
        activities.push({
          label: data.activities[activity].label,
          time: calculateTime(calories, w, activity)
        });
      }
      response[new String(w)] = { label: w + "kg", activities: activities};
    }
    return response;
  }
}
