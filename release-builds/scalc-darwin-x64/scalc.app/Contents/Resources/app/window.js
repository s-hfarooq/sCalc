$(() => {

  //Takes user input and preforms some functions on it
  $('#text-input').bind('input propertychange', function() {
    const text = this.value
    //Mirrors user input into output box
    $('#usrOutput').text(text)


    //Takes input and figues out what command is asked for
    var inputStr = text;
    var stringArray = inputStr.split(/\r?\n/);
    console.warn("LINE SPLIT: " + stringArray)


    const strArr = stringArray[0];
    var firstWord = strArr.replace(/ .*/,'');

    console.warn("FIRST WORD: " + firstWord);

    //Preforms basic math if asked for by user
    if(firstWord == "math")
    {
      console.error("IT WORKED");
      var result = strArr.match(/\((.*)\)/);
      console.warn("RESULT: "+result);
      finalAns = math.eval(result[1]);
      console.warn("FINAL ANS: "+finalAns);
      $('#usrOutput').text(finalAns);
    }

  })



  $('#text-input').focus() // focus input box
})
