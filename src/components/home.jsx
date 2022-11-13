import React from 'react'
import styled from 'styled-components';
import Emailfield from './emailfield';


function Home() {
  return (
    <Container>
        <Content>
            <Biggest>
                Unlimited movies, TV shows, and more.
            </Biggest>
            <Mid>
                Watch anywhere. Cancel anytime.
            </Mid>
            <Emailfield></Emailfield>
        </Content>
    </Container>
  )
}

export default Home


const Container = styled.div`
width:100%;
height:95vh;
  background-color:black;
  background:  linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/0e4b01c0-84f6-43b5-b531-ffa9d63d49ba/MA-fr-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom: 0.825rem solid gray;
  font-stretch: expanded;
`
const Content = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    color:white;

`

const Biggest = styled.h1`
    font-size:3.825rem;
    line-height:4rem;
    font-weight:650;
    margin:0 155px;
    text-align:center;
    max-width:640px;
    @media (max-width: 768px) {
      font-size: 1.75rem;
      line-height:2rem;
    }
`

const Mid = styled.h3`
font-size:1.825rem;
font-weight:400;
margin:16px 30%;
text-align:center;

@media(max-width: 768px){
  font-size: 1.125rem;
    margin: 1rem auto;
}
`
