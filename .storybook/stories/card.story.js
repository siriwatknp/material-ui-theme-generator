import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Add from '@material-ui/icons/Add';

import atoms from 'components/atoms';
import molecules from 'components/molecules'
import { THEMES } from '../hierarchySeparators';

const { Icon } = atoms;
const { Card, CardMedia, CardActions, CardContent, CardActionArea } = molecules;

const bull = <span>•</span>;

storiesOf(`${THEMES.FIRE_BASE}|Card`, module)
  .addDecorator(withRelativeParent({ minWidth: 300, textAlign: 'center' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('Simple', () => (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography color="textSecondary">adjective</Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions contained>
        <Button size="large" fullWidth>
          Learn More
        </Button>
      </CardActions>
    </Card>
  ))
  .addWithJSX('Link Card', () => (
    <Card actionable>
      <CardActionArea>
        <CardContent>
          <Add />
          <Typography color="textSecondary">Add Project</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions contained>
        <Button size="large" color={'primary'} fullWidth>
          <Icon left>explore</Icon>
          Explore a demo project
        </Button>
      </CardActions>
    </Card>
  ))
  .addWithJSX('Media Card (space-grey)', () => (
    <Card contained spaceGrey>
      <CardActionArea>
        <CardMedia
          image={
            'https://www.gstatic.com/mobilesdk/170215_mobilesdk/discoveryCards/2x/functions.png'
          }
          wideScreen
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Storage
          </Typography>
          <Typography component="p">
            Store & retrieve user generated content
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ))
  .addWithJSX('Media Card (dark-blue)', () => (
    <Card contained darkBlue>
      <CardActionArea>
        <CardMedia
          image={
            'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/hosting.png'
          }
          wideScreen
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Hosting
          </Typography>
          <Typography component="p">Deploy web apps in seconds</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
