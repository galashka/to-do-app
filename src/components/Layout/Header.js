import React, { Component } from 'react'
import { link, Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My To Do List</h1>
      <Link style={linkStyle} to="/">Home</Link>  |      
      <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

const headerStyle = {
  background: 'linear-gradient(to right, #434343 0%, black 100%)',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header