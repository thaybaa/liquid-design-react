import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Ratings } from 'liquid-design-react'
import { getWrapper } from '../helpers'

storiesOf('Ratings', module)
  .addDecorator(getWrapper({ padding: '20px' }))
  .add('default', () => (
    <Ratings rating={1.7} />
  ))
  .add('interactive', () => (
    <Ratings
      rating={2}
      onSubmit={action('submit rating')}
    />
  ))
  .add('disabled', () => (
    <Ratings rating={3.5} disabled />
  ))
  .add('using dots', () => (
    <Ratings rating={3.5} dots />
  ))
  .add('interactive and using dots', () => (
    <Ratings rating={2.5} dots onSubmit={action('submit rating')} />
  ))
