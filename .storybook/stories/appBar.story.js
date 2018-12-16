import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme';
import withTwitterTheme from '../decorators/withTwitterTheme';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';

import Notification from '@material-ui/icons/Notifications';
import Help from '@material-ui/icons/Help';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Mail from '@material-ui/icons/Mail';

import { THEMES } from '../hierarchySeparators';

import atoms from 'components/atoms';

const { Toolbar, Typography, Icon, IconButton, Badge } = atoms;

storiesOf(`${THEMES.TWITTER}|App Bar`, module)
  .addDecorator(withRelativeParent({ minWidth: 1200, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('Default', () => (
    <AppBar
      position={select(
        'position',
        ['fixed', 'absolute', 'static', 'sticky', 'relative'],
        'fixed'
      )}
      color={'default'}
      elevation={select('elevation', [0, 1, 2, 3, 4, 5, 6, 7, 8], 1)}
    >
      <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
        <Grid container alignItems={'center'} spacing={32}>
          <Grid item xs={4} className={'grid__item--left'}>
            <Tabs value={0} fullWidth>
              <Tab
                icon={
                  <Badge className={'badge--dotted'} badgeContent={''}>
                    <Home />
                  </Badge>
                }
                classes={{ wrapper: 'tab__icon' }}
                disableRipple
              />
              <Tab
                icon={<Search />}
                classes={{ wrapper: 'tab__icon' }}
                disableRipple
              />
              <Tab
                icon={
                  <Badge className={'badge--number'} badgeContent={2}>
                    <Notification />
                  </Badge>
                }
                classes={{ wrapper: 'tab__icon' }}
                disableRipple
              />
              <Tab
                icon={<Mail />}
                classes={{ wrapper: 'tab__icon' }}
                disableRipple
              />
            </Tabs>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder={'Find Tweets'}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item className={'grid__item--right'}>
            <FontAwesomeIcon icon={['far', 'compass']} />
            <FontAwesomeIcon icon={['far', 'heart']} />
            <FontAwesomeIcon icon={['far', 'user']} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ));

storiesOf(`${THEMES.INSTAGRAM}|App Bar`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withInstagramTheme)
  .addWithJSX('Default', () => (
    <AppBar
      position={select(
        'position',
        ['fixed', 'absolute', 'static', 'sticky', 'relative'],
        'fixed'
      )}
      color={'default'}
      elevation={select('elevation', [0, 1, 2, 3, 4, 5, 6, 7, 8], 0)}
    >
      <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
        <Grid container alignItems={'center'}>
          <Grid item xs className={'grid__item--left'}>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <div className={'divider--vertical'} />
            <img
              className={'image__instagram-label'}
              src={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
              }
            />
          </Grid>
          <Grid item>
            <TextField
              variant={'outlined'}
              placeholder={'Search'}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs className={'grid__item--right'}>
            <FontAwesomeIcon icon={['far', 'compass']} />
            <FontAwesomeIcon icon={['far', 'heart']} />
            <FontAwesomeIcon icon={['far', 'user']} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ));

storiesOf(`${THEMES.FIRE_BASE}|App Bar`, module)
  .addDecorator(withRelativeParent({ minWidth: 960, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Default', () => (
    <AppBar
      position={select(
        'position',
        ['fixed', 'absolute', 'static', 'sticky', 'relative'],
        'fixed'
      )}
      color={'default'}
      elevation={select('elevation', [0, 1, 2, 3, 4, 5, 6, 7, 8], 2)}
    >
      <Toolbar narrow>
        <Grid container spacing={16} justify={'center'} alignItems={'center'}>
          <Grid item>
            <Typography color={'textSecondary'} inline>
              You're viewing the Firebase demo project.
            </Typography>{' '}
            <Typography link>Learn more</Typography>
          </Grid>
          <Grid item>
            <Button variant={'contained'} color={'primary'}>
              Create a project
            </Button>
          </Grid>
          <Grid item>
            <Button>Exit demo</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ))
  .addWithJSX('Primary', () => (
    <AppBar
      color={'primary'}
      position={select(
        'position',
        ['fixed', 'absolute', 'static', 'sticky', 'relative'],
        'fixed'
      )}
      elevation={select('elevation', [0, 1, 2, 3, 4, 5, 6, 7, 8], 0)}
    >
      <Toolbar narrow>
        <Grid container spacing={16} justify={'flex-end'} alignItems={'center'}>
          <Grid item>
            <Typography linkInverted>Go to docs</Typography>
          </Grid>
          <Grid item>
            <Badge dotted badgeContent={''}>
              <Icon linkInverted>notifications</Icon>
            </Badge>
          </Grid>
          <Grid item>
            <Tooltip
              title={
                <React.Fragment>
                  <Typography inverted>Google account</Typography>
                  <Typography inverted light>
                    siriwatkunaporn@gmail.com
                  </Typography>
                </React.Fragment>
              }
            >
              <IconButton noPad>
                <Avatar small src={'http://i.pravatar.cc/300'} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ))
  .addWithJSX('Stack', () => (
    <React.Fragment>
      <AppBar position={'relative'} color={'default'} elevation={2}>
        <Toolbar narrow>
          <Grid container spacing={16} justify={'center'} alignItems={'center'}>
            <Grid item>
              <Typography color={'textSecondary'} inline>
                You're viewing the Firebase demo project.
              </Typography>{' '}
              <Typography link>Learn more</Typography>
            </Grid>
            <Grid item>
              <Button variant={'contained'} color={'primary'}>
                Create a project
              </Button>
            </Grid>
            <Grid item>
              <Button>Exit demo</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar color={'primary'} position={'static'} elevation={0}>
        <Toolbar narrow>
          <Grid
            container
            spacing={16}
            justify={'flex-end'}
            alignItems={'center'}
          >
            <Grid item>
              <Typography linkInverted>Go to docs</Typography>
            </Grid>
            <Grid item>
              <Tooltip title={'Firebase alerts - New alerts'}>
                <Badge dotted badgeContent={''}>
                  <Icon linkInverted>notifications</Icon>
                </Badge>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                title={
                  <React.Fragment>
                    <Typography inverted>Google account</Typography>
                    <Typography inverted light>
                      siriwatkunaporn@gmail.com
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton noPad>
                  <Avatar small src={'http://i.pravatar.cc/300'} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar color={'primary'} position={'static'} elevation={0}>
        <Toolbar narrow>
          <Grid
            container
            spacing={16}
            justify={'space-between'}
            alignItems={'center'}
          >
            <Grid item>
              <Typography gutterBottom color={'inherit'} variant={'h5'}>
                Storage
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title={'Help'}>
                <IconButton
                  separated
                  linkInverted
                >
                  <Icon front>help</Icon>
                  <Icon caret>arrow_drop_down</Icon>
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ));
