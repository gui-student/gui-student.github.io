// username: gui-student
// See README.md in the Blackboard .zip folder
// Sources: https://www.w3schools.com

$(document).ready(function(){
    $("form[name='input']").validate({
      rules: {
        xBegin: {
            required: true,
            min: -50,
            max: 50,
            number: true,
            integer: true,
        },
        xEnd: {
            required: true,
            min: -50,
            max: 50,
            number: true,
            integer: true,
        },
        yBegin: {
            required: true,
            min: -50,
            max: 50,
            number: true,
            integer: true,
        },
        yEnd: {
            required: true,
            min: -50,
            max: 50,
            number: true,
            integer: true,
        },
      },
      messages: {
          xBegin: {
              required: "No input given. Please enter an integer value between -50 and 50.",
              min: "Please enter an integer value between -50 and 50.",
              max: "Please enter an integer value between -50 and 50. ",
              number: "Please enter an integer value between -50 and 50.",
              integer: "Please enter an integer value between -50 and 50.",
          },
          xEnd: {
              required: "No input given. Please enter an integer value between -50 and 50.",
              min: "Please enter an integer value between -50 and 50.",
              max: "Please enter an integer value between -50 and 50. ",
              number: "Please enter an integer value between -50 and 50.",
              integer: "Please enter an integer value between -50 and 50.",
           },
          yBegin: {
              required: "No input given. Please enter an integer value between -50 and 50.",
              min: "Please enter an integer value between -50 and 50.",
              max: "Please enter an integer value between -50 and 50. ",
              number: "Please enter an integer value between -50 and 50.",
              integer: "Please enter an integer value between -50 and 50.",
          },
          yEnd: {
              required: "No input given. Please enter an integer value between -50 and 50.",
              min: "Please enter an integer value between -50 and 50.",
              max: "Please enter an integer value between -50 and 50. ",
              number: "Please enter an integer value between -50 and 50.",
              integer: "Please enter an integer value between -50 and 50.",
          },
      },
    submitHandler: function(form) {
        generateTable();
      }
    });
  });
