import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    setTheme(saved)
    document.body.className = saved
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem('theme', newTheme)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Panchal Tanya</div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="dropdown">
            <span>Services</span>
            <ul className="dropdown-content">
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/consulting">Consulting</Link></li>
              <li className="dropdown">
                <span>Web Dev</span>
                <ul className="dropdown-content">
                  <li><Link href="/services/web-development/mern">MERN</Link></li>
                  <li><Link href="/services/web-development/mean">MEAN</Link></li>
                  <li><Link href="/services/web-development/dotnet">.NET</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* CENTER TOGGLE BUTTON */}
      <div className="center-toggle-wrapper">
        <button className="center-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Switch to Dark Mode' : '🌞 Switch to Light Mode'}
        </button>
      </div>
    </>
  )
}
