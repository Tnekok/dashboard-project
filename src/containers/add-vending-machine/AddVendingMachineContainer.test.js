import React from 'react'
import { shallow } from 'enzyme'
import AddVendingMachineContainer from './AddVendingMachineContainer'
import * as requestHelper from '../../helpers/async-request'

describe('<AddVendingMachineContainer />', () => {
  let addVendingMachineContainer
  let addVendingMachineContainerInstace

  beforeEach(() => {
    requestHelper.asyncRequest = jest.fn()
    addVendingMachineContainer = shallow(<AddVendingMachineContainer />)
    addVendingMachineContainerInstace = addVendingMachineContainer.instance()
  })

  it('should render properly', () => {
    expect(addVendingMachineContainer).toBeDefined()
    expect(addVendingMachineContainer).toBeTruthy()
  })

  describe('add method', () => {
    it('should call asyncRequest helper function passing the correct requestOptions', async () => {
      const spy = jest.spyOn(requestHelper, 'asyncRequest')
      const requestOptions = {
        method: requestHelper.httpMethods.post,
        body: { vending_machine: addVendingMachineContainerInstace.state.vendingMachine },
      }

      await addVendingMachineContainerInstace.add()

      expect(spy).toHaveBeenCalledWith(requestOptions)
    })
  })

  describe('onChange method', () => {
    it('should call setState method passing the new state', () => {
      const spy = jest.spyOn(addVendingMachineContainerInstace, 'setState')
      const event = {
        target: {
          name: 'latitude',
          value: '100'
        },
      }
      const newState = {
        vendingMachine: {
          ...addVendingMachineContainerInstace.state.vendingMachine,
          [event.target.name]: event.target.value,
        },
      }

      addVendingMachineContainerInstace.onChange(event)

      expect(spy).toHaveBeenCalledWith(newState)
    })
  })
})
