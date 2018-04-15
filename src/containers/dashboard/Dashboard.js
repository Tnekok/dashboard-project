import React, { Fragment } from 'react'
import { AddVendingMachineContainer } from '../add-vending-machine'
import { VendingMachineListContainer } from '../vending-machine-list'

import Context from '../../vm-context'

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
