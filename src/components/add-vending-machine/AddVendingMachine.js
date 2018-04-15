import React from 'react'
import PropTypes from 'prop-types'
import './AddVendingMachine.css'

/*
 * Stateless Component, no logic attached
 * Params:
 *    latitude,
 *    longitude,
 *    onChange,
 *    add
*/ 
const AddVendingMachine = ({ latitude, longitude, onChange, add }) => (
  <div className="add-vending-machine">
    <p className="title">Add a new Vending Machine</p>
    <div className="latitude label-input">
      <label htmlFor="latitude">Latitude</label>
      <input name="latitude" type="text" value={ latitude } onChange={ onChange } />
    </div>
    <div className="longitude label-input">
      <label htmlFor="longitude">Longitude</label>
      <input name="longitude" type="text" value={ longitude } onChange={ onChange } />
    </div>
    <button type="button" onClick={ add } >Add</button>
  </div>
)

AddVendingMachine.propTypes = {
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default AddVendingMachine
