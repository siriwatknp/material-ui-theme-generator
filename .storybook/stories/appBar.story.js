import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import Badge from '@material-ui/core/Badge'

import Notification from '@material-ui/icons/Notifications'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Help from '@material-ui/icons/Help'

import { THEMES } from '../hierarchySeparators';

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
      <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
        <Grid container spacing={16} justify={'center'} alignItems={'center'}>
          <Grid item>
            <Typography className={'text--line'} color={'textSecondary'}>
              You're viewing the Firebase demo project.
            </Typography>{' '}
            <Typography className={'text--link'}>Learn more</Typography>
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
      <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
        <Grid container spacing={16} justify={'flex-end'} alignItems={'center'}>
          <Grid item>
            <Typography className={'text--link-inverted'}>Go to docs</Typography>
          </Grid>
          <Grid item>
            <Badge className={'badge--dotted'} badgeContent={''}>
              <Notification className={'icon--link-inverted'} />
            </Badge>
          </Grid>
          <Grid item>
            <Tooltip
              title={(
                <React.Fragment>
                  <Typography className={'text--inverted'}>Google account</Typography>
                  <Typography className={'text--inverted text--light'}>siriwatkunaporn@gmail.com</Typography>
                </React.Fragment>
              )}
            >
              <IconButton className={'icon-button--no-pad'}>
                <Avatar className={'avatar--small'} src={'https://lh3.googleusercontent.com/-mYNSKSzYGjw/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iqjXfnyDj9JzvyoC6QVVqJUyEXNA/s64-c-mo/photo.jpg'} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  ))
  .addWithJSX('Stack', () => (
    <React.Fragment>
      <AppBar
        position={'relative'}
        color={'default'}
        elevation={2}
      >
        <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
          <Grid container spacing={16} justify={'center'} alignItems={'center'}>
            <Grid item>
              <Typography className={'text--line'} color={'textSecondary'}>
                You're viewing the Firebase demo project.
              </Typography>{' '}
              <Typography className={'text--link'}>Learn more</Typography>
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
      <AppBar
        color={'primary'}
        position={'static'}
        elevation={0}
      >
        <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
          <Grid container spacing={16} justify={'flex-end'} alignItems={'center'}>
            <Grid item>
              <Typography className={'text--link-inverted'}>Go to docs</Typography>
            </Grid>
            <Grid item>
              <Tooltip title={'Firebase alerts - New alerts'}>
                <Badge className={'badge--dotted'} badgeContent={''}>
                  <Notification className={'icon--link-inverted'} />
                </Badge>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                title={(
                  <React.Fragment>
                    <Typography className={'text--inverted'}>Google account</Typography>
                    <Typography className={'text--inverted text--light'}>siriwatkunaporn@gmail.com</Typography>
                  </React.Fragment>
                )}
              >
                <IconButton className={'icon-button--no-pad'}>
                  <Avatar className={'avatar--small'} src={'https://lh3.googleusercontent.com/-mYNSKSzYGjw/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-iqjXfnyDj9JzvyoC6QVVqJUyEXNA/s64-c-mo/photo.jpg'} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        color={'primary'}
        position={'static'}
        elevation={0}
      >
        <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
          <Grid container spacing={16} justify={'space-between'} alignItems={'center'}>
            <Grid item>
              <Typography gutterBottom color={'inherit'} variant={'h5'}>Storage</Typography>
            </Grid>
            <Grid item>
              <Tooltip
                title={'Help'}
              >
                <IconButton className={'icon-button--link-inverted icon-button--separated'}>
                  <Help className={'icon__front'} />
                  <ArrowDropDown className={'icon__caret'} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  ))