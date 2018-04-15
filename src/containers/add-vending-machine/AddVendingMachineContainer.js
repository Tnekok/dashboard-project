import React, { PureComponent } from 'react'

import { asyncRequest, httpMethods } from '../../helpers/async-request'

import { AddVendingMachine } from '../../components/add-vending-machine'

class AddVendingMachineContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      vendingMachine: {
        latitude: '',
        longitude: '',
      },
    }

    this.onChange = this.onChange.bind(this)
    this.add = this.add.bind(this)
  }

  async add() {
    try {
      const requestParams = { method: httpMethods.post, body: { vending_machine: this.state.vendingMachine } }
      await asyncRequest(requestParams)
    } catch (error) {
      // TODO:
    } 
  }

  onChange(event) {
    const { value, name } = event.target
    this.setState({
      vendingMachine: {
        ...this.state.vendingMachine,
        [name]: value,
      },
    })
  }

  render() {
    const { latitude, longitude } = this.state.vendingMachine
    return <AddVendingMachine latitude={ latitude } longitude={ longitude } onChange={ this.onChange } add={ this.add } />
  }

}

export default AddVendingMachineContainer
