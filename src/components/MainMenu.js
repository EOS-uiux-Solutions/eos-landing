import React from 'react'

const MainMenu = () => {
  const scroll = (event) => {
    const removeActive = document.querySelector(`.selected`)
    removeActive.classList.remove('selected')
    event.target.classList.add('selected')
  }

  const onScroll = (event) => {
    const scrollPos = window.scrollY
    const topHeight = document.getElementById('logo').offsetHeight

    Array.from(document.getElementsByClassName('menu-link')).forEach(function (
      element,
      index
    ) {
      const elementId = element.getAttribute('href').replace('#', '')
      const refElement = document.getElementById(elementId)

      if (
        refElement.offsetTop - 90 <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight - 90 > scrollPos
      ) {
        element.setAttribute('class', 'menu-link selected')
      } else {
        element.setAttribute('class', 'menu-link')
      }
    })
    if (scrollPos > -1 && scrollPos < topHeight) {
      document
        .getElementsByClassName('menu-link')[0]
        .setAttribute('class', 'menu-link selected')
    }
  }

  window.onscroll = () => {
    onScroll()
  }

  return (
    <aside className='main-menu'>
      <ul className='menu'>
        <li>
          <a href='#logo' className='menu-link selected' onClick={scroll}>
            Logo
          </a>
        </li>
        <li>
          <a href='#palette' className='menu-link' onClick={scroll}>
            Palette
          </a>
        </li>
        <li>
          <a href='#typography' className='menu-link' onClick={scroll}>
            Typography
          </a>
        </li>
        <li>
          <a href='#illustrations' className='menu-link' onClick={scroll}>
            Patterns and illustrations
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default MainMenu
