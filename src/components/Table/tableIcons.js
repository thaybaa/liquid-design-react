import React from 'react'
import PropTypes from 'prop-types'
import { css, withTheme } from 'styled-components'

import { Glyph } from '~/elements/Icon'
import Checkbox from '~/elements/Checkbox'
import { getClassName } from '~/components/aux/hoc/attachClassName'
import { SIZES } from '~/components/Table/utils'

const getStyledCSS = iconProps => css`
  ${props => css`
    transition: ${props.theme.transition};
    transform: rotate(${iconProps.pointingDown ? 0 : 180}deg);
  `};
`

const ArrowIconBase = ({ pointingDown, theme, inactive, ...props }) => (
  <Glyph
    name='arrowTop'
    styledCSS={getStyledCSS({ pointingDown })}
    color={inactive ? theme.colors.sensitiveGrey.darkest : undefined}
    {...props}
  />
)

ArrowIconBase.propTypes = {
  theme: PropTypes.object.isRequired,
  pointingDown: PropTypes.bool,
  inactive: PropTypes.bool,
}

ArrowIconBase.defaultProps = {
  pointingDown: false,
  inactive: false,
}

export const ArrowIcon = withTheme(ArrowIconBase)

const TABLE_AUX_COMPONENT_CLASSNAME_BASE = 'TableAuxComponent'
export const getTableAuxComponentClassName = name =>
  getClassName({
    name: `${TABLE_AUX_COMPONENT_CLASSNAME_BASE}--${name}`,
  })
export const getAuxComponent = ({ rowInfoArrow, checkbox, size }) => {
  let Component
  let componentName
  if (rowInfoArrow) {
    Component = ArrowIcon
    componentName = 'Arrow'
  } else if (checkbox) {
    Component = props => <Checkbox iconSize={size === SIZES.small ? 19 : 24} {...props} />
    componentName = 'Checkbox'
  }
  return (
    Component &&
    (props => (
      <div className={getTableAuxComponentClassName(componentName)}>
        <Component {...props} />
      </div>
    ))
  )
}
