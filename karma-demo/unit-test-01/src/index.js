function isNum (num) {
  if (num === 1) {
    console.log(num);
  } else {
    console.log(num);
  }

  return typeof num === 'number';
}

function isString (str) {
  return typeof str === 'string';
}

export default {
  isNum,
  isString
}