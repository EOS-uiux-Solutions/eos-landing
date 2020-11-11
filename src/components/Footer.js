import React from 'react'

const FooterComponent = () => {
  return (
    <div className='section-container footer'>
      <div className='footer-links'>
        <p>Get in touch with us</p>
        <ul>
          <li>
            <a
              href='https://twitter.com/eosdesignsystem'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://slack.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Join us on Slack
            </a>
          </li>
          <li>
            <a
              href='https://gitlab.com/SUSE-UIUX/eos-landing-react/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D='
              target='_blank'
              rel='noopener noreferrer'
            >
              Report an issue
            </a>
          </li>
          <li>
            <a
              href='https://gitlab.com/SUSE-UIUX'
              target='_blank'
              rel='noopener noreferrer'
            >
              Repositories
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-links'>
        <p>Resources</p>
        <ul>
          <li>
            <a
              href='https://rubygems.org/gems/eos-icons-font'
              target='_blank'
              rel='noopener noreferrer'
            >
              EOS Icons Gem
            </a>
          </li>
          <li>
            <a
              href='https://www.npmjs.com/package/eos-icons'
              target='_blank'
              rel='noopener noreferrer'
            >
              EOS Icons NPM
            </a>
          </li>
          <li>
            <a
              href='https://gitlab.com/SUSE-UIUX/eos-icons'
              target='_blank'
              rel='noopener noreferrer'
            >
              How to collaborate
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-links'>
        <p>EOS Products</p>
        <ul>
          <li>
            <a
              href='https://www.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Design system
            </a>
          </li>
          <li>
            <a
              href='https://userstory.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              User story
            </a>
          </li>
          <li>
            <a
              href='https://www.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              EOS Solutions
            </a>
          </li>
          <li>
            <a
              href='https://icons.eosdesignsystem.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Icons
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-links'>
        <p>
          <img
            src={require(`../assets/images/brand_assets/eos-logo-small.svg`)}
            alt='LogoDesign'
          />
        </p>
        <ul>
          <li>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default FooterComponent
