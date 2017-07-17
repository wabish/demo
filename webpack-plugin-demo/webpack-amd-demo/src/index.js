require(['./cat.js'], function(cat) {
  var txt = cat.sayHello();
  document.getElementById('main').innerHTML = txt;
});