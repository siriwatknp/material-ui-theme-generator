import isString from 'lodash/isString';
import startCase from 'lodash/startCase';
import reduce from 'lodash/reduce';
import isPlainObject from 'lodash/isPlainObject';

const convertToMuiClass = bem => {
  if (!isString(bem)) {
    throw new Error('convertToMuiClass: parameter must be a string');
  }
  // bem format
  // full: BLOCK__ELEMENT--MODIFIER
  // partial: BLOCK--MODIFIER

  // separate MODIFIER
  const [main, modifier = ''] = bem.split('--');
  const muiClass = startCase(main).replace(' ', '');
  return `Mui${muiClass}--${modifier}`;
};

const transformValue = (predicate, callback) => obj =>
  reduce(
    obj,
    (result, val, key) => {
      console.log('result', result);
      console.log('val', val);
      console.log('key', key);
      if (isPlainObject(val)) {
        return {
          ...result,
          [key]: transformValue(predicate, callback)(val),
        };
      }
      if (predicate(val)) {
        return {
          ...result,
          [key]: callback(val),
        };
      }
      return result;
    },
    obj
  );

export default transformValue(isString, convertToMuiClass);
