document.getElementById('open').addEventListener('click', function () {
  var domain = 'http://begeeben.github.io';
  var receiver = window.open(domain + '/test-postmessage/receiver.html', 'receiver window');

  var btn = document.getElementById('send');

  function sendMessage(e) {
    e.preventDefault();
//     console.log(JSON.stringify(receiver));
    receiver.postMessage('Hello World', domain);
  }

  btn.addEventListener('click', sendMessage);

});
