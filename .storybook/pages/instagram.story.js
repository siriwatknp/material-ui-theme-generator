import React from 'react';
import styled, { css } from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import GridOnOutlined from '@material-ui/icons/GridOnOutlined'
import BookmarkBorderOutlined from '@material-ui/icons/BookmarkBorderOutlined'
import Settings from '@material-ui/icons/Settings';

import withInstagramTheme from '../decorators/withInstagramTheme';

import Header from './instagram/Header';

const Container = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '#fafafa',
});

const Content = styled('div')({
  maxWidth: 935,
  margin: 'auto',
  padding: '60px 20px 0',
});

const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

storiesOf('Pages|Instagram', module)
  .addDecorator(withInstagramTheme)
  .addWithJSX('Profile', () => (
    <Container>
      <Header />
      <Content>
        <div style={{ marginBottom: 44 }}>
          <Grid container>
            <Grid item style={{ flexGrow: 1 }}>
              <Avatar
                style={{ margin: 'auto' }}
                className={'avatar--ultra-large'}
                src={
                  'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'
                }
              />
            </Grid>
            <Grid item style={{ flexGrow: 2 }}>
              <Flex style={{ marginBottom: 20 }}>
                <Typography
                  component={'h1'}
                  variant={'h4'}
                  className={'text--inline text--light-weight'}
                >
                  siriwatknp
                </Typography>
                <Button style={{ marginLeft: 20 }} variant={'outlined'}>
                  Edit Profile
                </Button>
                <IconButton style={{ marginLeft: 5 }}>
                  <Settings />
                </IconButton>
              </Flex>
              <div style={{ marginBottom: 20 }}>
                <Grid container spacing={40}>
                  <Grid item>
                    <Typography variant={'subtitle1'} className={'text--inline text--bold'}>132</Typography>{' '}
                    <Typography variant={'subtitle1'} className={'text--inline'}>posts</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={'subtitle1'} className={'text--inline text--bold'}>325</Typography>{' '}
                    <Typography variant={'subtitle1'} className={'text--inline'}>followers</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant={'subtitle1'} className={'text--inline text--bold'}>260</Typography>{' '}
                    <Typography variant={'subtitle1'} className={'text--inline'}>following</Typography>
                  </Grid>
                </Grid>
              </div>
              <Typography variant={'subtitle1'} className={'text--bold'}>
                Siriwat Kunaporn
              </Typography>
              <Typography variant={'subtitle1'} >
                Bangkok Christian College
              </Typography>
              <Typography variant={'subtitle1'} >
                CU intania 96.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Tabs value={0} centered>
          <Tab label="Posts"  disableRipple icon={<GridOnOutlined />}/>
          <Tab label="Saved" disableRipple icon={<BookmarkBorderOutlined />}/>
          <Tab label="Tagged" disableRipple/>
        </Tabs>
        <Grid container spacing={32}>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
          <Grid item xs={4}>
            <img style={{ width: '100%' }} src={'https://via.placeholder.com/500/f5f5f5'} />
          </Grid>
        </Grid>
      </Content>
    </Container>
  ));
