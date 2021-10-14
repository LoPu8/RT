
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> You succesfully finished the test trials. </p>" +
        "<p> You will now start the first block of the experiment.  </p> " +
        "<p> The task will stay the same: You have to choose the option, in which the word (i.e., text) is <strong>different</strong>.</p>" +
        "<p > Again, the task will be the same for all trials in this block.</p> " +
        "<p> Please again try to answer at least 80% correct. </p>" +
        "<p style = 'margin-top: 100px'> When you are ready, press any key to begin. </p> "        
};
timeline.push(welcome_block);


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
        "<br>" +
      "<div style=';' class='sev'>" +
            "<div>" +
            "<p class='little'>  Press f  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='little'> Press j </p></div>" +
      "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },
  
  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: red; '><strong>Blue</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: blue; '>" +
         "<p class='small'>  <strong>Red</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:blue'><strong>Blue</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Press f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Press j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: blue; '><strong>Orange</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: orange; '>" +
         "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:green'><strong>Orange</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Press f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Press j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: orange; '><strong>Green</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: green; '>" +
         "<p class='small'>  <strong>Black</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Green</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
   "<div style=';' class='sev'>" +
         "<div>" +
         "<p class='little'>  Press f  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='little'> Press j </p></div>" +
   "</div>",
    data: {
      test_part: 'test',
      correct_response: 'f'
    }
  },

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: purple; '><strong>Brown</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: orange; '>" +
         "<p class='small'>  <strong>Brown</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:orange'><strong>Blue</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: brown; '><strong>Pink</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Pink</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:pink'><strong>Brown</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: green; '><strong>Purple</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: purple; '>" +
         "<p class='small'>  <strong>Purple</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Green</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the word (i.e., text) is <strong>different</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: pink; '><strong>Black</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: blue; '>" +
         "<p class='small'>  <strong>Black</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:blue'><strong>Red</strong></p></div>" +
     "</div>" +
     "<div> <p></p> </div>" +
     "<br>" +
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
        return "<div class = centerbox><div style='color:green'; class = center-text> <p style= 'font-size: 2em'>Correct!</p></div></div>"; // the parameter value has to be returned from the function
      } else {
        return "<div class = centerbox><div style='color:red'; class = center-text> <p style= 'font-size: 2em'>Incorrect!</p></div></div>"; // the parameter value has to be returned from the function
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
        var accuracy_Exp1 = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return "<p>You responded correctly on " + accuracy_Exp1 + "% of the trials.</p>" +
            "<p style = 'margin-top: 100px'>Press any key to continue!</p>";

    }
};
timeline.push(debrief_block);