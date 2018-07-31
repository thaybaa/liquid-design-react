import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Icon, { ICON_CLASSNAME } from '~/elements/Icon'
import { cursorValue } from '~/utils/styling'

const StyledSingleBreadcrumb = styled.div`
  display: inline-block;
  padding: 7px 3px;
  line-height: 1;

  .${ICON_CLASSNAME} {
    transform: translate(-1px, 1px);
    vertical-align: middle;
  }

  ${cursorValue};

  ${props => css`
    ${!props.disabled &&
      css`
        &:hover {
          color: ${props.theme.colors.primary.base};
        }
      `};
    ${props.active &&
      css`
        padding-right: 0;
        font-weight: bold;
        color: ${props.theme.colors.primary.base};
      };
    `};
    ${props.disabled &&
      css`
        color: ${props.theme.colors.sensitiveGrey.base};
      `};
    ${!props.disabled &&
      props.onClick &&
      css`
        cursor: pointer;
      `};
  `};
`

const SingleBreadcrumbTextWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 5px;
`

const SingleBreadcrumb = ({ name, onClick, active, disabled }) => (
  <StyledSingleBreadcrumb
    active={active}
    disabled={disabled}
    onClick={onClick || undefined}
  >
    <Icon
      name='arrowRight'
      size={19}
      color={disabled ? 'sensitiveGrey.base' : undefined}
    />
    <SingleBreadcrumbTextWrapper>{name}</SingleBreadcrumbTextWrapper>
  </StyledSingleBreadcrumb>
)

SingleBreadcrumb.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

SingleBreadcrumb.defaultProps = {
  active: false,
  disabled: false,
  onClick: null,
}

export default SingleBreadcrumb
