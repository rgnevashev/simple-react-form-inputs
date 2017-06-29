import React from 'react'
import { ObjectComponent } from 'react-simpl-form'

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
  parentClassName: React.PropTypes.string
}
ObjectField.defaultProps = {
  ...defaultProps,
  ...ObjectComponent.defaultProps
}
