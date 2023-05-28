import React from 'react'
import './ansik-gnb.scss'

const AnsikGnb = () => {
  return (
    // <link rel="stylesheet" href="/stylesheets/layout/header.css">

    <header className="header">
      <section className="header__content">
        <div className="logo-wrapper">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul className="menu-list">
            <li>Sign In</li>
            <li>Join Now</li>
            <li>My Reservation</li>
            <li>Find a Hotel</li>
          </ul>
          <ul className="sub-menu-list">
            <li>레스토랑</li>
            <li>부대시설</li>
            <li>찾아오시는 길</li>
          </ul>
        </nav>
      </section>
    </header>
  )
}

export default AnsikGnb