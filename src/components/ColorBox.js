import React from 'react'
import { primaryColorsList, secondaryColorsList } from '../store/colorState'

const ColorPalette = ({ type }) => {
  const iconClass = (hex) => {
    const mystyle = { backgroundColor: `${hex}` }
    return mystyle
  }

  const colorList = (type) => {
    if (type === 'primary') {
      return primaryColorsList
    } else {
      return secondaryColorsList
    }
  }

  return (
    <ul className='color-list'>
      {colorList(type).map((ele, index) => (
        <li key={index}>
          <div className='color-box' style={iconClass(ele.hex)}></div>
          <ul className='color-details'>
            <li>
              <span>RGB:</span>
              {ele.rgb}
            </li>
            <li>
              <span>HEX:</span>
              {ele.hex}
            </li>
            <li>
              <span>CMYK:</span>
              {ele.cmyk}
            </li>
            <li>
              <span>PANTONE:</span>
              {ele.pantone}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default ColorPalette
