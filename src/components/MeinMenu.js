import React from 'react'

const MeinMenu = (props) => {
  const scroll = (event) => {
    const id = event.target.dataset.user
    const section = document.querySelector(`#${id}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const removeActive = document.querySelector(`.active`)
    removeActive.classList.remove('active')
    event.target.classList.add('active')
  }

  return (
    <aside className='main-menu'>
      <ul className='menu'>
        <li>
          <a href='/' data-user='logo' onClick={scroll}>
            Logo
          </a>
        </li>
        <li>
          <a href='/' data-user='palette' onClick={scroll}>
            Palette
          </a>
        </li>
        <li>
          <a href='/' data-user='typography' onClick={scroll}>
            Typography
          </a>
        </li>
        <li>
          <a href='/' data-user='illustrations' onClick={scroll}>
            Patterns and illustrations
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default MeinMenu
