import React, { useState } from 'react'
import styled from 'styled-components'


function Section3(props) {
    const data  = useState(props.content)[0];
    const vidRef=React.useRef();

React.useEffect(() => { vidRef.current.play(); },[]);
    console.log(props);
  return (
    <>
        <Container2>
            <Content2>
            <LeftContainer2>
                <BigHeader2>{data.title}</BigHeader2>
                <BigDescription2>{data.description}</BigDescription2>
            </LeftContainer2>
            <RightContainer2>
            <Image2 src={data.image_url}>
            <Video2 ref={ vidRef }
  muted
  autoPlay
  loop  >
                <source src={data.video_url} type="video/mp4" />
                Your browser does not support the video tag.
            </Video2>

            </Image2>
            </RightContainer2>
            </Content2>
        </Container2>
    
    </>
  )
}

export default Section3;

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
    @media only screen and (max-width: 768px) {
        flex-direction:column;
    }
`

const LeftContainer2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:left;
    width:65%;
    @media only screen and (max-width: 768px) {
        margin:auto;
        margin-bottom:10%;
    }
`

const BigHeader2 = styled.h1`
margin-right:auto;
font-size: 3.125rem;
line-height: 1;
white-space: nowrap;
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
const RightContainer2 = styled.div`
    width:100%;
    height:30vh;
    position:relative;
    background-color:black;
    
    padding-left:15%;

    @media only screen and (max-width: 768px) {
        padding-left:0;
        width:100vh;
    }
`

const Image2 = styled.div`
width:65vh;
height:50vh;
position: absolute;
position:relative;
margin: -10% 10%;
mix-blend-mode:screen;
background: url(${props => props.src}) transparent;
background-size:cover;
z-index:99;
`

const Video2 = styled.video`
position: absolute;
width: 63% !important;
height: 75% !important;
top: -3.5%;
left: 19.5%;
z-index: -1;
`
