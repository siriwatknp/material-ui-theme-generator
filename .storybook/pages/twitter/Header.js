import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Badge from '@material-ui/core/Badge/Badge';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Mail from '@material-ui/icons/Mail'
import Home from '@material-ui/icons/Home'
import Notifications from '@material-ui/icons/Notifications'
import Search from '@material-ui/icons/Search'

const Header = () => {
  return (
    <AppBar
      position={'sticky'}
      elevation={1}
    >
      <Toolbar>
        <Grid container alignItems={'center'} spacing={16}>
          <Grid item xs={4}>
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
              <Tab icon={<Search />} classes={{ wrapper: 'tab__icon' }} disableRipple />
              <Tab
                icon={
                  <Badge className={'badge--number'} badgeContent={2}>
                    <Notifications />
                  </Badge>
                }
                classes={{ wrapper: 'tab__icon' }}
                disableRipple
              />
              <Tab icon={<Mail />} classes={{ wrapper: 'tab__icon' }} disableRipple />
            </Tabs>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder={'Find Tweets'}
              InputProps={{
                disableUnderline: true,
                startAdornment: <InputAdornment position="start"><Search /></InputAdornment>
              }}
            />
          </Grid>
          <Grid item>
            <ListItem>
              <Avatar className={'avatar--small'} src={'http://i.pravatar.cc/300?img=4'} />
              <ListItemText primary={'siriwatknp'} />
            </ListItem>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
