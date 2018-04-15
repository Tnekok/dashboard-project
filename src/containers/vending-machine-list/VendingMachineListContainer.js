import React, { PureComponent } from 'react'

import { asyncRequest } from '../../helpers/async-request'

import { VendingMachineContainer } from '../vending-machine'

class VendingMachineListContainer extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      vendingMachineList: null,
    }
  }

  componentWillMount() {
    this.getVendingMachineList()
  }

  async getVendingMachineList() {
    try {
      const { data: vendingMachineList } = await asyncRequest()
      this.setState({ vendingMachineList })
    } catch (error) {
      // TODO:
    } 
  }

  renderVendingMachineList() {
    return this.state.vendingMachineList &&
      this.state.vendingMachineList.map(vendingMachine => 
        <VendingMachineContainer key={ vendingMachine.id } { ...vendingMachine } />
      )
  }

  render() {
    return (
      <div className="vending-machine-list">
        { this.renderVendingMachineList() }
      </div>
    )
  }
}

export default VendingMachineListContainer
