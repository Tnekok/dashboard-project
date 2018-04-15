import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const AddVendingMachine = ({ latitude, longitude, onChange, add }) => (
  <Fragment>
    <label htmlFor="latitude">Latitude</label>
    <input name="latitude" type="text" value={ latitude } onChange={ onChange } />
    <label htmlFor="longitude">Longitude</label>
    <input name="longitude" type="text" value={ longitude } onChange={ onChange } />

    <button type="button" onClick={ add } >Add new Vending Machine</button>
  </Fragment>
)

AddVendingMachine.propTypes = {
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default AddVendingMachine
