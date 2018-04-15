import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './VendingMachine.css'

/*
 * Stateless Component, no logic attached
 * Params:
 *    attributes: { longitude, latitude },
 *    id,
 *    type,
 *    deleteVM
*/
const VendingMachine = ({ attributes, id, type, deleteVM }) => (
  <Fragment>
    <div className="vending-machine">
      <p className="title">Vending Machine Id: <br /><span className="title-info">{ id }</span></p>
      <button onClick={ deleteVM }>Remove</button>
    </div>
  </Fragment>
)

VendingMachine.propTypes = {
  attributes: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  deleteVM: PropTypes.func.isRequired,
}

export default VendingMachine
