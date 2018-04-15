import React from 'react'
import { shallow } from 'enzyme'
import VendingMachineListContainer from './VendingMachineListContainer'
import * as requestHelper from '../../helpers/async-request'

describe('<VendingMachineListContainer />', () => {
  const props = {
    setVMList: jest.fn(),
  }

  let vendingMachineListContainer
  let vendingMachineListContainerInstace
  const vendingMachineListMock = [{"id":"2d5f2550-1707-4fe0-ba40-a8efa9b2ff51","type":"vending_machine","attributes":{"longitude":"100.0","latitude":"90.0"}},{"id":"da632a6a-51c1-4e7d-84af-9059207a7b15","type":"vending_machine","attributes":{"longitude":"-170.0","latitude":"77.0"}},{"id":"78bc1ee1-1694-4d52-be11-de50e7f23a8e","type":"vending_machine","attributes":{"longitude":"-1.999","latitude":"1.0"}}]

  beforeEach(() => {
    requestHelper.asyncRequest = jest.fn()
    vendingMachineListContainer = shallow(<VendingMachineListContainer { ...props } />)
    vendingMachineListContainerInstace = vendingMachineListContainer.instance()
  })

  it('should render properly', () => {
    expect(vendingMachineListContainer).toBeDefined()
    expect(vendingMachineListContainer).toBeTruthy()
  })

  describe('componentDidMount method', () => {
    it('should call getVendingMachineList function', async () => {
      const spy = jest.spyOn(vendingMachineListContainerInstace, 'getVendingMachineList')

      await vendingMachineListContainerInstace.componentDidMount()

      expect(spy).toHaveBeenCalled()
    })
  })

  describe('getVendingMachineList method', () => {
    it('should call asyncRequest helper function', async () => {
      const spy = jest.spyOn(requestHelper, 'asyncRequest')

      await vendingMachineListContainerInstace.getVendingMachineList()

      expect(spy).toHaveBeenCalled()
    })

    it('should call setVMList prop function', async () => {
      const spy = jest.spyOn(props, 'setVMList')
      requestHelper.asyncRequest = jest.fn().mockReturnValue({ data: vendingMachineListMock })

      await vendingMachineListContainerInstace.getVendingMachineList()

      expect(spy).toHaveBeenCalledWith(vendingMachineListMock)
    })
  })

  describe('renderVendingMachineList method', () => {
    it('should not display anything when array is empty', () => {
      vendingMachineListContainerInstace.setState({
        vendingMachineList: null,
      })
      const result = vendingMachineListContainerInstace.renderVendingMachineList()

      expect(result).toBe(null)
    })

    it('should return a specific number of VendingMachine elements', () => {
      vendingMachineListContainerInstace.setState({
        vendingMachineList: vendingMachineListMock,
      })
      const result = vendingMachineListContainerInstace.renderVendingMachineList()

      expect(result.length).toBe(vendingMachineListMock.length)
    })
  })

})
