import React from 'react'
import { shallow } from 'enzyme'

import AddVendingMachine from './AddVendingMachine'

describe('<AddVendingMachine />', () => {

  const props = {
    latitude: '85.2',
    longitude: '120.8',
    onChange: jest.fn(),
    add: jest.fn(),
  }

  it('should render properly', () => {
    const addVendingMachine = shallow(<AddVendingMachine { ...props } />)
    expect(addVendingMachine).toBeDefined()
    expect(addVendingMachine).toBeTruthy()
  })
})
