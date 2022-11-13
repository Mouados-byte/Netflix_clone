import React from 'react'
import styled from 'styled-components'

function Section4(props) {
    const data = React.useState(props.content)[0];
  return (
    <Container2>
        <Content2>
            <LeftContainer2>
                <Image2>
                </Image2>
            </LeftContainer2>
            <RightContainer2>
                <BigHeader2>{data.title}</BigHeader2>
                <BigDescription2>{data.description}</BigDescription2>
            </RightContainer2>
        </Content2>
    </Container2>
  )
}

export default Section4;

const Container2 = styled.div`
    width:100%;
    height:60vh;
    background-color:black;
    z-index:1;
    display:flex;
    flex-direction:row;
    border-bottom: 0.825rem solid gray;
    @media only screen and (max-width: 768px) {
        height:90vh;
    }
`

const Content2 = styled.div`
    margin:auto;
    display:flex;
    justify-content:space-between;
    width:85%;
    height:fit-content;
    color:white;
    @media only screen and (max-width: 768px) {
        flex-direction:column-reverse;
    }
`

const LeftContainer2 = styled.div`
    margin:auto;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Image2 = styled.div`
width:70vh;
margin-left:-5rem;
height:50vh;
position:relative;
z-index:5;
background: url('https://occ-0-358-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f') transparent;
background-size:cover;
background-repeat:no-repeat;
`

const RightContainer2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:left;
    width:55%;
    padding-left:5rem;
    @media only screen and (max-width: 768px) {
        margin:auto;
        margin-bottom:10%;
    }
`


const BigHeader2 = styled.h1`
margin-right:auto;
font-size: 3.125rem;
line-height: 1.2;
margin-bottom: 0.5rem;
color:white;
@media only screen and (max-width: 768px) {
    font-size: 2rem;
line-height: 1;
}
`

const BigDescription2 = styled.p`
font-size: 1.625rem;
font-weight: 400;
    color:white;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    line-height: 1;
    }
`