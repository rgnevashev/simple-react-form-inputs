import React from 'react'
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import { ArrayComponent } from 'react-simpl-form'

import { propTypes, defaultProps } from './propTypes.js'
import WrapperField from './WrapperField.js'

export default class ArrayField extends ArrayComponent {

  renderChildrenItem({ children, index }) {
    const id = (new Date()).getTime().toString(36) + index
    if (this.props.renderChildrenItem) {
      return this.props.renderChildrenItem(children, index, id)
    }

    return (
      <div className={this.props.childrenClassName} key={`${this.props.fieldName}.${index}`} data-id={`${id}`}>
        <div className="col-sm-11">
          {this.renderChildrenItemWithContext({ children, index })}
        </div>
        <div className="col-sm-1 text-right">
          {!this.props.disabled &&
            <Button bsStyle="danger" onClick={() => this.removeItem(index)}>
              <i className="fa fa-minus" />
            </Button>
          }
        </div>
      </div>
    )
  }

  render() {
    const props = this.props

    return (
      <WrapperField {...props}>
        <div className={classNames('sortable-container', props.parentClassName)}>
          {this.renderChildren()}
        </div>
        <div>
          {props.showAddButton && !props.disabled &&
            <Button bsStyle="primary" onClick={() => this.addItem()}>
              <i className="fa fa-plus" />
            </Button>
          }
        </div>
      </WrapperField>
    )
  }
}
ArrayField.propTypes = {
  ...propTypes,
  ...ArrayComponent.propTypes,
  parentClassName: React.PropTypes.string,
  childrenClassName: React.PropTypes.string,
  renderChildrenItem: React.PropTypes.func,
  renderItem: React.PropTypes.func
}
ArrayField.defaultProps = {
  ...defaultProps,
  ...ArrayComponent.defaultProps,
  childrenClassName: 'row ui segment m-b-10'
}
