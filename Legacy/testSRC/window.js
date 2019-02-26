//Takes user input and preforms some functions on it
function test(text) {

  console.log(text);

  //Mirrors user input into output box
  $('#usrOutput').text(text);

  //Takes input and splits it by newline - each line can have it's own command
  var inputStr = text;
  var stringArray = inputStr.split(/\r?\n/);

  //Array containing full output
  var finalText = new Array();

  //Finds commands wanted for each line, gets custom output based what the user wants
  for(var i = 0; stringArray.length > i; i++) {
    //Finds first word of line to know what command to use
    const strArr = stringArray[i];

    //Splits line into array by spaces
    const lineWrds = strArr.split(" ");
    var firstWord = lineWrds[0];

    //Preforms basic math or graphing - defaults to mirroring user input
    if(firstWord.toUpperCase() == "MATH") {
      var result = lineWrds[1];
      console.log("result: " + result);
      finalAns = math.eval(result);
    } else if(firstWord.toUpperCase() == "GRAPH") {
      var eqGraph = lineWrds[1];
      if(eqGraph.includes("x")) {
        finalAns = "See Below:";
        draw(eqGraph[1]);
      } else {
        finalAns = stringArray[i];
      }
    } else if (firstWord.toUpperCase() == "PARSE") {
      finalAns = "Parsing unavailable in this version.";
    } else {
      finalAns = stringArray[i];
    }

    finalText[i] = finalAns;
  }

  //Takes finalText array, converts to string, then splits each element into a newline
  var finalTextStr = finalText.toString().split(",").join("\n");
  $('#usrOutput').text(finalTextStr);
}

function draw(inputVal) {
  try {
    //compile the expression once
    const expression = inputVal
    const expr = math.compile(expression)

    //evaluate the expression repeatedly for different values of x
    const xValues = math.range(-10, 10, 0.5).toArray()
    const yValues = xValues.map(function (x) {
      return expr.eval({x: x})
    })

    //render the plot using plotly
    const trace1 = {
      x: xValues,
      y: yValues,
      type: 'scatter'
    }
    const data = [trace1]
    Plotly.newPlot('plot', data)
  }
  catch (err) {
    console.error(err)
    alert(err)
  }
}

$('#text-input').focus() // focus input box
