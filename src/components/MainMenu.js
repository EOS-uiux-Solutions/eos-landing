import React from 'react'

const MainMenu = () => {
  const scroll = (event) => {
    const removeActive = document.querySelector(`.selected`)
    removeActive.classList.remove('selected')
    event.target.classList.add('selected')
  }
  return (
    <aside className='main-menu'>
      <ul className='menu'>
        <li>
          <a href='#logo' className='selected' onClick={scroll}>
            Logo
          </a>
        </li>
        <li>
          <a href='#palette' onClick={scroll}>
            Palette
          </a>
        </li>
        <li>
          <a href='#typography' onClick={scroll}>
            Typography
          </a>
        </li>
        <li>
          <a href='#illustrations' onClick={scroll}>
            Patterns and illustrations
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default MainMenu
