import React from 'react'
import PropTypes from 'prop-types'
import { getClassName } from '~/components/aux/hoc/attachClassName'
import DropdownWrapper from '~/elements/aux/DropdownProvider/DropdownWrapper'
import DropdownTriggerWrapper from '~/elements/aux/DropdownProvider/DropdownTriggerWrapper'
import DropdownProvider from '~/elements/aux/DropdownProvider'

const Dropdown = props => (
  <DropdownProvider
    {...props}
    className={DROPDOWN_CLASSNAME}
    render={({
      isExpanded,
      wrapperProps,
      triggerWrapperProps,
      optionsGroupProps,
      renderLabelContent,
      renderGlyph,
      renderOptionsGroup,
    }) => (
      <DropdownWrapper {...wrapperProps}>
        <DropdownTriggerWrapper {...triggerWrapperProps}>
          {renderLabelContent()}
          {renderGlyph()}
        </DropdownTriggerWrapper>
        {renderOptionsGroup()}
      </DropdownWrapper>
    )}
  />
)

Dropdown.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  multiselect: PropTypes.bool,
  /** For controlling the state of multiselect version. */
  selectedOptionsIds: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  onOptionDeselect: PropTypes.func,
  onSubmit: PropTypes.func,
  /** Id of selected option - for controlling the state externally. */
  value: PropTypes.string,
}

Dropdown.defaultProps = {
  label: null,
  defaultValue: null,
  disabled: false,
  inline: false,
  multiselect: false,
  selectedOptionsIds: [],
  options: [],
  onOptionDeselect: () => {},
  onSubmit: () => {},
  value: null,
}

export const DROPDOWN_CLASSNAME = getClassName(Dropdown)

export default Dropdown
