import React, { Component } from 'react'
import mainContentData from '../../assets/data/contributing-guide/MainContent.data'
import MainContentCard from '../../components/contributing-guide/MainContentCard'
import Divider from '../../assets/images/divider.svg'
class MainContent extends Component {
  render() {
    const contentCards = []
    mainContentData.forEach((content, index) => {
      contentCards.push(
        <MainContentCard
          key={index}
          orientation={index % 2 === 0 ? 'left' : 'right'}
          title={content.title}
          content={content.content}
          image={content.image}
        />
      )
    })
    return (
      <div className='main-content-wrapper'>
        {contentCards}
        <img src={Divider} alt='divider' className='divider' />
      </div>
    )
  }
}

export default MainContent
