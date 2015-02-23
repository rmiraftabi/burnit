'use strict';

var loc = require('loc')();
var Translation = require('loc/lib/translation');
var i18n = new Translation(loc);

module.exports = {
  // Current METs all based on moderate / general METs, could add more later
  activities : {
    bicycling : { met: 8.0, label: i18n.__("Bicycling") },
    bicyclingStationary : { met: 6.8, label: i18n.__("Stationary bicycling") },
    bootcamp : { met: 5.0, label: i18n.__("Bootcamp") },
    calisthenics : { met: 3.8, label: i18n.__("Calisthenics (push-ups etc)") },
    calisthenicsVigorous : { met: 8.0, label: i18n.__("Vigorous Calisthenics") },
    circuitTraining : { met: 4.3, label: i18n.__("Circuit Training") },
    circuitTrainingVigorous : { met: 8.0, label: i18n.__("Vigorous Circuit Training") },
    // The following are assumed based on the above
    kettlebells : { met: 8.0, label: i18n.__("Kettlebell") },
    crossfit : { met: 8.0, label: i18n.__("CrossFit") },
    // vigorous 6.0, 8-15 reps schemes at 3.5
    weightLifting : { met: 5.0, label: i18n.__("Weightlifing") },
    // Les Mills, Bodypump etc.
    conditioningClasses : { met: 7.8, label: i18n.__("Conditioning") },
    // cardio + weigth training
    gym : { met: 5.5, label: i18n.__("Gym (Cardio + Weights)") },
    ropeSkipping : { met: 12.3, label: i18n.__("Rope Skipping") },
    rowing : { met: 7.0,  label: i18n.__("Rowing 100W") }, // 100W
    rowingVigorous : { met: 8.5,  label: i18n.__("Rowing 150W") }, // 150W
    rowingVeryVigorous : { met: 12.0,  label: i18n.__("Rowing 200W") }, // 200W
    pilates : { met: 3.0, label: i18n.__("Pilates") },
    yoga : { met: 3.0,  label: i18n.__("Yoga") }, // ~ based on different types
    fishing : { met: 3.5, label: i18n.__("Fishing") },
    hunting : { met: 5.0, label: i18n.__("Hunting") },
    cleaning : { met: 3.5, label: i18n.__("Cleaning") },
    sittingTV : { met: 1.3, label: i18n.__("Watching TV, sitting") },
    lyingTV : { met: 1.0, label: i18n.__("Watching TV, lying down") },
    sleeping : { met: 0.95, label: i18n.__("Sleeping") },
    choppingWood : { met: 4.5, label: i18n.__("Chopping Wood") },
    mowingLawn : { met: 5.5, label: i18n.__("Mowing Lawn") },
    shovelingSnow : { met: 6.0, label: i18n.__("Shoveling Snow") },
    running5 : { met: 8.3, label: i18n.__("Running (5mph)") },
    running7 : { met: 11.0, label: i18n.__("Running (7mph)") },
    runningCrossCountry : { met: 9.0, label: i18n.__("Trail Running") },
    badmington : { met: 5.5, label: i18n.__("Badmington") },
    basketball : { met: 6.5, label: i18n.__("Basketball") },
    frisbee : { met: 3.0, label: i18n.__("Frisbee") },
    frisbeeUltimate : { met: 8.0, label: i18n.__("Ultimate Frisbee") },
    golf : { met: 4.8, label: i18n.__("Golf") },
    hockey : { met: 8.0, label: i18n.__("Ice Hockey") },
    orienteering : { met: 9.0, label: i18n.__("Orienteering") },
    rockClimbing : { met: 8.0, label: i18n.__("Rock Climbing") },
    skateboarding : { met: 5.0, label: i18n.__("Skateboarding") },
    rollerblading : { met: 9.8, label: i18n.__("Rollerblading") },
    soccer : { met: 7.0, label: i18n.__("Soccer") },
    tennis : { met: 7.3, label: i18n.__("Tennis") },
    trampoline : { met: 3.5, label: i18n.__("Trampoline") },
    volleyball : { met: 4.0, label: i18n.__("Volleyball") },
    stairClimbing : { met: 8.0, label: i18n.__("Stair Climbing") },
    walking : { met: 4.3,  label: i18n.__("Walking, brisk pace") }, // 3.5 mph
    nordicWalking : { met: 4.8, label: i18n.__("Nordic Walking") },
    canoeing : { met: 5.3, label: i18n.__("Canoeing") },
    kayaking : { met: 5.0, label: i18n.__("Kayaking") },
    scubaDiving : { met: 7.0, label: i18n.__("Scuba Diving") },
    snorkeling : { met: 5.0, label: i18n.__("Snorkeling") },
    SUP : { met: 6.0, label: i18n.__("SUP") },
    swimming : { met: 5.8, label: i18n.__("Swimming") },
    waterWalking : { met: 4.5, label: i18n.__("Water Walking") },
    iceSkating : { met: 7.0, label: i18n.__("Ice Skating") },
    skiing : { met: 9.0, label: i18n.__("Skiing") },
    skiingSkating : { met: 13.3, label: i18n.__("Skiing (skating)") },
    snowShoeing : { met: 5.3, label: i18n.__("Snow Shoeing") }
  },
  defaultActivities : [
    'walking',
    'running5',
    'swimming'
  ],
  summerActivities : [
    'SUP',
    'canoeing',
    'kayaking',
    'snorkeling',
    'scuba',
    'mowingLawn',
    'fishing',
    'hunting'
  ],
  winterActivities : [
    'hockey',
    'skiing',
    'skiingSkating',
    'snowShoeing',
    'shovelingSnow'
  ],
  randomActivities : [
    'bicycling',
    'bicyclingStationary',
    'bootcamp',
    'calisthenics',
    'calisthenicsVigorous',
    'circuitTraining',
    'circuitTrainingVigorous',
    'crossfit',
    'kettlebells',
    'weightlifting',
    'conditioningClasses',
    'gym',
    'ropeSkipping',
    'rowing',
    'pilates',
    'yoga'
  ]
  // TODO update activity lists
}
