import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const VendingMachine = ({ attributes, id, type, deleteVM }) => (
  <Fragment>
    <p>
      <span>Id: { id }</span>
      <button onClick={ deleteVM }>Remove</button>
    </p>
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
