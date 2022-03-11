import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { sideNav } from './utils/Utils'

const Header = () => {
  return (
    <Container>
      <a href="www." className="logo">
        <img src={logo} alt="tesa-logo"/>
      </a>
      <Menu>
        <a href='www.'>Model S</a>
        <a href='www.'>Model Y</a>
        <a href='www.'>Model 3</a>
        <a href='www.'>Model X</a>
        <a href='www.'>Solar Roof</a>
        <a href='www.'>Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href='www.'>Shop</a>
        <a href='www.'>Tesla Account</a>
        <a href='www.'>Menu</a>
      </RightMenu>
      <SideNav>
        {sideNav.map((item) =>((
          <li><a href='www.'>{item}</a></li>
        )))}
      </SideNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 6rem;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 5.4rem;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  .logo{
    display: flex;
  }
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a{
    font-weight: 400;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
  }
  `

const RightMenu = styled(Menu)`
  flex: none;
  justify-content: flex-end;
`
const SideNav = styled.ul`
  cursor: pointer;
`