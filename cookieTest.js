document.cookie = "test1=lol";
document.cookie = "test2=lol2";
(function() {
  var secret = "supersecretAPIkey";
  window.globalFunction(secret);
})();
