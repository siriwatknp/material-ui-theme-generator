import { cx } from 'emotion';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import List from '@material-ui/core/List/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// ICONS
import { THEMES } from '../hierarchySeparators';

import molecules from 'components/molecules';
import atoms from 'components/atoms';

const { IconButton, Icon } = atoms;
const { Drawer, ListItem, ListItemText, ListItemIcon } = molecules;

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <Icon>people</Icon>, active: true },
      { id: 'Database', icon: <Icon>dns_rounded</Icon> },
      { id: 'Storage', icon: <Icon>perm_media_outlined</Icon> },
      { id: 'Hosting', icon: <Icon>public</Icon> },
      { id: 'Functions', icon: <Icon>settings_ethernet</Icon> },
      { id: 'ML Kits', icon: <Icon>settings_input_component</Icon> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <Icon>settings_applications</Icon> },
      { id: 'Performance', icon: <Icon>dashboard</Icon> },
      { id: 'Test Lab', icon: <Icon>phone_link_setup</Icon> },
    ],
  },
];

storiesOf(`${THEMES.FIRE_BASE}|Drawer`, module)
  .addDecorator(withRelativeParent({ minWidth: 300, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('No Content', () => (
    <Drawer open={boolean('open', true)} anchor={'left'} />
  ))
  .addWithJSX('with Header', () => (
    <Drawer open={boolean('open', true)} anchor={'left'}>
      <List>
        <ListItem header>
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
        <ListItem subcategory button headerActionable active>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
          <ListItemSecondaryAction>
            <IconButton separated disableRipple>
              <Icon front frontFlipped>
                settings
              </Icon>
              <Icon caret>arrow_right</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Drawer>
  ))
  .addWithJSX('with a Category', () => (
    <Drawer open={boolean('open', true)} anchor={'left'}>
      <List>
        {categories.map(({ id, children }) => (
          <div className={'drawer__category-container'} key={id}>
            <ListItem category>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem subcategory active={active} button dense key={childId}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{childId}</ListItemText>
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  ))
  .addWithJSX('Full Options', () => (
    <Drawer open={boolean('open', true)} anchor={'left'}>
      <List>
        <ListItem header>
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
        <ListItem button headerActionable subcategory>
          <ListItemIcon>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
          <ListItemSecondaryAction>
            <IconButton separated disableRipple>
              <Icon front frontFlipped>
                settings
              </Icon>
              <Icon caret>arrow_right</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {categories.map(({ id, children }) => (
          <div className={'drawer__category-container'} key={id}>
            <ListItem category>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem subcategory active={active} button dense key={childId}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{childId}</ListItemText>
              </ListItem>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  ));
