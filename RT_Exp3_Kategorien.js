
/* Change 1: Adding the image hosting site */
// define the site that hosts stimuli images
// usually https://<your-github-username>.github.io/<your-experiment-name>/
var repo_site = "https://LoPu8.github.io/RT/"; 

/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome_block = {
    type: "html-keyboard-response",
    stimulus: "<p> Sie haben erfolgreich den zweiten Experiment-Block beendet. </p>" +
        "<p> Sie beginnen nun den dritten Block.  </p> " +
        "<p style = 'margin-bottom: 50px'> Die Aufgabe für diesen Block ist leicht anders: Bitte wählen Sie das Objekt aus, was zu einer <strong>unterschiedlichen Kategorie</strong> gehört als das Wort in der Mitte.</p>" +
        "<div >" +
        "<p class='big', style='color: black; '><strong>Apfel</strong></p>" +
        "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Banane</strong></p></div>" +
        "</div>" +
        "<p style = 'margin-top: 50px'> In diesem Beispiel gehört das linke Wort zu einer anderen Kategorie (Farben) als die Kategorie in der Mitte und rechts (Früchte). Daher <strong> drücken Sie bitte F auf der Tastatur.</strong>  </p>" +
      "<p style = 'margin-top: 100px'>Drücken Sie die Taste F um zu beginnen.</p>" +
      "</div>"      
};
timeline.push(welcome_block);


  var test_stimuli = [
    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was einer <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
         "<p class='big', style='color: black; '><strong>Apfel</strong></p>" +
         "<div style=';' class='sev'>" +
            "<div style='color: black; '>" +
            "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
            "<div class='float: right;'>" +
            "<p class='small', style = 'color:black'><strong>Banane</strong></p></div>" +
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
  
    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Stuhl</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Wind</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Tisch</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Wind</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Bus</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Regen</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Kreis</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Tisch</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Dreieck</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Spaghetti</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Brot</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Kreis</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Grün</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Blau</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Spaghetti</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Auto</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Bus</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Banane</strong></p></div>" +
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

    { stimulus: "<p class = 'header'>Wählen Sie das Wort aus, was <strong>unterschiedlichen Kategorie</strong> angehört </p>" +
      "<div >" +
      "<p class='big', style='color: black; '><strong>Affe</strong></p>" +
      "<div style=';' class='sev'>" +
         "<div style='color: black; '>" +
         "<p class='small'>  <strong>Elefant</strong>  </p>  </div>" +
         "<div class='float: right;'>" +
         "<p class='small', style = 'color:black'><strong>Auto</strong></p></div>" +
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
        var accuracy_Exp3 = Math.round(correct_trials.count() / trials.count() * 100);
        var rt_Test2 = Math.round(correct_trials.select('rt').mean());

        return "<p>Sie haben " + accuracy_Exp3 + "% der Trials richtig beantwortet.</p>" +
        "<p style = 'margin-top: 100px'>Drücken Sie irgendeine Taste, um fortzufahren!</p>";

    }
};
timeline.push(debrief_block);