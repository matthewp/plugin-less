var less = require('github:less/less.js');
var parser = new less.Parser();

var head = function(){
  var hd = document.getElementsByTagName('head')[0];
  if(!hd) {
    hd = document.createElement('head');
    document.insertBefore(hd, document.firstChild);
  }
  head = function(){
    return hd;
  };
  return hd;
};

module.exports = function(name, address, fetch, callback, errback) {
  fetch(address, function(src){
    parser.parse(src, function(err, rs){
      if(err) {
        return errback(err);
      }

      var css = rs.toCSS();
      var style = document.createElement('style');
      style.innerHTML = css;
      head().appendChild(style);
      callback();
    });
  }, errback);
}
