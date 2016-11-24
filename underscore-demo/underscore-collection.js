(function() {
  
  var root = this;

  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  var
    push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

  var
    nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeBind = FuncProto.bind,
    nativeCreate = Object.create;

  var _ = function(obj) {
  };

  root._ = _;

  var optimizeCb = function(func, context) {
    if (context === void 0) return func;
    
    return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    }
  };

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  _.each = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;

    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }

    return obj;
  };

  _.map = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);

    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }

    return results;
  };

  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) {
      if (_.has(obj, key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

}.call(this));