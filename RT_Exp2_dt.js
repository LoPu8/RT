
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> You succesfully finished the first experiment trial. </p>" +
        "<p> You will now start the second block of the experiment.  </p> " +
        "<p> The task will stay the same: You have to choose the option, in which the word (i.e., text) is <strong>different</strong>.</p>" +
        "<p > Again, the task will be the same for all trials in this block.</p> " +
        "<p> Please again try to answer at least 80% correct. </p>" +
        "<p style = 'margin-top: 100px'> When you are ready, press any key to begin. </p> "        
};
timeline.push(welcome_block);


  var test_stimuli = [
        { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
         "<p class='big', style='color: red; '><strong>Tomato</strong></p>" +
         "<div style=';' class='sev'>" +
            "<div style='color: red; '>" +
            "<p class='small'>  <strong>Potato</strong>  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='small', style = 'color:blue'><strong>Tomato</strong></p></div>" +
        "</div>" +
        "<div> <p></p> </div>" +
        "<br>" +
      "<div style=';' class='sev'>" +
            "<div>" +
            "<p class='little'>  Drücken Sie f  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='little'> Drücken Sie j </p></div>" +
      "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },
  
      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: blue; '><strong>Monkey</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: orange; '>" +
         "<p class='small'>  <strong>Donkey</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:brown'><strong>Monkey</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: orange; '><strong>Bridge</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Fridge</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:orange'><strong>Bridge</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: green; '><strong>Hand</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: pink; '>" +
         "<p class='small'>  <strong>Band</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:green'><strong>Hand</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: brown; '><strong>Bear</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: brown; '>" +
         "<p class='small'>  <strong>Bear</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:red'><strong>Pear</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'j'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: pink; '><strong>Cat</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: purple; '>" +
         "<p class='small'>  <strong>Cat</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Bat</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'j'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: purple; '><strong>Mouse</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: blue; '>" +
         "<p class='small'>  <strong>Mouse</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:purple'><strong>House</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'j'
    }
  },

      { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Hole</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: green; '>" +
         "<p class='small'>  <strong>Hole</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:pink'><strong>Mole</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Drücken Sie f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Drücken Sie j </p></div>" +
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
        return jsPsych.randomization.sampleWithoutReplacement([750, 1000, 1250, 1500], 1)[0];
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
    trial_duration: 8000,
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
        return "<div class = centerbox><div style='color:green'; class = center-text> <p style= 'font-size: 2em'>Richtig!</p></div></div>"; // the parameter value has to be returned from the function
      } else {
        return "<div class = centerbox><div style='color:red'; class = center-text> <p style= 'font-size: 2em'>Falsch!</p></div></div>"; // the parameter value has to be returned from the function
      }
    },
    trial_duration: 1500
  }


var test_procedure = {
    timeline: [fixation, test, feedback],
    timeline_variables: test_stimuli,
    repetitions: 1,
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
        var accuracy_Exp2 = Math.round(correct_trials.count() / trials.count() * 100);
        var rt_Test2 = Math.round(correct_trials.select('rt').mean());

        return "<p>You responded correctly on " + accuracy_Exp2 + "% of the trials.</p>" +
            "<p style = 'margin-top: 100px'>Press any key to continue!</p>";

    }
};
timeline.push(debrief_block);