define(function() {
  var cat = {
    name: 'tom',
    sayHello: function() {
      return 'Hi, My name is ' + this.name;
    }
  };

  return cat;
});