import React from 'react';
import { cx } from 'react-emotion'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import Badge from '@material-ui/core/Badge'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Notification from '@material-ui/icons/Notifications'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Help from '@material-ui/icons/Help'

const Header = () => {
  return (
    <React.Fragment>
      <AppBar
        position={'relative'}
        color={'default'}
        elevation={2}
      >
        <Toolbar className={cx('toolbar', 'toolbar--narrow')}>
          <Grid container spacing={16} justify={'center'} alignItems={'center'}>
            <Grid item>
              <Typography className={'text--inline'} color={'textSecondary'}>
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
              <Typography gutterBottom color={'inherit'} variant={'h5'}>Authentication</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={16}>
                <Grid item>
                  <Button variant={'outlined'} className={'button--inverted'}>
                    Web setup
                  </Button>
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar color={'primary'} position={'static'} elevation={0}>
        <Tabs value={0} className={'tabs--inverted'}>
          <Tab label="Users" disableRipple/>
          <Tab label="Sign-in method" disableRipple/>
          <Tab label="Templates" disableRipple/>
          <Tab label="Usage" disableRipple/>
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
