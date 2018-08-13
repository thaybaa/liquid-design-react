import React from 'react'
import { shallow } from 'enzyme'

import Button from '.'
import { Label } from '~/elements/Button/Labels'
import Icon from '~/elements/Icon'

describe('Button', () => {
  const label = 'Text'
  const icon = 'favorite'
  const onClickMock = jest.fn()
  const wrapper = shallow(
    <Button icon={icon} label={label} size='large' onClick={onClickMock} />
  )

  it('renders a label text correctly', () => {
    expect(
      wrapper
        .find(Label)
        .children()
        .text()
    ).toEqual(label)
  })

  it('renders a correct icon', () => {
    expect(wrapper.find(Icon).prop('name')).toEqual(icon)
  })

  it('calls a function when clicked', () => {
    wrapper.simulate('click')
    expect(onClickMock).toBeCalled()
  })
})