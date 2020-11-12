import React from 'react'

const TypographyComponent = () => {
  return (
    <div id='typography' className='section-container'>
      <div className='section-intro flex-reverse'>
        <div className='description'>
          <h1 className='custom-underline'>TYPOGRAPHY</h1>
          <p>
            Our style is simple yet adventurous and playful. We made the best
            combination of colors, fonts and shapes to be our face. We’ve chosen
            Spartan for main titles and sub-headlines, whilst Roboto is our
            choice for the body, UI elements, and all other titles.
          </p>
        </div>
        <div className='img-wrap'>
          <img
            src={require(`../../assets/images/brand_assets/typography.png`)}
            alt='LogoDesign'
          />
        </div>
      </div>
      <div className='sections-row'>
        <h2>Spartan</h2>
        <div className='font-example'>
          <span>Spartan Extra Bold</span>
          <p className='spartan-extra-bold'>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            123456789!@$%^&+-:;
          </p>
        </div>
        <div className='font-example'>
          <span>Spartan Light</span>
          <p className='spartan-light'>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            123456789!@$%^&+-:;
          </p>
        </div>
      </div>
      <div className='sections-row'>
        <h2>Roboto</h2>
        <div className='font-example'>
          <span>Robot Regular</span>
          <p>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            123456789!@$%^&+-:;
          </p>
        </div>
        <div className='font-example'>
          <span>Robot Bold</span>
          <p className='robot-bold'>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            123456789!@$%^&+-:;
          </p>
        </div>
      </div>

      <div className='sections-row'>
        <h2>Hierarchy </h2>
        <div className='hierarchy'>
          <h1>THIS IS HEADLINE </h1>
          <p className='subheading'>This is sub-headline</p>
          <p>
            This is body text and it uses Roboto regular. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam
          </p>
        </div>
      </div>
      <div className='sections-row'>
        <h2 className='do-not-headeing'>Dont</h2>
        <ul className='hierarchy-dont'>
          <li>
            <h1 className='thin-text'>THIS IS HEADLINE</h1>
            <p>Don’t use Light font style for headlines</p>
          </li>
          <li>
            <h1 className='title-case'>This Is Headline</h1>
            <p>Don’t use Title case for headlines</p>
          </li>
          <li>
            <span className='thin-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliqu
            </span>
            <p>Don’t use Thin font style for body text</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TypographyComponent
