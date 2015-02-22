'use strict';

module.exports = {
  // Current METs all based on moderate / general METs, could add more later
  METs : {
    bicycling : 8.0,
    bicyclingStationary : 6.8,
    bootcamp : 5.0,
    calisthenics : 3.8,
    calisthenicsVigorous : 8.0,
    circuitTraining : 4.3,
    circuitTrainingVigorous : 8.0,
    // The following are assumed based on the above
    kettlebells : 8.0,
    crossfit : 8.0,
    // vigorous 6.0, 8-15 reps schemes at 3.5
    weightLifting : 5.0,
    // Les Mills, Bodypump etc.
    conditioningClasses : 7.8,
    // cardio + weigth training
    gym : 5.5,
    ropeSkipping : 12.3,
    rowing : 7.0, // 100W
    rowingVigorous : 8.5, // 150W
    rowingVeryVigorous : 12.0, // 200W
    pilates : 3.0,
    yoga : 3.0, // ~ based on different types
    fishing : 3.5,
    hunting : 5.0,
    cleaning : 3.5,
    sittingTV : 1.3,
    lyingTV : 1.0,
    sleeping : 0.95,
    choppingWood : 4.5,
    mowingLawn : 5.5,
    shovelingSnow : 6.0,
    running5 : 8.3,
    running7 : 11.0,
    runningCrossCountry : 9.0,
    badmington : 5.5,
    basketball : 6.5,
    frisbee : 3.0,
    frisbeeUltimate : 8.0,
    golf : 4.8,
    hockey : 8.0,
    orienteering : 9.0,
    rockClimbing : 8.0,
    skateboarding : 5.0,
    rollerblading : 9.8,
    soccer : 7.0,
    tennis : 7.3,
    trampoline : 3.5,
    volleyball : 4.0,
    stairClimbing : 8.0,
    walking : 4.3, // 3.5 mph
    canoeing : 5.3,
    kayaking : 5.0,
    scubaDiving : 7.0,
    snorkeling : 5.0,
    SUP : 6.0,
    swimming : 5.8,
    waterWalking : 4.5,
    iceSkating : 7.0,
    skiing : 9.0,
    skiingSkating : 13.3,
    snowShoeing : 5.3,
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
