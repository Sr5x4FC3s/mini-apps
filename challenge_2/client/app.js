//this is where all the client code goes

//client needs to take a user input with the sales report example as an object
//flatten that object and be sent to the server
//rendered on the DOM as text and has a CSV report
//the input value will be a tree data structure
//and will have a "children" property

//we need to flatten the tree object:
//flatten will take in the user input
// var flatten = (input) => {
//   var
//   if (typeof input === 'object') {
//
//   }
// };
// var value = document.getElementById('inputs').value;
// console.log(value);
var app = {};
var value;
//store the user input from the DOM
// $('form').on('submit', function(e){
//   e.preventDefault();
// });

// app.userInput = () => {
//   // let value = document.getElementById('inputs').innerHTML.value;
//   // let value = $('#inputs').val();
//   value = $('#inputs').val();
//   $('#inputs').val('');
//   console.log(value);
// };

$('button').on('click', (e) => {
  e.preventDefault();
  app.handleSubmit();
});


app.handleSubmit = () => {
  let userInput = $('#inputs').val();
  console.log(userInput);
  // $('button').on('click', (e) => {
  //   e.preventDefault();
    // app.userInput();
    app.send(userInput);
    console.log('i was clicked', userInput);
    $('#inputs').val('');
  // });
  // $('#inputs').val('');
  // app.send(userInput);
  // $('#inputs').val('');
};

//app initialization
app.init = () => {
  // app.userInput();
  // app.handleSubmit();
  // app.send(value);
  $('#text-box').on('submit', app.handleSubmit);
}

//AJAX request to send req to the server side
app.send = (input) => {
  console.log('i was invoked', input);
  $.ajax({
    type: 'POST',
    url: '/',
    data: input,
    contentType: 'application/json',
    success: (data) => {
      console.log('I got data bro', data);
    },
    error: (data) => {
      console.log("error", data);
    }
  });
}
