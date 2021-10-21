
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> Leider haben Sie weniger als 80% der Aufgaben richtig beantwortet. </p>" +
        "<p> Sie werden nun die Aufgabenstellung noch einmal sehen und bekommen dann weitere Übungsaufgaben.</p> " +
        "<p> Bitte lesen Sie die Aufgabenstellung aufmerksam durch.</p>" +
        "<p> </p>" +
        "<p style = 'margin-top: 100px'>  Drücken Sie eine beliebige Taste, um fortzufahren. </p> "        
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions1 = {
  type: "html-keyboard-response",
  stimulus: "<p>Auf den folgenden Seiten werden Sie jeweils drei Wörter sehen. " +
      "Ein großes Wort in der Mitte, und zwei kleinere links und rechts.</p>" +
      "<p> Ihre Aufgabe ist, das Wort auszuwählen was von den Buchstaben her <strong>gleich</strong> ist wie das Wort in der Mitte. </p>"+ 
      "<p> Wenn das <strong>linke</strong> Wort (vom Text her) gleich ist wie das Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>f</strong> auf der Tastatur." +
      "Wenn das <strong>rechte</strong> Wort (vom Text her) gleich ist wie das Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>j</strong>.</p>" +
      " <p style = 'margin-bottom: 50px'><strong> Die Aufgabe ist dieselbe für alle kommenden Durchgänge. </strong></p> " +
      "<div >" +
        "<p class='big', style='color: black; '><strong>Gelb</strong></p>" +
        "<div style=';' class='sev'>" +
         "<div style='color: red; '>" +
         "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:blue'><strong>Gelb</strong></p></div>" +
        "</div>" +
   "<p style = 'margin-top: 50px'> In diesem Beispiel ist das rechte Wort gleich wie das Wort in der Mitte. Daher <strong> drücken Sie bitte j auf der Tastatur.</strong> </p>" +
      "<p style = 'margin-top: 100px'>Drücken Sie die Taste j um zu beginnen.</p>" +
      "</div>" 
      ,
  post_trial_gap: 500
};
timeline.push(instructions1);


var instructions2 = {
  type: "html-keyboard-response",
  stimulus: "<p>Sie sehen nun wiederum 8 Aufgaben zum Üben. Nach jeder Aufgabe kriegen Sie eine Rückmeldung, ob die Antwort richtig ist oder nicht." +
      "<strong> Sie sollten weiterhin mindestens 80% richtig beantworten </strong>, das heißt, es ist wichtiger, korrekt zu antworten, als sich zu beeilen.</p>" +
      "<p> </p>" + 
      "<p style = 'margin-top: 100px'> Wenn Sie bereit sind, drücken Sie eine beliebige Taste, um zu beginnen.</p>",
  post_trial_gap: 2000
};
timeline.push(instructions2);


var test_stimuli = [
  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
       "<p class='big', style='color: black; '><strong>Rot</strong></p>" +
       "<div style=';' class='sev'>" +
          "<div style='color: red; '>" +
          "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
          "<div class='float: right;'>" +
          "<p class='small', style = 'color:blue'><strong>Rot</strong></p></div>" +
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

{ stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: red; '><strong>Blau</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: blue; '>" +
       "<p class='small'>  <strong>Rot</strong>  </p>  </div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: blue; '><strong>Orange</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: orange; '>" +
       "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:green'><strong>Orange</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: orange; '><strong>Grün</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: green; '>" +
       "<p class='small'>  <strong>Schwarz</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:black'><strong>Grün</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: purple; '><strong>Braun</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: orange; '>" +
       "<p class='small'>  <strong>Braun</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:orange'><strong>Blau</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: brown; '><strong>Pink</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: black; '>" +
       "<p class='small'>  <strong>Pink</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:pink'><strong>Braun</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: green; '><strong>Lila</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: purple; '>" +
       "<p class='small'>  <strong>Lila</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:black'><strong>Grün</strong></p></div>" +
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

  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>gleich</strong> ist </p>" +
    "<div >" +
    "<p class='big', style='color: pink; '><strong>Schwarz</strong></p>" +
    "<div style=';' class='sev'>" +
       "<div style='color: blue; '>" +
       "<p class='small'>  <strong>Schwarz</strong>  </p>  </div>" +
       "<div class='float: right;'>" +
       "<p class='small', style = 'color:blue'><strong>Rot</strong></p></div>" +
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
  trial_duration: 16000,
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
      return "<div class = centerbox><div style='color:green'; class = center-text> <p style= 'font-size: 2em'>Richtig!</p></div></div>" +
      "<br>"+
      "<p> Drücken Sie eine beliebige Taste, um fortzufahren. </p>" 
       ; // the parameter value has to be returned from the function
    } else {
      return "<div class = centerbox><div style='color:red'; class = center-text> <p style= 'font-size: 2em'>Falsch!</p></div></div>" +
      "<br>"+
      "<p> Ihre Aufgabe ist, das Wort auszuwählen was von den Buchstaben her <strong>gleich</strong> ist wie das Wort in der Mitte. </p>"+ 
      "<p> Wenn das <strong>linke</strong> Wort (vom Text her) gleich ist wie das Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>f</strong> auf der Tastatur." +
      "Wenn das <strong>rechte</strong> Wort (vom Text her) gleich ist wie das Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>j</strong>.</p>" +
      "<br>" +
      "<br>" +
      "<div >" +
        "<p class='big', style='color: black; '><strong>Gelb</strong></p>" +
        "<div style=';' class='sev'>" +
         "<div style='color: red; '>" +
         "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:blue'><strong>Gelb</strong></p></div>" +
        "</div>" +
   "<p style = 'margin-top: 50px'> In diesem Beispiel ist das rechte Wort gleich wie das Wort in der Mitte. Daher <strong> drücken Sie bitte j auf der Tastatur.</strong> </p>" +
      "<p style = 'margin-top: 100px'>Drücken Sie eine beliebige Taste, um fortzufahren.</p>" +
      "</div>"  
      
      ; // the parameter value has to be returned from the function
    }
  },
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
      var accuracy_Test2 = Math.round(correct_trials.count() / trials.count() * 100);
      var rt = Math.round(correct_trials.select('rt').mean());

      return "<p>Sie haben " + accuracy_Test2 + "% der Aufgaben richtig beantwortet.</p>" +
          "<p style = 'margin-top: 100px'>Drücken Sie eine beliebige Taste, um fortzufahren!</p>";

  }
};
timeline.push(debrief_block);