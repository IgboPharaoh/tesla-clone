import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { sideNav } from './utils/Utils'
import {selectCars} from '../features/counter/car/carSlice'
import {useSelector} from 'react-redux'

const Header = () => {
  
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const cars = useSelector(selectCars)
  
  return (
    <Container>
      <a href="www." className="logo">
        <img src={logo} alt="tesa-logo"/>
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href='www.'>{car}</a>
        ))}
       
      </Menu>
      <RightMenu>
        <a href='www.'>Shop</a>
        <a href='www.'>Tesla Account</a>
        <p onClick={()=> setSideNavOpen(true)}> Menu</p>
      </RightMenu>
      {sideNavOpen && 
        <SideNav>
          <div onClick={()=> setSideNavOpen(false)} className="cancel-container">  
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0011 12L17.2441 17.243M6.75806 17.243L12.0011 12L6.75806 17.243ZM17.2441 6.75696L12.0001 12L17.2441 6.75696ZM12.0001 12L6.75806 6.75696L12.0001 12Z" stroke="#393C41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          {sideNav.map((item) =>((
            <li><a href='www.'>{item}</a></li>
          )))}
        </SideNav>
      }
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

  a, p{
    font-weight: 400;
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
    cursor: pointer;
  }
  `

const RightMenu = styled(Menu)`
  flex: none;
  justify-content: flex-end;
`
const SideNav = styled.div`
  cursor: pointer;
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30rem;
  z-index: 100;
  padding: 0rem 3.2rem 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  text-align: start;
  a{
    font-size: 1.4rem;
    padding: 0rem 0.8rem;
  }
  li a:hover{
    border-bottom: 1px solid rgba(23, 26, 32,0.8);
    padding-bottom: 0.5rem;
    transition: ease-in-out 0.5s;
  }
  
  .cancel-container{
    display: flex;
    justify-content: flex-end;
    padding: 2.8rem 2rem;
  }
  .cancel-container:hover{
    border: none;
  }
`