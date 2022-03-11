import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { pageProperties } from './utils/Utils'

const Home = () => {
  return (
    <Container>
        {pageProperties.map((item) => (   
            <Section
                key = {item.id}
                title= {item.title}
                description ={item.description}
                backgroundImg={item.img}
                leftBtnText = {item.leftbtntext}
                rightBtnText = {item.rightbtntext}
                downArrow={item.downarrow}
            />
        ))}
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`