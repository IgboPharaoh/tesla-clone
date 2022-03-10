import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../images/model-s.jpg'

const Section = () => {
  return (
    <Wrap>
        <ItemText>
            <h1>Mode S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('${backgroundImg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`