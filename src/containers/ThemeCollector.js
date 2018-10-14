import React from 'react';
import PropTypes from 'prop-types';
import { Activator } from 'react-high-order';
import { css } from 'react-emotion';
import { compose, withState, withProps } from 'recompose';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import RTDBFactory from '../firebase/clientApi';

const fieldStyle = css({
  minWidth: 250,
});

const ThemeCollector = compose(
  withState('name', 'setName', ''),
  withProps(({ name, themes, currentTheme, onSuccess }) => ({
    isConflict: !!themes[name],
    saveTheme: () => {
      // console.log('currentTheme', currentTheme);
      const dbApi = RTDBFactory('/themes');
      return dbApi
        .insert(name, currentTheme)
        .then(() => onSuccess({ ...themes, [name]: currentTheme }));
    },
  }))
)(({ isConflict, name, setName, saveTheme }) => (
  <Activator resetAfterAction>
    {({ activate, active, reset, decorate }) => (
      <React.Fragment>
        <Button color={'secondary'} onClick={() => activate(true)}>
          Save Theme
        </Button>
        <Dialog open={active} onClose={reset}>
          <DialogTitle>Save New Theme</DialogTitle>
          <DialogContent>
            <TextField
              className={fieldStyle}
              value={name}
              onChange={e => setName(e.target.value)}
              helperText={isConflict ? 'This name has already taken' : ''}
              id="filled-helperText"
              label="Theme Name"
              variant="filled"
            />
          </DialogContent>
          <DialogActions style={{ margin: '5px 24px 24px' }}>
            <Button color={'primary'} variant={'outlined'} onClick={reset}>
              Cancel
            </Button>
            <Button
              color={'primary'}
              variant={'contained'}
              onClick={decorate(saveTheme)}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )}
  </Activator>
));

ThemeCollector.propTypes = {
  onSuccess: PropTypes.func,
  currentTheme: PropTypes.shape({}).isRequired,
  themes: PropTypes.shape({}).isRequired,
};
ThemeCollector.defaultProps = {
  onSuccess: () => {},
};
ThemeCollector.displayName = 'ThemeCollector';

export default ThemeCollector;
