import React from 'react'
import { shallow } from 'enzyme'

import VendingMachine from './VendingMachine'

describe('<VendingMachine />', () => {

  const props = {
    attributes: {
      latitude: '25.6',
      longitude: '-136.8900008',
    },
    id: 'da632a6a-51c1-4e7d-84af-9059207a7b22',
    type: 'vending_machine',
    deleteVM: jest.fn(),
  }

  it('should render properly', () => {
    const vendingMachine = shallow(<VendingMachine { ...props } />)
    expect(vendingMachine).toBeDefined()
    expect(vendingMachine).toBeTruthy()
  })
})