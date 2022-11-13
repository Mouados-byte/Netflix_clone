import React from 'react'
import styled from 'styled-components'
import AnimatedComp from './animatedComp'


function Section2(props) {
    const data = React.useState(props.content)[0];
  return (
    <Container1>
        <Content1>
            <LeftContainer1>
                <Image1>
                    <ImageCenter1>
                        <Minage1 className='cover' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt=""/>
                        <CenteredDownload1>
                            <Title1>Stranger Things</Title1>
                            <Down1>Downloading...</Down1>
                        </CenteredDownload1>
                        <AnimatedComp></AnimatedComp>
                    </ImageCenter1>
                </Image1>
            </LeftContainer1>
            <RightContainer1>
                <BigHeader1>{data.title}</BigHeader1>
                <BigDescription1>{data.description}</BigDescription1>
            </RightContainer1>
        </Content1>
    </Container1>
  )
}

export default Section2

const Container1 = styled.div`
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

const Content1 = styled.div`
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

const LeftContainer1 = styled.div`
    margin:auto;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Image1 = styled.div`
width:50vh;
margin-left:-5rem;
height:50vh;
position:relative;
z-index:5;
background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg);
background-size:cover;
background-repeat:no-repeat;
`

const ImageCenter1 = styled.div`
    background-color:black;
    width:24rem;
    height:6rem;
    color:white;
    border: 2px solid white;
    border-radius:10px;
    z-index:6;
    position:absolute;
    top:70%;
    left:15%;
    display:grid;
    grid-template-columns:1fr 2fr 1fr;

` 

const Minage1 = styled.img`
width:4rem;
height:5rem;
margin:auto;
`

const CenteredDownload1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:left;
    font-size:1rem;
`

const Title1 = styled.p`
color:white;
font-weight:600;
`

const Down1 = styled.p`
color:blue;
`


const RightContainer1 = styled.div`
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


const BigHeader1 = styled.h1`
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

const BigDescription1 = styled.p`
font-size: 1.625rem;
font-weight: 400;
    color:white;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    line-height: 1;
    }
`