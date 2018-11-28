import React from 'react';
import { cx } from 'emotion';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs/react';

import withRelativeParent from '../decorators/withRelativeParent';
import withFireBaseTheme from '../decorators/withFireBaseTheme';
// import withInstagramTheme from '../decorators/withInstagramTheme'

import Typography from '@material-ui/core/Typography'

import SignalCellularAlt from '@material-ui/icons/SignalCellularAlt'

import { THEMES } from '../hierarchySeparators';

storiesOf(`${THEMES.FIRE_BASE}|Typography`, module)
  .addDecorator(withRelativeParent({ minWidth: 500, textAlign: 'left' }))
  .addDecorator(withFireBaseTheme)
  .addWithJSX('All variants', () => (
    <React.Fragment>
      <Typography
        variant={'h1'}
        gutterBottom
      >
        {text('text', 'Heading 1')}
      </Typography>
      <Typography
        variant={'h2'}
        gutterBottom
      >
        {text('text', 'Heading 2')}
      </Typography>
      <Typography
        variant={'h3'}
        gutterBottom
      >
        {text('text', 'Heading 3')}
      </Typography>
      <Typography
        variant={'h4'}
        gutterBottom
      >
        {text('text', 'Heading 4')}
      </Typography>
      <Typography
        variant={'h5'}
        gutterBottom
      >
        {text('text', 'Heading 5')}
      </Typography>
      <Typography
        variant={'h6'}
        gutterBottom
      >
        {text('text', 'Heading 6')}
      </Typography>
      <Typography
        variant={'subtitle1'}
        gutterBottom
      >
        {text('text', 'Subtitle 1')}
      </Typography>
      <Typography
        variant={'subtitle2'}
        gutterBottom
      >
        {text('text', 'Subtitle 2')}
      </Typography>
      <Typography
        variant={'body1'}
        gutterBottom
      >
        {text('text', 'Body 1')}
      </Typography>
      <Typography
        variant={'body2'}
        gutterBottom
      >
        {text('text', 'Body 2')}
      </Typography>
      <Typography
        variant={'caption'}
        gutterBottom
      >
        {text('text', 'Caption')}
      </Typography>
      <Typography
        variant={'button'}
        gutterBottom
      >
        {text('text', 'Button')}
      </Typography>
      <Typography
        variant={'overline'}
        gutterBottom
      >
        {text('text', 'Overline')}
      </Typography>
    </React.Fragment>
  ))
  .addWithJSX('default', () => (
    <Typography
      variant={select('variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption' ,'button', 'overline'], 'h1')}
      color={select('color', ['default', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'], 'default')}
    >
      {text('text', 'Material-UI Themes')}
    </Typography>
  ))
  .addWithJSX('Link', () => (
    <Typography
      className={'text--link'}
      variant={select('variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption' ,'button', 'overline'], 'body1')}
      color={select('color', ['default', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'], 'default')}
    >
      {text('text', 'Learn more')}
    </Typography>
  ))
  .addWithJSX('Bold', () => (
    <Typography
      className={'text--bold'}
      variant={select('variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption' ,'button', 'overline'], 'body1')}
      color={select('color', ['default', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'], 'default')}
    >
      {text('text', 'Learn more')}
    </Typography>
  ))
  .addWithJSX('Inverted', () => (
    <div style={{ background: 'rgba(0,0,0,0.87)'}}>
      <Typography
        className={'text--inverted'}
        variant={select('variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption' ,'button', 'overline'], 'body1')}
        color={select('color', ['default', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'], 'default')}
      >
        {text('text', 'Learn more')}
      </Typography>
    </div>
  ))
  .addWithJSX('Inline', () => (
    <React.Fragment>
      <Typography
        className={'text--inline'}
        variant={'body1'}
        color={'textSecondary'}
      >
        You're viewing the Firebase demo project.
      </Typography>
      <Typography
        className={'text--inline text--link text--indented'}
        variant={'body1'}
      >
        Learn more
      </Typography>
    </React.Fragment>
  ))
  .addWithJSX('with Icon', () => (
    <Typography
      className={'text--icon text--link-hovered'}
      variant={'body1'}
      color={'textSecondary'}
    >
      <SignalCellularAlt />
      Analytic
    </Typography>
  ))


