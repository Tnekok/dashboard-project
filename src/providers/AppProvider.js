import React, { PureComponent } from 'react'

import Context from '../vm-context'

class AppProvider extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      vendingMachineList: null,
      setVMList: this.setVMList.bind(this),
      addVendingMachine: this.addVendingMachine.bind(this),
      deleteVendingMachine: this.deleteVendingMachine.bind(this),
    }
  }

  setVMList(vendingMachineList) {
    this.setState({
      ...this.state,
      vendingMachineList,
    })
  }

  addVendingMachine(vendingMachine) {
    this.setState({
      ...this.state,
      vendingMachineList: [
        ...this.state.vendingMachineList,
        vendingMachine,
      ],
    })
  }

  deleteVendingMachine(vendingMachineId) {
    const vendingMachineList = this.state.vendingMachineList.filter(({ id }) => vendingMachineId !== id)
    this.setState({
      ...this.state,
      vendingMachineList,
    })
  }

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default AppProvider
