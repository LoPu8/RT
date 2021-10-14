
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> You succesfully finished the second experiment trial. </p>" +
        "<p> You will now start the third block of the experiment.  </p> " +
        "<p> The task for this trial is slightly different: Please choose the option, in which the object belongs to a <strong>different category</strong> than the other two words.</p>" +
        "<div >" +
        "<p class='big', style='color: black; '><strong>Apple</strong></p>" +
        "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Banana</strong></p></div>" +
        "</div>" +
        "<p style = 'margin-top: 50px'> In this example, the left word is from a different category (color) compared to the other two (fruits). Thus, <strong>you should press F on the keyboard.</strong> </p>" +
      "<p style = 'margin-top: 100px'>Press F to begin.</p>" +
      "</div>"      
};
timeline.push(welcome_block);


  var test_stimuli = [
    { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
         "<p class='big', style='color: black; '><strong>Apple</strong></p>" +
         "<div style=';' class='sev'>" +
            "<div style='color: black; '>" +
            "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='small', style = 'color:black'><strong>Banana</strong></p></div>" +
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
  
  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Chair</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Wind</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Table</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Wind</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Bus</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Rain</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Circle</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Table</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Triangle</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Spaghetti</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Bread</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Circle</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Green</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Spaghetti</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Car</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Bus</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Banana</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Please choose the option in which the object is in a <strong>different category</strong> </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Monkey</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Elephant</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Car</strong></p></div>" +
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
    trial_duration: 2500
  }


var test_procedure = {
    timeline: [fixation, test, feedback],
    timeline_variables: test_stimuli,
    repetitions: 4,
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
        var accuracy_Exp3 = Math.round(correct_trials.count() / trials.count() * 100);
        var rt_Test2 = Math.round(correct_trials.select('rt').mean());

        return "<p>You responded correctly on " + accuracy_Exp3 + "% of the trials.</p>" +
            "<p style = 'margin-top: 100px'>Press any key to continue!</p>";

    }
};
timeline.push(debrief_block);