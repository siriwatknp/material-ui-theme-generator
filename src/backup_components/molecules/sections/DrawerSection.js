import React from 'react';
import { cx } from 'react-emotion';
import { compose, withState } from 'recompose';

import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// ICONS
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import DnsRounded from '@material-ui/icons/DnsRounded';
import PermMediaOutlined from '@material-ui/icons/PermMediaOutlined';
import Public from '@material-ui/icons/Public';
import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import Dashboard from '@material-ui/icons/Dashboard';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import PhonelinkSetup from '@material-ui/icons/PhonelinkSetup';

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <People />, active: true },
      { id: 'Database', icon: <DnsRounded /> },
      { id: 'Storage', icon: <PermMediaOutlined /> },
      { id: 'Hosting', icon: <Public /> },
      { id: 'Functions', icon: <SettingsEthernet /> },
      { id: 'ML Kits', icon: <SettingsInputComponent /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <SettingsApplications /> },
      { id: 'Performance', icon: <Dashboard /> },
      { id: 'Test Lab', icon: <PhonelinkSetup /> },
    ],
  },
];

const DrawerSection = compose(withState('open', 'setOpen', false))(
  ({ open, setOpen }) => (
    <div style={{ marginBottom: 32 }}>
      <Typography color={'primary'} variant={'subtitle1'} gutterBottom>
        Drawer
      </Typography>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} anchor={'left'}>
        <List>
          <ListItem className={'drawer__header'}>
            <img
              alt={'logo'}
              className={'drawer__header-logo'}
              src={
                'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
              }
            />
            <img
              alt={'label'}
              className={'drawer__header-label'}
              src={
                'https://www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
              }
            />
          </ListItem>
          <ListItem className={cx('drawer__header--actionable')}>
            <ListItemIcon className={'drawer__subcategory-icon'}>
              <Home />
            </ListItemIcon>
            <ListItemText
              className={'drawer__subcategory-text'}
              classes={{
                primary: 'drawer__subcategory-text--primary',
              }}
            >
              Project Overview
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton disableRipple>
                <Settings />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          {categories.map(({ id, children }) => (
            <div className={'drawer__category-container'} key={id}>
              <ListItem className={'drawer__category'}>
                <ListItemText
                  className={'drawer__category-text'}
                  classes={{
                    primary: 'drawer__category-text--primary',
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active }) => (
                <ListItem
                  className={cx('drawer__subcategory', active && 'active')}
                  button
                  dense
                  key={childId}
                >
                  <ListItemIcon className={'drawer__subcategory-icon'}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    className={'drawer__subcategory-text'}
                    classes={{
                      primary: 'drawer__subcategory-text--primary',
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  )
);

DrawerSection.propTypes = {};
DrawerSection.defaultProps = {};

export default DrawerSection;
