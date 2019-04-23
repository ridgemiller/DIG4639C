import React from 'react'
import FaTimesCircle from 'react-icons/lib/fa/times-circle'

import '../css/close.css'

let close = (props) => {
  return (
    <View onClick={props.onClick} className="location-remove">
      <FaTimesCircle />
    </View>
  )
}

export default close
