import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { asyncRequest } from '../../helpers/async-request'

import { VendingMachineContainer } from '../vending-machine'
import Context from '../../vm-context'

class VendingMachineListContainer extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      vendingMachineList: null,
    }
  }

  componentDidMount() {
    this.getVendingMachineList()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { vendingMachineList: nextProps.vendingMachineList }
  }

  async getVendingMachineList() {
    try {
      const { data: vendingMachineList } = await asyncRequest()
      this.setState({ vendingMachineList })
      this.props.setVMList(vendingMachineList)
    } catch (error) {
      // TODO:
    } 
  }

  renderVendingMachineList() {
    return this.state.vendingMachineList &&
      this.state.vendingMachineList.map(vendingMachine => (
        <Context.Consumer key={ vendingMachine.id }>
          {
            ({ deleteVendingMachine }) => (
              <VendingMachineContainer
                { ...vendingMachine }
                deleteVendingMachine={ deleteVendingMachine }
              />
            )
          }
        </Context.Consumer>
        )
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

VendingMachineListContainer.propTypes = {
  vendingMachineList: PropTypes.array,
  setVMList: PropTypes.func.isRequired,
}

export default VendingMachineListContainer
