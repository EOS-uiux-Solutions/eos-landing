import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/scss/components/contributing-guide/main-content.scss'
const MainContentCard = (props) => {
  return (
    <div
      className={
        props.orientation === 'left'
          ? 'content-card left'
          : 'content-card right'
      }
    >
      <div className='card-block'>
        <div className='card-text'>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>

      <div className='card-block center-content '>
        <img
          src={require(`../../assets/images/${props.image}`)}
          alt={props.title}
        />
      </div>
    </div>
  )
}

MainContentCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  orientation: PropTypes.string,
  link: PropTypes.string
}

export default MainContentCard
