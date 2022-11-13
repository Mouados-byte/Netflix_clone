import React, { useState } from 'react'
import styled from 'styled-components'


function Section1(props) {
    const [data , setData] = useState(props.content);
    const vidRef=React.useRef();

React.useEffect(() => { vidRef.current.play(); },[]);
    console.log(props);
  return (
    <>
        <Container1>
            <Content1>
            <LeftContainer1>
                <BigHeader1>{data.title}</BigHeader1>
                <BigDescription1>{data.description}</BigDescription1>
            </LeftContainer1>
            <RightContainer1>
            <Image1 src={data.image_url}>
            <Video1 ref={ vidRef }
  muted
  autoPlay
  loop  >
                <source src={data.video_url} type="video/mp4" />
                Your browser does not support the video tag.
            </Video1>

            </Image1>
            </RightContainer1>
            </Content1>
        </Container1>
    
    </>
  )
}

export default Section1;

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
    @media only screen and (max-width: 768px) {
        flex-direction:column;
    }
`

const LeftContainer1 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:left;
    width:55%;
    @media only screen and (max-width: 768px) {
        margin:auto;
        margin-bottom:10%;
    }
`

const BigHeader1 = styled.h1`
margin-right:auto;
font-size: 3.125rem;
line-height: 1.8;
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
const RightContainer1 = styled.div`
    width:100%;
    height:20vh;
    position:relative;
    background-color:black;
    
    padding-left:15%;

    @media only screen and (max-width: 768px) {
        padding-left:0;
        width:100vh;
    }
`

const Image1 = styled.div`
width:80vh;
height:50vh;
position: absolute;
margin: -10% 5%;
mix-blend-mode:screen;
background: url(${props => props.src}) black;
background-size:cover;
z-index:6;
`

const Video1 = styled.video`
    position: absolute;
    width : 73% !important; 
    height : 79% !important; 
    top: 18%; 
    left: 13%; 
    z-index:5;
`
