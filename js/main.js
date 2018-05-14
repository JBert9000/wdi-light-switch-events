// docoment.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('button');
  button.addEventListener('click', function() {
    if (document.querySelector('button').className = 'switch on') {
      switchOff();
    } else {
      switchOn();
    }
  });

  function switchOff() {
    document.querySelector('button').className = 'switch off'
    document.querySelector('body').className = 'dark'
    document.querySelector('.status').innerText = "who turned off the lights?"
  };

  function switchOn() {
    document.querySelector('button').className = 'switch on'
    document.querySelector('body').className = 'light'
    document.querySelector('.status').innerText = "why is it so bright in here?"
  }

// });
