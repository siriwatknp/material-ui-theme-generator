import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
// import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { THEMES } from '../hierarchySeparators';

const lists = [
  {
    image:
      'https://instagram.fbkk9-2.fna.fbcdn.net/vp/481344b49b160cdd5cc9499f8493bc34/5CADCAD7/t51.2885-19/s150x150/41702066_245959502786982_926441118810243072_n.jpg',
    primary: 'Jukky.M',
    secondary: 'Robert Hungary',
    tertiary: 'Followed by abc_d + 1 more',
  },
  {
    image:
      'https://instagram.fbkk9-2.fna.fbcdn.net/vp/481344b49b160cdd5cc9499f8493bc34/5CADCAD7/t51.2885-19/s150x150/41702066_245959502786982_926441118810243072_n.jpg',
    primary: 'Jukky.M',
    secondary: 'Robert Hungary',
    tertiary: 'Followed by abc_d + 1 more',
  },
  {
    image:
      'https://instagram.fbkk9-2.fna.fbcdn.net/vp/481344b49b160cdd5cc9499f8493bc34/5CADCAD7/t51.2885-19/s150x150/41702066_245959502786982_926441118810243072_n.jpg',
    primary: 'Jukky.M',
    secondary: 'Robert Hungary',
    tertiary: 'Followed by abc_d + 1 more',
  },
  {
    image:
      'https://instagram.fbkk9-2.fna.fbcdn.net/vp/481344b49b160cdd5cc9499f8493bc34/5CADCAD7/t51.2885-19/s150x150/41702066_245959502786982_926441118810243072_n.jpg',
    primary: 'Jukky.M',
    secondary: 'Robert Hungary',
    tertiary: 'Followed by abc_d + 1 more',
  },
  {
    image:
      'https://instagram.fbkk9-2.fna.fbcdn.net/vp/481344b49b160cdd5cc9499f8493bc34/5CADCAD7/t51.2885-19/s150x150/41702066_245959502786982_926441118810243072_n.jpg',
    primary: 'Jukky.M',
    secondary: 'Robert Hungary',
    tertiary: 'Followed by abc_d + 1 more',
  },
];

storiesOf(`${THEMES.INSTAGRAM}|List`, module)
  .addDecorator(withRelativeParent({ minWidth: 600, textAlign: 'center' }))
  .addDecorator(withInstagramTheme)
  .addWithJSX('Default', () => (
    <List>
      {lists.map(({ image, primary, secondary, tertiary }, index) => (
        <ListItem key={index}>
          <Avatar className={'avatar--link'} src={image} />
          <ListItemText disableTypography>
            <Typography className={'list__item-text--primary text--link'}>
              {primary}
            </Typography>
            <Typography className={'list__item-text--secondary'}>
              {secondary}
            </Typography>
            <Typography className={'list__item-text--tertiary'}>
              {tertiary}
            </Typography>
          </ListItemText>
          <Button variant={'contained'} color={'primary'}>
            Follow
          </Button>
        </ListItem>
      ))}
    </List>
  ));
