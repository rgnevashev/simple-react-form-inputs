import React from 'react'
import PropTypes from 'prop-types'
import ObjectComponent from 'react-simpl-form/lib/Object'

import { propTypes, defaultProps } from './propTypes.js'
import WrapperField from './WrapperField.js'

export default class ObjectField extends ObjectComponent {
  render() {
    const props = this.props

    return (
      <WrapperField {...props}>
        <div className={props.parentClassName}>
          {this.getChildrenComponents()}
        </div>
      </WrapperField>
    )
  }
}
ObjectField.propTypes = {
  ...propTypes,
  ...ObjectComponent.propTypes,
  parentClassName: PropTypes.string
}
ObjectField.defaultProps = {
  ...defaultProps,
  ...ObjectComponent.defaultProps
}
