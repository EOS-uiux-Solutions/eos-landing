import React from 'react'

const IllustrationsPatternsComponent = () => {
  return (
    <div id='illustrations' className='section-container'>
      <div className='section-intro flex'>
        <div className='description'>
          <h1 className='custom-underline'>PATTERNS AND ILLUSTRATIONS</h1>
          <p>
            We don’t use photos but we like to make illustrations and patterns
            of our own. A pattern is an abstract graphic piece, while an
            illustration represents real-life or technical concepts. Both
            illustrations and patterns are based on a grid system. Every element
            has to be aligned to the grid. The grid is 25px by 25px, but to
            express our creativity better we let elements exceed hat size.
          </p>
        </div>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/illustration.svg`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row flex'>
        <div className='illustration-example'>
          <p>Illustration</p>
          <img
            src={require(`../../assets/images/brand_assets/illustration-1.svg`)}
            alt='LogoDesign'
          />
        </div>
        <div className='illustration-example'>
          <p>Pattern</p>
          <img
            src={require(`../../assets/images/brand_assets/patterns.svg`)}
            alt='LogoDesign'
          />
        </div>
      </div>

      <div className='sections-row'>
        <h2>How to create illustrations</h2>
        <ul className='how-to-list'>
          <li>
            Use circles and squares to assemble illustrations and patterns.
          </li>
          <li>All elements need to be aligned to the grid</li>
          <li>
            Elements can exceed the 25px by 25px size as long as they fit within
            the grid.
          </li>
          <li>
            Only circles are allowed to be positioned in the centre of a grid’s
            block.
          </li>
          <li>
            Squares can have a corner radius of 25%, 50% and 100% of its size.
          </li>
          <li>
            Circles and squares, including their modified versions, can overla
            and intersect.
          </li>
          <li>
            Lines can be used in addition to other elements in order to express
            movement and structure.
          </li>
          <li>
            Other elements like icons and text are allowed in combination with
            the main pieces.
          </li>
        </ul>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/create-illustrations.svg`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row'>
        <h2 className='do-not-headeing'>Dont</h2>
        <div className='logo-example do-not flex'>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/do-not-illustrations-1.svg`)}
              alt='LogoDesign'
            />
            <p>Don’t use triangles.</p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/do-not-illustrations-2.svg`)}
              alt='LogoDesign'
            />
            <p>No diagonal lines and rotations. </p>
          </div>
          <div className='img-wrap'>
            <img
              src={require(`../../assets/images/brand_assets/do-not-illustrations-3.svg`)}
              alt='LogoDesign'
            />
            <p>No 3D effects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IllustrationsPatternsComponent
