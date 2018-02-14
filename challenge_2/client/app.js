
var app = {};
var value;

$('button').on('click', (e) => {
  let userInput = $('#inputs').val();
  e.preventDefault();
  app.handleSubmit(userInput);
});

app.handleSubmit = (input) => {
    app.send(input);
    $('#inputs').val('');
};

//app initialization
app.init = () => {
  $('#text-box').on('submit', app.handleSubmit);
}

//AJAX request to send req to the server side
app.send = (input) => {
  $.ajax({
    type: 'POST',
    url: '/',
    data: input,
    // data: input,
    contentType: 'application/json',
    // contentType: 'application/json',
    success: (data) => {
      console.log('I got data bro', data);
      app.render(data);
    },
    error: (data) => {
      console.log("error", data);
    }
  });
  // $.post('/', input, (res) => {
  //   console.log('success', res);
  // });
  app.render = (array) => {
    //map thru the passed array and  append each to a new div tag on the dom
  }
}
