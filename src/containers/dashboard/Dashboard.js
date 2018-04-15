import React, { Fragment } from 'react'
import { AddVendingMachineContainer } from '../add-vending-machine'
import { VendingMachineListContainer } from '../vending-machine-list'

const Dashboard = () => (
  <Fragment>
    <AddVendingMachineContainer />
    <VendingMachineListContainer />
  </Fragment>
)

export default Dashboard
