import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeDefined()
  expect(wrapper).toBeTruthy()
})