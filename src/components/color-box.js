import React from 'react'
/* Footer links */
const primaryColorsList = [
  {
    rgb: '0 204 209',
    hex: '#00CCD1',
    cmyk: '66 0 24 0 ',
    pantone: '3252 C'
  },
  {
    rgb: '239 11 30',
    hex: '#EF0B1E',
    cmyk: '0 100 100 0',
    pantone: '185 C'
  },
  {
    rgb: '26 42 58',
    hex: '#1A2A3A',
    cmyk: '88 73 51 55',
    pantone: '533 C'
  },
  {
    rgb: '191 192 193',
    hex: '#BFC0C1',
    cmyk: '0 0 0 30',
    pantone: '428 C'
  }
]

const secondaryColorsList = [
  {
    rgb: '134 234 228',
    hex: '#86EAE4',
    cmyk: '40 0 16 0',
    pantone: '332 C'
  },
  {
    rgb: '244 69 90',
    hex: '#F4455A',
    cmyk: '0 88 56 0',
    pantone: '1785 C'
  },
  {
    rgb: '41 71 96',
    hex: '#294760',
    cmyk: '88 68 41 28',
    pantone: '7477 C'
  },
  {
    rgb: '238 239 241',
    hex: '#EEEFF1',
    cmyk: '0 0 0 5',
    pantone: '663 C'
  },
  {
    rgb: '10 165 165',
    hex: '#0AA5A5',
    cmyk: '78 13 39 0',
    pantone: '3272 C'
  },
  {
    rgb: '201 10 33',
    hex: '#C90A21',
    cmyk: '14 100 100 5',
    pantone: '186 C'
  },
  {
    rgb: '9 29 45',
    hex: '#091D2D',
    cmyk: '90 75 54 67',
    pantone: '5395 C'
  },
  {
    rgb: '170 170 170',
    hex: '#aaaaaa',
    cmyk: '0 0 0 40',
    pantone: 'Cool Gray 6 C'
  }
]

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
