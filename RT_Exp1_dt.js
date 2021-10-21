
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> Sie haben die Übungs-Aufgaben erfolgreich durchlaufen. </p>" +
        "<p> Sie beginnen nun die eigentlichen Aufgaben.</p> " +
        "<p> Die Aufgabe bleibt immer gleich: Bitte wählen Sie das Wort aus, welches von den Buchstaben her <strong>unterschiedlich</strong> ist im Vergleich zu dem Wort in der Mitte.</p>" +
        "<p style = 'margin-top: 100px'> Wenn Sie bereit sind, drücken Sie eine beliebige Taste, um zu beginnen. </p> "        
};
timeline.push(welcome_block);


var test_stimuli = [
  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
       "<p class='big', style='color: gold; '><strong>Blau</strong></p>" +
       "<div style=';' class='sev'>" +
          "<div style='color: navy; '>" +
          "<p class='small'>  <strong>Braun</strong>  </p>  </div>" +
          "<div class='float: right;'>" +
          "<p class='small', style = 'color:crimson'><strong>Blau</strong></p></div>" +
      "</div>" +
      "<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: green; '><strong>Braun</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: brown; '>" +
       "<p class='small'>  <strong>Grün</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:brown'><strong>Braun</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: rebeccapurple; '><strong>Gelb</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: gold; '>" +
       "<p class='small'>  <strong>Lila</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:gold'><strong>Gelb</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: darkorange; '><strong>Grün</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: crimson; '>" +
       "<p class='small'>  <strong>Orange</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:rebeccapurple'><strong>Grün</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: magenta; '><strong>Lila</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: rebeccapurple; '>" +
       "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:darkorange'><strong>Lila</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: crimson; '><strong>Orange</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: black; '>" +
       "<p class='small'>  <strong>Orange</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:blue'><strong>Blau</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: black; '><strong>Pink</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: turquoise; '>" +
       "<p class='small'>  <strong>Pink</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:magenta'><strong>Schwarz</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: turquoise; '><strong>Rot</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: gold; '>" +
       "<p class='small'>  <strong>Rot</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:crimson'><strong>Türkis</strong></p></div>" +
   "</div>" +
   "<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: blue; '><strong>Schwarz</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: black; '>" +
   "<p class='small'>  <strong>Schwarz</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:gold'><strong>Lila</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: brown; '><strong>Türkis</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: gold; '>" +
   "<p class='small'>  <strong>Türkis</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:turquoise'><strong>Gelb</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
   "<p class='big', style='color: black; '><strong>Pink</strong></p>" +
   "<div style=';' class='sev'>" +
      "<div style='color: mediumvioletred; '>" +
      "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
      "<div class='float: right;'>" +
      "<p class='small', style = 'color:blue'><strong>Pink</strong></p></div>" +
  "</div>" +
  "<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: red; '><strong>Türkis</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: blue; '>" +
   "<p class='small'>  <strong>Rot</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:turquoise'><strong>Türkis</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: blue; '><strong>Schwarz</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: black; '>" +
   "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:darkgreen'><strong>Schwarz</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: darkorange; '><strong>Orange</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: darkorange; '>" +
   "<p class='small'>  <strong>Schwarz</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:darkorange'><strong>Orange</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: turquoise; '><strong>Gelb</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: gold; '>" +
   "<p class='small'>  <strong>Türkis</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:turquoise'><strong>Gelb</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: blueviolet; '><strong>Braun</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: darkorange; '>" +
   "<p class='small'>  <strong>Braun</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:darkorange'><strong>Blau</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: brown; '><strong>Grün</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: black; '>" +
   "<p class='small'>  <strong>Grün</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:darkgreen'><strong>Braun</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: green; '><strong>Lila</strong></p>" +
"<div style=';' class='sev'>" +
   "<div style='color: blueviolet; '>" +
   "<p class='small'>  <strong>Lila</strong>  </p>  </div>" +
   "<div class='float: right;'>" +
   "<p class='small', style = 'color:blueviolet'><strong>Grün</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: mediumvioletred; '><strong>Rot</strong></p>" +
"<div style=';' class='sev'>" +
"<div style='color: blue; '>" +
"<p class='small'>  <strong>Rot</strong>  </p>  </div>" +
"<div class='float: right;'>" +
"<p class='small', style = 'color:firebrick'><strong>Blau</strong></p></div>" +
"</div>" +
"<div> </div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong> ist </p>" +
"<div >" +
"<p class='big', style='color: brown; '><strong>Blau</strong></p>" +
"<div style=';' class='sev'>" +
"<div style='color: black; '>" +
"<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
"<div class='float: right;'>" +
"<p class='small', style = 'color:brown'><strong>Lila</strong></p></div>" +
"</div>" +
"<div> </div>" +
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
      return jsPsych.randomization.sampleWithoutReplacement([400, 600, 800], 1)[0];
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
  trial_duration: 500
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
      var accuracy_Exp1 = Math.round(correct_trials.count() / trials.count() * 100);
      var rt = Math.round(correct_trials.select('rt').mean());

      return "<p>Sie haben " + accuracy_Exp1 + "% der Aufgaben richtig beantwortet.</p>" +
          "<p style = 'margin-top: 100px'>Drücken Sie eine beliebige Taste, um fortzufahren!</p>";

  }
};
timeline.push(debrief_block);