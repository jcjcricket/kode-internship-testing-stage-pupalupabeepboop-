const getObjectProperty = (obj, path, defaultValue) => {
  if (typeof path !== 'string') {
    return new Error(
      `Incorrect parameters: ${path} must be a String`
    );
  }

  let list = path.split('.');
  let _obj = obj;
  (function cycle() {
    if (list.length === 0) return _obj;
    _obj = _obj ? _obj[list[0]] : undefined;
    list.shift();
    cycle();
  })();
  if (_obj) {
    return _obj;
  } else if (defaultValue) {
    return defaultValue;
  } else {
    return undefined;
  }
};

obj = {
  pupa: {
    lupa: {
      beep: 'boop',
    },
    foo: 'bar',
  },
};
