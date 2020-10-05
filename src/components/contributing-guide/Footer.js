import React from 'react'
import '../../assets/scss/components/contributing-guide/footer.scss'
const FooterComponent = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer'>
        <a
          href='https://slack.eosdesignsystem.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Join us on Slack
        </a>
        <a
          href='https://gitlab.com/SUSE-UIUX'
          target='_blank'
          rel='noopener noreferrer'
        >
          Repositories
        </a>
        <a
          href='https://userstory.eosdesignsystem.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Report a issue
        </a>
        <a
          href='https://twitter.com/eosdesignsystem'
          target='_blank'
          rel='noopener noreferrer'
        >
          EOS on Twitter
        </a>
        <a
          href='https://suse.eosdesignsystem.com/cookies-policy'
          target='_blank'
          rel='noopener noreferrer'
        >
          Cookie Policy
        </a>
      </div>
    </div>
  )
}
export default FooterComponent
