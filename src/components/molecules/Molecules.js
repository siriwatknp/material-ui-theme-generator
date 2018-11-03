import React from 'react';

import Block from 'components/Block';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

import CardSection from './sections/CardSection';
import DrawerSection from './sections/DrawerSection';

const Molecules = () => (
  <Block width={'100%'}>
    <CardSection />
    <DrawerSection />
  </Block>
);

Molecules.propTypes = {};
Molecules.defaultProps = {};

export default Molecules;
