import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { asyncRequest, httpMethods } from '../../helpers/async-request'

import { VendingMachine } from '../../components/vending-machine'

class VendingMachineContainer extends PureComponent {

  constructor(props) {
    super(props)

    this.delete = this.delete.bind(this)
  }

  async delete() {
    try {
      const requestParams = { id: this.props.id, method: httpMethods.delete }
      await asyncRequest(requestParams)
      this.props.deleteVendingMachine(this.props.id)
    } catch (error) {
      // TODO:
    } 
  }

  render() {
    return <VendingMachine deleteVM={ this.delete } { ...this.props } />
  }
}

VendingMachine.propTypes = {
  attributes: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  deleteVendingMachine: PropTypes.func.isRequired,
}

export default VendingMachineContainer
