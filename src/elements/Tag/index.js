import React from 'react'
import PropTypes from 'prop-types'

import Icon from '~/elements/Icon'
import { TagWrapper } from '~/elements/Tag/TagWrapper'
import { Label } from '~/elements/Tag/Label'

const Tag = ({ disabled, icon, label, outline, onClick }) => (
  <TagWrapper disabled={disabled} outline={outline}>
    <div>
      <Label disabled={disabled} outline={outline}>
        {label}
      </Label>
      <Icon
        outline={outline}
        name={icon}
        style={{ margin: '0 6.6px' }}
        size={16}
        onClick={onClick}
      />
    </div>
  </TagWrapper>
)

Tag.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
}

Tag.defaultProps = {
  disabled: null,
  icon: 'close',
  label: 'Tag',
  outline: null,
  onClick: null,
}

export default Tag
