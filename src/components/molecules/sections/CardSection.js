import React from 'react';

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';

import Add from '@material-ui/icons/Add';
import Explore from '@material-ui/icons/Explore';

import Grid from '@material-ui/core/Grid';

const CardSection = () => {
  const bull = <span>•</span>;
  return (
    <div style={{ marginBottom: 32 }}>
      <Typography color={'primary'} variant={'subtitle1'} gutterBottom>
        Card
      </Typography>
      <Grid container spacing={32}>
        <Grid item xs={3}>
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
            <CardActions className={'card__actions--contained'}>
              <Button size="large" fullWidth>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={'card__root--actionable'}>
            <CardActionArea>
              <CardContent>
                <Add />
                <Typography color="textSecondary">Add Project</Typography>
              </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions className={'card__actions--contained'}>
              <Button size="large" color={'primary'} fullWidth>
                <Explore className={'icon--left'} />
                Explore a demo project
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={'card__root--color space-grey'}>
            <CardActionArea>
              <CardMedia
                image={
                  'https://www.gstatic.com/mobilesdk/170215_mobilesdk/discoveryCards/2x/functions.png'
                }
                className={'card__media--wide-screen'}
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
        </Grid>
        <Grid item xs={3}>
          <Card className={'card__root--color dark-blue'}>
            <CardActionArea>
              <CardMedia
                image={
                  'https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/hosting.png'
                }
                className={'card__media--wide-screen'}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Hosting
                </Typography>
                <Typography component="p">
                  Deploy web apps in seconds
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

CardSection.propTypes = {};
CardSection.defaultProps = {};

export default CardSection;
