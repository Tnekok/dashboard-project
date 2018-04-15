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

  // Sets the initial vmList state for the whole app
  setVMList(vendingMachineList) {
    this.setState({
      ...this.state,
      vendingMachineList,
    })
  }

  // Updates the state after adding a new Vending Machine to the list
  addVendingMachine(vendingMachine) {
    this.setState({
      ...this.state,
      vendingMachineList: [
        ...this.state.vendingMachineList,
        vendingMachine,
      ],
    })
  }

  // Updates the state after removing an existing Vending Machine from the list
  deleteVendingMachine(vendingMachineId) {
    const vendingMachineList = this.state.vendingMachineList.filter(({ id }) => vendingMachineId !== id)
    this.setState({
      ...this.state,
      vendingMachineList,
    })
  }

  // Renders the app (Dashboard) as any component under the app is a children
  // setting the state dynamically
  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default AppProvider
