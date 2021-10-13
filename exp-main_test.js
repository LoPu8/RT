
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> You will now first do an experiment, in which you have to choose specific words. </p>" +
        "<p> After that, you will take part in an unrelated survey, in which we ask you about your perception of political events. </p> " +
        "<p> </p>" +
        "<p> </p>" +
        "Press any key to begin."        
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, you will see three words. " +
        "One big word in the middle, and two smaller ones on the left on the right.</p><p>" +
        "Your task is, to identify the word which is <strong>different</strong> to the one in the middle" + 
        "<p> If the <strong>left</strong> word is different to the one presented in the middle, press the letter F on the keyboard.</p>" +
        "<p> If the <strong>right</strong> word is different to the one presented in the middle, press the letter J.</p>" +
        "<div >" +
        "<p class='big', style='color: black; '><strong>Red</strong></p>" +
        "<div style=';' class='sev'>" +
           "<div style='color: red; '>" +
           "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
           "<div class='float: right;'>" +
           "<p class='small', style = 'color:blue'><strong>Red</strong></p></div>" +
       "</div>" +
       "<div> <p></p> </div>" +
     "<div style=';' class='sev'>" +
           "<div>" +
           "<p class='little'>  Press f  </p>  </div>" +
           "<div class='float: right;'>" +
           "<p class='little'> Press j </p></div>" +
     "</div>"+
     "<p> In this case, the right word is different to the one in the middle. Thus, you should press J on the keyboard. </p>" +
        "<p>Press J to begin.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions);

/* test trials */

var test_stimuli = [
    { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
         "<p class='big', style='color: black; '><strong>Red</strong></p>" +
         "<div style=';' class='sev'>" +
            "<div style='color: red; '>" +
            "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='small', style = 'color:blue'><strong>Red</strong></p></div>" +
        "</div>" +
        "<div> <p></p> </div>" +
      "<div style=';' class='sev'>" +
            "<div>" +
            "<p class='little'>  Press f  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='little'> Press j </p></div>" +
      "</div>",
    data: {
      test_part: 'test',
      correct_response: 'j'
    }
  },
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
    type: "html-keyboard-response",
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