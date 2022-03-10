import React from 'react'
import styled from 'styled-components'
import downArrow from '../images/down-arrow.svg'

const Section = ({description, title, leftBtnText, rightBtnText, backgroundImg}) => {
  return (
    <Wrap backgroundImg = {backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>            
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                <RightButton>{rightBtnText}</RightButton>
            </ButtonGroup>
            <DownArrow src={downArrow}/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${({backgroundImg}) => backgroundImg });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.button`
    background-color: rgba(23, 26, 32,0.8);
    height: 4rem;
    width: 25.6rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    border: none;
    margin: 0.8rem;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    margin-top: 2rem;
    height: 4rem;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div``