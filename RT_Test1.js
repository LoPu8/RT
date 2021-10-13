
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> You will first engage with a task, in which you have to choose specific words. </p>" +
        "<p> After that, you will take part in an unrelated survey, in which we ask you about your perception of political events. </p> " +
        "<p> </p>" +
        "<p> </p>" +
        "<p style = 'margin-top: 100px'> Press any key to begin. </p> "        
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, you will see three words. " +
        "One big word in the middle, and two smaller ones to the left and right.</p>" +
        "<p> Your task is, to identify the word which is <strong>different</strong> to the one in the middle </p>"+ 
        "<p style = 'margin-bottom: 50px'> If the <strong>left</strong> word is different to the one presented in the middle, press the letter  <strong>F</strong> on the keyboard." +
        "If the <strong>right</strong> word is different to the one presented in the middle, press the letter  <strong>J</strong>.</p> <p> </p> " +
        "<div >" +
        "<p class='big', style='color: black; '><strong>Yellow</strong></p>" +
        "<div style=';' class='sev'>" +
           "<div style='color: red; '>" +
           "<p class='small'>  <strong>Blue</strong>  </p>  </div>" +
           "<div class='float: right;'>" +
           "<p class='small', style = 'color:blue'><strong>Yellow</strong></p></div>" +
       "</div>" "</div> " +
     "<p style = 'margin-top: 10px> In this example, the left word is different to the one in the middle. Thus, you should press F on the keyboard. </p>" +
        "<p>Press F to begin.</p>",
    post_trial_gap: 500
};
timeline.push(instructions1);

var instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will first have 16 practice trials. After each trial, you will get feedback, whether the answer was correct or not. " +
        "<strong> You have to answer at least 80% correct in order to continue to the next part of the experiment </strong>, so it is more important to be correct than to answer fast.</p>" +
        "<p> </p>" + 
        "<p style = 'margin-top: 100px'> When you are ready, press any key to begin.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions2);


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
        return "<div class = centerbox><div style='color:green'; class = center-text; class='big' >Correct!</div></div>"; // the parameter value has to be returned from the function
      } else {
        return "<div class = centerbox><div style='color:red'; class = center-text; class='big' >Incorrect</div></div>"; // the parameter value has to be returned from the function
      }
    },
    trial_duration: 2500
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
        var accuracy_Test1 = Math.round(correct_trials.count() / trials.count() * 100);
        var rt = Math.round(correct_trials.select('rt').mean());

        return "<p>You responded correctly on " + accuracy_Test1 + "% of the trials.</p>" +
            "<p style = 'margin-top: 100px'>Press any key to continue!</p>";

    }
};
timeline.push(debrief_block);