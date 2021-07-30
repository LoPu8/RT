
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, a circle will appear in the center " +
        "of the screen.</p><p>If the circle is <strong>blue</strong>, " +
        "press the letter F on the keyboard as fast as you can.</p>" +
        "<p>If the circle is <strong>orange</strong>, press the letter J " +
        "as fast as you can.</p>" +
        "<div style='width: 700px;'>" +
        "<div style='float: left;'><img src='" + repo_site + "img/blue.png'></img>" + // Change 2: Adding `repo_site` in `instructions`
        "<p class='small'><strong>Press the F key</strong></p></div>" +
        "<div class='float: right;'><img src='" + repo_site + "img/orange.png'></img>" + // Change 2: Adding `repo_site` in `instructions`
        "<p class='small'><strong>Press the J key</strong></p></div>" +
        "</div>" +
        "<p>Press any key to begin.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions);

/* test trials */

var test_stimuli = [{
        stimulus: repo_site + "img/blue.png", // Change 3: Adding `repo_site` in `test_stimuli`
        data: {
            test_part: 'test',
            correct_response: 'f'
        }
    },
    {
        stimulus: repo_site + "img/orange.png", // Change 3: Adding `repo_site` in `test_stimuli`
        data: {
            test_part: 'test',
            correct_response: 'j'
        }
    },
    {    stimulus: "Please choose the option that is DIFFERENT in text.",
        data: {
            test_part: 'test',
            correct_response: 'Enter'
        }
    }
];

var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: function () {
        return jsPsych.randomization.sampleWithoutReplacement([750, 1000, 1250, 1500, 1750, 2000], 1)[0];
    },
    data: {
        test_part: 'fixation'
    }
}

var test = {
    type: "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: ['f', 'j'],
    data: jsPsych.timelineVariable('data'),
    trial_duration: 2500,
    on_finish: function (data) {
        data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
    },
}

var feedback = {
    type: 'html-keyboard-response',
    stimulus: function(){
      // The feedback stimulus is a dynamic parameter because we can't know in advance whether
      // the stimulus should be 'correct' or 'incorrect'.
      // Instead, this function will check the accuracy of the last response and use that information to set
      // the stimulus value on each trial.
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if(last_trial_correct){
        return "<div class = centerbox><div style='color:green'; class = center-text>Correct!</div></div>"; // the parameter value has to be returned from the function
      } else {
        return "<div class = centerbox><div style='color:red'; class = center-text>Incorrect</div></div>"; // the parameter value has to be returned from the function
      }
    },
    trial_duration: 1500
  }


var test_procedure = {
    timeline: [fixation, test, feedback],
    timeline_variables: test_stimuli,
    repetitions: 2,
    randomize_order: true
}
timeline.push(test_procedure);

/* define debrief */

var debrief_block = {
    type: "html-keyboard-response",
    stimulus: function () {

        var trials = jsPsych.data.get().filter({
            test_part: 'test'
        });
        var correct_trials = trials.filter({
            correct: true
        });
        var accuracy = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return "<p>You responded correctly on " + accuracy + "% of the trials.</p>" +
            "<p>Your average response time was " + rt + "ms.</p>" +
            "<p>Press any key to complete the experiment. Thank you!</p>";

    }
};
timeline.push(debrief_block);