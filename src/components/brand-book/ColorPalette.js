import React from 'react'
import ColorBox from '../../components/ColorBox'

const ColorPaletteComponent = () => {
  return (
    <div id='palette' className='section-container color-palette'>
      <div className='section-intro flex-reverse'>
        <div className='description'>
          <h1 className='custom-underline'>Color palette</h1>

          <p>
            We let our colors speak for us and they say:
            <strong> “We are creative and we like to build”</strong> and
            <strong>“We understand your needs, you can trust us”</strong>
          </p>
        </div>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/color-palette.png`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row'>
        <h2>Primary colors</h2>
        <ColorBox type='primary' />
      </div>

      <div className='sections-row'>
        <h2>Secondory colors</h2>
        <ColorBox />
      </div>
    </div>
  )
}
export default ColorPaletteComponent
