import React from 'react'
import { shallow } from 'enzyme'
import VendingMachineContainer from './VendingMachineContainer'
import * as requestHelper from '../../helpers/async-request'

describe('<VendingMachineContainer />', () => {

  const props = {
    attributes: {
      latitude: '25.6',
      longitude: '-136.8900008',
    },
    id: 'da632a6a-51c1-4e7d-84af-9059207a7b22',
    type: 'vending_machine',
  }

  let vendingMachineContainer
  let vendingMachineContainerInstace

  beforeEach(() => {
    requestHelper.asyncRequest = jest.fn()
    vendingMachineContainer = shallow(<VendingMachineContainer { ...props } />)
    vendingMachineContainerInstace = vendingMachineContainer.instance()
  })

  it('should render properly', () => {
    expect(vendingMachineContainer).toBeDefined()
    expect(vendingMachineContainer).toBeTruthy()
  })

  describe('delte method', () => {
    it('should call asyncRequest helper function passing a valid id', async () => {
      const spy = jest.spyOn(requestHelper, 'asyncRequest')
      const requestOptions = {
        method: requestHelper.httpMethods.delete,
        id: props.id,
      }

      await vendingMachineContainerInstace.delete()

      expect(spy).toHaveBeenCalledWith(requestOptions)
    })
  })

})
