
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> Im ersten Teil der Studie werden Sie einige Wörter sehen. Ihre Aufgabe ist es, bestimmte Worte auszuwählen. </p>" +
        "<p> Im zweiten Teil werden wir Ihnen ein paar Fragen stellen über Ihre Wahrnehmung von politischen Ereignissen. </p> " +
        "<p> </p>" +
        "<p> </p>" +
        "<p style = 'margin-top: 100px'> Klicken Sie irgendeine Taste, um fortzufahren. </p> "        
};
timeline.push(welcome_block);

/* define instructions trial */
var instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>Auf den folgenden Seiten werden Sie jeweils drei Wörter sehen. " +
        "Ein großes Wort in der Mitte, und zwei kleinere links und rechts.</p>" +
        "<p> Ihre Aufgabe ist, das Wort auszuwählen was von den Buchstaben her <strong>unterschiedlich</strong> ist im Vergleich zu dem Wort in der Mitte. </p>"+ 
        "<p> Wenn das <strong>linke</strong> Wort (vom Text her) unterschiedlich ist im Vergleich zu dem Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>F</strong> auf der Tastatur." +
        "Wenn das <strong>rechte</strong> Wort (vom Text her) unterschiedlich ist im Vergleich zu dem Wort in der Mitte, drücken Sie bitte den Buchstaben <strong>J</strong>.</p>" +
        " <p style = 'margin-bottom: 50px'><strong> Die Aufgabe ist dieselbe für alle kommenden Trials. </strong></p> " +
        "<div >" +
          "<p class='big', style='color: black; '><strong>Gelb</strong></p>" +
          "<div style=';' class='sev'>" +
           "<div style='color: red; '>" +
           "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
           "<div class='float: right;'>" +
           "<p class='small', style = 'color:blue'><strong>Gelb</strong></p></div>" +
          "</div>" +
     "<p style = 'margin-top: 50px'> In diesem Beispiel ist das linke Wort unterschiedlich im Vergleich zu dem in der Mitte. Daher <strong> drücken Sie bitte F auf der Tastatur.</strong> </p>" +
        "<p style = 'margin-top: 100px'>Drücken Sie die Taste F um zu beginnen.</p>" +
        "</div>" 
        ,
    post_trial_gap: 500
};
timeline.push(instructions1);


var instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>Zunächst sehen Sie 16 Trials (Aufgaben) zum Üben. Nach jedem Trial kriegen Sie eine Rückmeldung, ob die Antwort richtig ist oder nicht." +
        "<strong> Sie müssen mindestens 80% richtig beantworten, um zum nächsten Teil des Experiments zu gelangen</strong>, das heißt es ist wichtiger, korrekt zu antworten als sich zu beeilen.</p>" +
        "<p> </p>" + 
        "<p style = 'margin-top: 100px'> Wenn Sie bereit sind, drücken Sie irgendeine Taste, um zu beginnen.</p>",
    post_trial_gap: 2000
};
timeline.push(instructions2);


  var test_stimuli = [
    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'f'
    }
  },
  
  { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'f'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'f'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'f'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'j'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'j'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
      correct_response: 'j'
    }
  },

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlich</strong></p>" +
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
        return "<div class = centerbox><div style='color:green'; class = center-text> <p style= 'font-size: 2em'>Richtig!</p></div></div>"; // the parameter value has to be returned from the function
      } else {
        return "<div class = centerbox><div style='color:red'; class = center-text> <p style= 'font-size: 2em'>Falsch!</p></div></div>"; // the parameter value has to be returned from the function
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

        return "<p>Sie haben " + accuracy_Test1 + "% der Trials richtig beantwortet.</p>" +
            "<p style = 'margin-top: 100px'>Drücken Sie irgendeine Taste, um fortzufahren!</p>";

    }
};
timeline.push(debrief_block);