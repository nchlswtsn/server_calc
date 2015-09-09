var http = require('http');

var PORT = 8000;

var server = http.createServer(function(req, res){

  var reqURL = req.url;
  var reqInfo = reqURL.split('/');

  if(reqInfo[1] === 'math'){
    if(reqInfo[2] === 'add'){
      var answer = Number(reqInfo[3]) + Number(reqInfo[4]);
      res.write("The result equals: " + answer);
      res.end();
    }
    else if(reqInfo[2] === 'subtract'){
      var answer = Number(reqInfo[3]) - Number(reqInfo[4]);
      res.write("The result equals: " + answer);
      res.end();
    }
    else if(reqInfo[2] === 'multiply'){
      var answer = Number(reqInfo[3]) * Number(reqInfo[4]);
      res.write("The result equals: " + answer);
      res.end();
    }
    else if(reqInfo[2] === 'divide'){
      var answer = Number(reqInfo[3]) / Number(reqInfo[4]);
      res.write("The result equals: " + answer);
      res.end();
    }
    else if(reqInfo[2] === 'power'){
      var answer = Math.pow(Number(reqInfo[3]), Number(reqInfo[4]));
      res.write("The result equals: " + answer);
      res.end();
    }
    else if(reqInfo[2] === 'squareroot'){
      var answer = Math.sqrt(Number(reqInfo[3]));
      res.write("The result equals: " + answer);
      res.end();
    }
    else{
      res.end("You done messed up!");
    }
  }


});

server.listen(PORT, function(){
  console.log('Server now listening on port ' + PORT + '!');
});
