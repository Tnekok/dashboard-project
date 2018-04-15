import React, { Fragment } from 'react'
import { AddVendingMachineContainer } from '../add-vending-machine'
import { VendingMachineListContainer } from '../vending-machine-list'

import Context from '../../vm-context'

/*
 * Stateless Component, no logic attached
 * Params:
 *    vendingMachineList,
 *    setVMList,
 *    addVendingMachine
 * Context.Consumer to manage the state of the app passing it to the specific component that needs it
*/
const Dashboard = () => (
  <Context.Consumer>
    {
      ({ vendingMachineList, setVMList, addVendingMachine }) => (
        <Fragment>
          <AddVendingMachineContainer addVendingMachine={ addVendingMachine } />
          <VendingMachineListContainer setVMList={ setVMList } vendingMachineList={ vendingMachineList } />
        </Fragment>
      )
    }
  </Context.Consumer>
)

export default Dashboard
