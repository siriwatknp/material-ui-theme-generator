import React from 'react';
import ReactJson from 'react-json-view';
import { compose, withState, withProps } from 'recompose';
import { css } from 'react-emotion';
import JssProvider from 'react-jss/lib/JssProvider';

// COMPONENTS
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Block from 'components/Block';

// ICONS
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// CONTAINERS
import ThemeController from 'containers/ThemeController';

// SECTIONS
import Atoms from 'components/atoms';
import Molecules from 'components/molecules';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import muiTheme from 'theme/muiTheme';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

const headingStyle = css({
  fontSize: 18,
  fontWeight: 500,
});

const panelStyle = css({
  minHeight: '100vh',
  position: 'sticky',
  top: 0,
  '.body': {
    maxHeight: 'calc(100vh - 81px)',
    overflow: 'scroll',
    background: '#f5f5f5',
  },
});

const App = compose(
  withState('theme', 'setTheme', muiTheme),
  withProps(({ setTheme }) => ({
    onUpdate: ({ updated_src: updatedSrc }) => {
      setTheme(updatedSrc);
      return true;
    },
  }))
)(({ theme, onUpdate, setTheme }) => (
  <Grid container>
    {/*<Grid item xs={0}>*/}
    {/*<Paper style={{ position: 'relative' }}>*/}
    {/*<Block.Flex flexDirection={'column'} className={panelStyle}>*/}
    {/*<ThemeController currentTheme={theme} onChange={setTheme} />*/}
    {/*<Block p={20} flex={1} className={'body'}>*/}
    {/*<ReactJson*/}
    {/*src={theme}*/}
    {/*onEdit={onUpdate}*/}
    {/*onAdd={onUpdate}*/}
    {/*onDelete={onUpdate}*/}
    {/*/>*/}
    {/*</Block>*/}
    {/*</Block.Flex>*/}
    {/*</Paper>*/}
    {/*</Grid>*/}
    <Grid item xs={12}>
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <Block height={'100%'} background={'#f5f5f5'}>
            <AppBar position={'static'}>
              <Toolbar>
                <Typography variant={'h6'} color={'inherit'}>
                  Components Preview
                </Typography>
              </Toolbar>
            </AppBar>
            <Block p={24}>
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant={'h6'} className={headingStyle}>
                    ATOMS
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Atoms />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant={'h6'} className={headingStyle}>
                    Molecules
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Molecules />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Block>
          </Block>
        </MuiThemeProvider>
      </JssProvider>
    </Grid>
  </Grid>
));

export default App;
