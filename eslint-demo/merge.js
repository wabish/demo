function merge() {
  var ret = {};
  for (var i in arguments) {
    var m = arguments[i];
    for (var j in m) ret[j] = m[j];
  }
  return ret;
}

// 人类
var person = {
  name: 'cobish',
  age: 20
};

if (person.age === 20) {
  person.age = 40;
}

console.log(person);
console.log(merge({a: 123}, {b: 456}));