window.addEventListener('message', function(e) {
  document.getElementById('message').innerHTML = event.data;
});
