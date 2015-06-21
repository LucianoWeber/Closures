function registerHandlers() {
  var as = document.getElementsByTagName('a');
  //made the loop variables more explicit
  for (i = as.length-1; i >=0; i--) {
    var x = i;
    as[x].onclick = function() {
      alert(x);
      return false;
    }
  }
}