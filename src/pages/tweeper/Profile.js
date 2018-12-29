/* eslint-disable react/no-array-index-key */
import Proptypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/Button';
import Divider from '@material-ui/core/Divider/Divider';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import Header from '../../components/tweeper/Header';
import theme from '../../theme/tweeper/tweeperTheme';
import withTheme from './withTheme';
import atoms from '../../components/atoms';
import molecules from '../../components/molecules';

const { Avatar, Icon, Typography } = atoms;
const { Tabs, Tab } = molecules;

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

class Profile extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <CssBaseline />
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
                      ultraLarge
                      bordered
                      src={
                        'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'
                      }
                    />
                    <Button
                      large
                      color={'primary'}
                      variant={'outlined'}
                      disableRipple
                    >
                      Edit Profile
                    </Button>
                  </div>
                  <Typography primary>siriwatknp</Typography>
                  <Typography light gutterBottom>
                    @siriwatknp
                  </Typography>
                  <div>
                    <Icon text light>
                      calendar_today
                    </Icon>
                    <Typography light inline indented gutterBottom>
                      Joined August 2016
                    </Typography>
                  </div>
                  <Typography bold inline>
                    48
                  </Typography>
                  <Typography light inline indented>
                    Following
                  </Typography>
                  <Typography bold inline indentedLarge>
                    3
                  </Typography>
                  <Typography light inline indented>
                    Followers
                  </Typography>
                </div>
                <Tabs underline value={0} fullWidth>
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
                          <Avatar link src={image} />
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
                    <ListItem button>
                      <ListItemText disableTypography>
                        <Typography link>Show More</Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
                <List subheader={<ListSubheader>Popular Now</ListSubheader>}>
                  {twitterList2.map(
                    ({ primary, secondary, tertiary }, index) => (
                      <React.Fragment>
                        <ListItem key={index} button>
                          <ListItemText disableTypography>
                            <Typography primary>{primary}</Typography>
                            <Typography secondary light={!tertiary}>
                              {secondary}
                            </Typography>
                            {tertiary && (
                              <Typography tertiary light>
                                <Icon>call_made</Icon> {tertiary}
                              </Typography>
                            )}
                          </ListItemText>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    )
                  )}
                  <ListItem button>
                    <ListItemText disableTypography>
                      <Typography link>Show More</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Panel>
            </Grid>
          </Grid>
        </Content>
      </Container>
    );
  }
}

Profile.propTypes = {
  classes: Proptypes.shape({}).isRequired,
};

export default withTheme(theme)(Profile);
