$(() => {

  //Takes user input and preforms some functions on it
  $('#text-input').bind('input propertychange', function() {
    const text = this.value
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
      }
      else if(firstWord == "graph")
      {
        finalAns = "Graphing unavailable.";
      }
      else if (firstWord == "parse")
      {
        finalAns = "Parsing unavailable.";
      }
      else
      {
        finalAns = stringArray[i];
      }

      finalText[i] = finalAns;
    }

    //Takes finalText array, converts to string, then splits each element into a newline
    var finalText2 = finalText.toString().split(",").join("\n");
    $('#usrOutput').text(finalText2);
  })

  $('#text-input').focus() // focus input box
})
