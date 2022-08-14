import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

// project imports
import Customization from '../Customization'

// ==============|| MINIMAL LAYOUT ||============== //

function MinimalLayout() {
  return (
    <Fragment key={0}>
      <Outlet />
      <Customization />
    </Fragment>
  )
}

export default MinimalLayout
