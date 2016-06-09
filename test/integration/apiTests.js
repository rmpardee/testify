describe('API integration', function(){
  var server, setupStub, JSONresponse;

  // RMP: Adding before and after for sinon fake server
  beforeEach(function() {
    // set up the fake server
    server = sinon.fakeServer.create();
    // make up whatever we want our server to respond with
    JSONresponse = JSON.stringify({
      "todos": []
    });
    // have the server respond to any resquest with this response, and respond synchronously when called
    server.respondWith('GET', 'http://localhost:3000/todos', JSONresponse);
    // RMP: Attempting to use the below response for the final test (not working) at the end
    // server.respondWith('POST', 'http://localhost:3000/todos', [404, {}, "failed post"]);

    // server.respondImmediately = true;

    // stub the setup method in the todo object (make it so it is not run)
    setupStub = sinon.stub(todo, 'setup');

  });

  afterEach(function() {
    // restore the server and the stubbed method back to its original state
    server.restore();
    // RMP: Jamil and I were unclear which of the below it should be
    // setupStub.restore();
    todo.setup.restore();
  });


  it('todo.setup receives an array of todos when todo.init is called', function () {
    // call todo.init (with no parameters, so NOT in debug mode). It should therefore call todo.setup (which is our stubbed fn, so it won't run)
    todo.init();
    // check that todo.init is passing in an array to our stub fn (it should be passing in our JSONresponse.todos)
    server.respond();
    sinon.assert.calledWith(setupStub, sinon.match.array);
  });

  // RMP: Couldn't get the console.logs on lines 46 + 47 to ever run (didn't seem to get inside the callback ever)
  // it('todo.api.sendRequest should return an error when it gets a 404', function() {
  //   var invalidOptions = {
  //     method: 'POST',
  //     endpoint: 'http://localhost:3000/todos'
  //   };
  //   todo.api.sendRequest(invalidOptions, function(err, res) {
  //     console.log("err inside sendRequest call: ", err);
  //     console.log("res inside sendRequest call: ", res);
  //     expect(err).to.exist;
  //   });
  //   server.respond();
  // });
});
