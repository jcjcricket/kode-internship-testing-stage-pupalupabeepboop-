const getObjectProperty = (obj, path, defaultValue) => {
  if (typeof path !== 'string') {
    return new Error(
      `Incorrect parameters: ${path} must be a String`
    );
  }
  const list = path.split('.');
  let _obj = obj;

  for (let index = 0; index < list.length; index++) {
    _obj = _obj ? _obj[list[index]] : undefined;
  }
  if (_obj) {
    return _obj;
  } else if (defaultValue) {
    return defaultValue;
  } else {
    return undefined;
  }
};

const obj = {
  pupa: {
    lupa: {
      beep: 'boop',
    },
    foo: 'bar',
  },
};

getObjectProperty(obj, 'pupa.lupa');

