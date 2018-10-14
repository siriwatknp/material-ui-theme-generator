import mapValues from 'lodash/mapValues';
import toArray from 'lodash/toArray';
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withProps } from 'recompose';
import { css } from 'react-emotion';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import muiTheme from '../theme/muiTheme';

const style = css({
  // use && to increase order than mui
  '&&': {
    minWidth: 150,
  },
});

const ThemeSelector = compose(
  withState('currentTheme', 'setCurrentTheme', 'default'),
  withProps(({ themes, setCurrentTheme, onChange }) => ({
    toThemeList: t =>
      toArray(mapValues(t, (val, key) => ({ ...val, id: key }))),
    onChangeTheme: e => {
      const themeName = e.target.value;
      setCurrentTheme(themeName);
      onChange(themeName === 'default' ? muiTheme : themes[themeName]);
    },
  }))
)(({ currentTheme, themes, toThemeList, onChangeTheme }) => {
  const themeList = toThemeList(themes);
  return (
    <FormControl className={style}>
      <InputLabel htmlFor="theme-selector">Choose Theme</InputLabel>
      <Select value={currentTheme} onChange={onChangeTheme}>
        <MenuItem value={'default'}>Default</MenuItem>
        {themeList.map(({ id }) => (
          <MenuItem key={id} value={id}>
            {id}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

ThemeSelector.propTypes = {
  themes: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
ThemeSelector.defaultProps = {};
ThemeSelector.displayName = 'ThemeSelector';

export default ThemeSelector;
