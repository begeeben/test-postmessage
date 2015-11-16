window.addEventListener('message', function(e) {
  document.getElementById('message').innerHTML = e.data;
});
