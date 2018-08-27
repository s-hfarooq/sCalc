$(() => {

  //Takes user input and preforms some functions on it
  $('#text-input').bind('input propertychange', function() {

    var testDoc = document.getElementById("text-input").innerHTML;

    //Cleans input string
    testDoc = testDoc.replace(/&nbsp;/gi," ").replace("<div>", "\n").replace("</div>", "");

    var text = testDoc;
    //Mirrors user input into output box
    $('#usrOutput').text(text)


    //Takes input and splits it by newline - each line can have it's own command
    var inputStr = text;
    var stringArray = inputStr.split(/\r?\n/);

    //Array containing full output
    var finalText = new Array();

    //Finds commands wanted for each line, gets custom output based what the user wants
    for(var i = 0; stringArray.length > i; i++){

      //Finds first word of line to know what command to use
      const strArr = stringArray[i];
      var firstWord = strArr.replace(/ .*/,'');

      //Preforms basic math or graphing - defaults to mirroring user input
      if(firstWord == "math")
      {
        var result = strArr.match(/\((.*)\)/);
        finalAns = math.eval(result[1]);

        //Set color of text - I don't know why it needs to  be so confusing
        //Works, but only for one line then breaks everything else
        //$("div:contains('math')").each(function () {
        //  $(this).html($(this).html().replace("math", "<span class='mathCol'>math</span>"));
        //});

      }
      else if(firstWord == "graph")
      {
        //finalAns = "See below: ";
        g = document.createElement("div");
        g.setAttribute("graph", "Div1");
        var eqGraph = strArr.match(/\((.*)\)/);
        draw(eqGraph[1]);

        $("div:contains('graph')").each(function () {
          $(this).html($(this).html().replace("graph", "<span class='graphCol'>graph</span>"));
        });
      }
      else if (firstWord == "parse")
      {
        finalAns = "Parsing unavailable in this version.";

        $("div:contains('parse')").each(function () {
          $(this).html($(this).html().replace("parse", "<span class='parseCol'>parse</span>"));
        });
      }
      else
      {
        finalAns = stringArray[i];
      }

      finalText[i] = (i + 1) + ": " + finalAns;
    }

    //Takes finalText array, converts to string, then splits each element into a newline
    var finalText2 = finalText.toString().split(",").join("\n");

    document.getElementById('usrOutput').innerHTML = finalText2;
  })


  //Function for creating graphs
  function draw(inputVal) {
    try {
      // compile the expression once
      const expression = inputVal
      const expr = math.compile(expression)

      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(-10, 10, 0.5).toArray()
      const yValues = xValues.map(function (x) {
        return expr.eval({x: x})
      })

      // render the plot using plotly
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
})
