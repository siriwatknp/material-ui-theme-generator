import React from 'react';
import styled, { css, cx } from 'react-emotion';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';
import Divider from '@material-ui/core/Divider/Divider';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import Typography from '@material-ui/core/Typography/Typography';
import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';

import CallMade from '@material-ui/icons/CallMade';
import CalendarToday from '@material-ui/icons/CalendarToday';

import withTwitterTheme from '../decorators/withTwitterTheme';

import Header from './twitter/Header';

const Container = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: 'rgb(230, 236, 240)',
});

const Content = styled('div')({
  maxWidth: 1000,
  padding: '0 10px',
  margin: '10px auto',
});

const Feed = styled('div')({
  background: '#ffffff',
});

const Panel = styled('div')({
  width: 360,
  marginLeft: 20,
});

const Cover = styled('div')({
  height: 200,
  backgroundColor: 'rgb(204, 214, 221)',
});

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
  },
];

storiesOf('Pages|Twitter', module)
  .addDecorator(withTwitterTheme)
  .addWithJSX('Profile', () => (
    <Container>
      <Header />
      <Content>
        <Grid container>
          <Grid item xs>
            <Feed>
              <Cover />
              <div style={{ padding: 10, marginBottom: 5 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'right',
                  }}
                >
                  <Avatar
                    style={{ marginTop: '-18%', marginBottom: 14 }}
                    className={'avatar--ultra-large avatar--bordered'}
                    src={
                      'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'
                    }
                  />
                  <Button
                    className={'button--large'}
                    color={'primary'}
                    variant={'outlined'}
                    disableRipple
                  >
                    Edit Profile
                  </Button>
                </div>
                <Typography className={'text--primary'}>siriwatknp</Typography>
                <Typography className={'text--light'} gutterBottom>
                  @siriwatknp
                </Typography>
                <div>
                  <CalendarToday className={'icon-text icon--light'} />
                  <Typography className={'text--light text--inline text--indented'} gutterBottom>
                    Joined August 2016
                  </Typography>
                </div>
                <Typography className={'text--bold text--inline'}>
                  48
                </Typography>
                <Typography className={'text--light text--inline text--indented'}>
                  Following
                </Typography>
                <Typography className={'text--bold text--inline text--indented-lg'}>3</Typography>
                <Typography className={'text--light text--inline text--indented'}>
                  Followers
                </Typography>
              </div>
              <Tabs className={'tabs--underline'} value={0} fullWidth>
                <Tab label="Tweet" disableRipple />
                <Tab label="Tweets and Responses" disableRipple />
                <Tab label="Media" disableRipple />
                <Tab label="liking" disableRipple />
              </Tabs>
            </Feed>
          </Grid>
          <Grid item>
            <Panel>
              <div style={{ marginBottom: 10 }}>
                <List
                  subheader={<ListSubheader>Keep track of who</ListSubheader>}
                >
                  {twitterList.map(({ image, primary, secondary }, index) => (
                    <React.Fragment>
                      <ListItem key={index} button>
                        <Avatar className={'avatar--link'} src={image} />
                        <ListItemText primary={primary} secondary={secondary} />
                        <Button variant={'outlined'} color={'primary'}>
                          Follow
                        </Button>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                  <ListItem button>
                    <ListItemText disableTypography>
                      <Typography className={'text--link'}>
                        Show More
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </div>
              <List subheader={<ListSubheader>Popular Now</ListSubheader>}>
                {twitterList2.map(({ primary, secondary, tertiary }, index) => (
                  <React.Fragment>
                    <ListItem key={index} button>
                      <ListItemText disableTypography>
                        <Typography className={'text--primary'}>
                          {primary}
                        </Typography>
                        <Typography
                          className={cx(
                            'text--secondary',
                            !tertiary && 'text--light'
                          )}
                        >
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
                <ListItem button>
                  <ListItemText disableTypography>
                    <Typography className={'text--link'}>Show More</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Panel>
          </Grid>
        </Grid>
      </Content>
    </Container>
  ));
