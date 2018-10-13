import React from 'react'
import {
  configure,
  addDecorator
} from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  withBackgroundColors,
  withMuiThemeProvider,
} from './decorators'
import 'sanitize.css/sanitize.css'

const req = require.context('./stories', true, /\.story\.js$/)

const withStoryStyles = storyFn => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      {storyFn()}
    </div>
  )
}

const loadStories = () => {
  addDecorator(withKnobs)
  addDecorator(withStoryStyles)
  addDecorator(withBackgroundColors([
    {
      value: '#ffffff',
      defaultColor: true
    },
    { value: '#000000' },
    { value: '#a5a5a5' }
  ]))
  addDecorator(withMuiThemeProvider)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)