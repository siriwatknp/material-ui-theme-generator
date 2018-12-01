import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
// import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme';
import withTwitterTheme from '../decorators/withTwitterTheme';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

import CallMade from '@material-ui/icons/CallMade'

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

const twitterList = [
  {
    image: 'http://i.pravatar.cc/300?img=1',
    primary: 'Yeoman',
    secondary: '@whatsup yeo',
  },
  {
    image: 'http://i.pravatar.cc/300?img=2',
    primary: 'GGWP',
    secondary: '@goodgamewellplay',
  },
  {
    image: 'http://i.pravatar.cc/300?img=3',
    primary: 'Sawasdee',
    secondary: '@helloTH',
  },
];

const twitterList2 = [
  {
    primary: '#FromMateToMate',
    secondary: 'Huawei Mate 20 Series',
    tertiary: 'PR by Huawei Mobile TH',
  },
  {
    primary: '#xx_mino_finance',
    secondary: '24.1K Tweet',
  },
  {
    primary: '# MMA 2018',
    secondary: '357K Tweet',
  },
  {
    primary: 'George HW Bush',
    secondary: '328K Tweet',
  }
];

storiesOf(`${THEMES.TWITTER}|List`, module)
  .addDecorator(withRelativeParent({ minWidth: 600, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('People', () => (
    <List subheader={<ListSubheader>Keep track of who</ListSubheader>}>
      {twitterList.map(({ image, primary, secondary }, index) => (
        <React.Fragment>
          <ListItem key={index}>
            <Avatar className={'avatar--link'} src={image} />
            <ListItemText
              primary={primary}
              secondary={secondary}
            />
            <Button variant={'outlined'} color={'primary'}>
              Follow
            </Button>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
      <ListItem>
        <ListItemText
          disableTypography
        >
          <Typography className={'text--link'}>
            Show More
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  ))
  .addWithJSX('Tweets', () => (
    <List subheader={<ListSubheader>Popular Now</ListSubheader>}>
      {twitterList2.map(({ primary, secondary, tertiary }, index) => (
        <React.Fragment>
          <ListItem key={index}>
            <ListItemText
              disableTypography
            >
              <Typography className={'text--primary'}>
                {primary}
              </Typography>
              <Typography className={cx('text--secondary', !tertiary && 'text--light')}>
                {secondary}
              </Typography>
              {tertiary && (
                <Typography className={'text--tertiary text--light'}>
                  <CallMade /> {tertiary}
                </Typography>
              )}
            </ListItemText>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
      <ListItem>
        <ListItemText
          disableTypography
        >
          <Typography className={'text--link'}>
            Show More
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  ));

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
