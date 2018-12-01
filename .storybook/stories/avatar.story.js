import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
// import withFireBaseTheme from '../decorators/withFireBaseTheme';
import withInstagramTheme from '../decorators/withInstagramTheme'
import withTwitterTheme from '../decorators/withTwitterTheme'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.TWITTER}|Avatar`, module)
  .addDecorator(withRelativeParent({ minWidth: 200, textAlign: 'center' }))
  .addDecorator(withTwitterTheme)
  .addWithJSX('Sizes', () => (
    <React.Fragment>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Default (41.25px)</Typography>
        <Avatar
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Small (26.25px)</Typography>
        <Avatar
          className={'avatar--small'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Medium (49px)</Typography>
        <Avatar
          className={'avatar--medium'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Ultra Large (137px)</Typography>
        <Avatar
          className={'avatar--ultra-large'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
    </React.Fragment>
  ))

storiesOf(`${THEMES.INSTAGRAM}|Avatar`, module)
  .addDecorator(withRelativeParent({ minWidth: 200, textAlign: 'center' }))
  .addDecorator(withInstagramTheme)
  .addWithJSX('Sizes', () => (
    <React.Fragment>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Default (44px)</Typography>
        <Avatar
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Small (34px)</Typography>
        <Avatar
          className={'avatar--small'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Medium (50px)</Typography>
        <Avatar
          className={'avatar--medium'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <Typography align={'left'}>Ultra Large (152px)</Typography>
        <Avatar
          className={'avatar--ultra-large'}
          src={'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg'}
        />
      </div>
    </React.Fragment>
  ))

