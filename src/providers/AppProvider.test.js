import React from 'react'
import { shallow } from 'enzyme'
import AppProvider from './AppProvider'

describe('<AppProvider />', () => {
  let appProvider
  let appProviderInstace
  const vendingMachineListMock = [{"id":"2d5f2550-1707-4fe0-ba40-a8efa9b2ff51","type":"vending_machine","attributes":{"longitude":"100.0","latitude":"90.0"}},{"id":"da632a6a-51c1-4e7d-84af-9059207a7b15","type":"vending_machine","attributes":{"longitude":"-170.0","latitude":"77.0"}},{"id":"78bc1ee1-1694-4d52-be11-de50e7f23a8e","type":"vending_machine","attributes":{"longitude":"-1.999","latitude":"1.0"}}]
  const shortVendingMachineListMock = [{"id":"da632a6a-51c1-4e7d-84af-9059207a7b15","type":"vending_machine","attributes":{"longitude":"-170.0","latitude":"77.0"}},{"id":"78bc1ee1-1694-4d52-be11-de50e7f23a8e","type":"vending_machine","attributes":{"longitude":"-1.999","latitude":"1.0"}}]

  beforeEach(() => {
    appProvider = shallow(<AppProvider />)
    appProviderInstace = appProvider.instance()
    appProviderInstace.setState({
      ...appProviderInstace.state,
      vendingMachineList: vendingMachineListMock,
    })
  })

  it('should render properly', () => {
    expect(appProvider).toBeDefined()
    expect(appProvider).toBeTruthy()
  })

  describe('setVMList method', () => {
    it('should call setState with the proper parameters', () => {
      const spy = jest.spyOn(appProviderInstace, 'setState')
      const expectedState = {
        ...appProviderInstace.state,
        vendingMachineList: [],
      }
      const vendingMachineList = []

      appProviderInstace.setVMList(vendingMachineList)

      expect(spy).toHaveBeenCalledWith(expectedState)
    })
  })

  describe('addVendingMachine method', () => {
    it('should call setState with the proper parameters', () => {
      const spy = jest.spyOn(appProviderInstace, 'setState')
      const vendingMachine = {}
      const expectedState = {
        ...appProviderInstace.state,
        vendingMachineList: [
          ...appProviderInstace.state.vendingMachineList,
          vendingMachine,
        ],
      }

      appProviderInstace.addVendingMachine(vendingMachine)

      expect(spy).toHaveBeenCalledWith(expectedState)
    })
  })

  describe('deleteVendingMachine method', () => {
    it('should call setState with the proper parameters', () => {
      const spy = jest.spyOn(appProviderInstace, 'setState')
      const vendingMachineId = '2d5f2550-1707-4fe0-ba40-a8efa9b2ff51'
      const expectedState = {
        ...appProviderInstace.state,
        vendingMachineList: shortVendingMachineListMock,
      }

      appProviderInstace.deleteVendingMachine(vendingMachineId)

      expect(spy).toHaveBeenCalledWith(expectedState)
    })
  })
})
