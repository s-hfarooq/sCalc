$(() => {

  $('#text-input').bind('input propertychange', function() {
    const text = this.value

    $('#usrOutput').text(text)
  })

  $('#text-input').focus() // focus input box
})
