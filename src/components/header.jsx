import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Header() {
    function handleDropdown(){
        setDropdown(previous => {
            return !previous;
        })
    }
    const [dropdown , setDropdown] = React.useState(false);
  return (
    <Container>
        <Content>
        <Netflix src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png'>
        </Netflix>
        <LeftContainer>
            <DropDownButton onClick={handleDropdown}>
            <i class="fa-solid fa-earth-africa"></i>English   <i class="fa-sharp fa-solid fa-caret-down"></i>
            {
                dropdown && <DropContainer>
                <DropContent>Arabic</DropContent>
                <DropContent>French</DropContent>
                <DropContent>English</DropContent>
            </DropContainer>
            }
            </DropDownButton>
            <Link to="/login"><SignButton>Sign Up</SignButton></Link>
        </LeftContainer>
        </Content>
    </Container>
  )
}

export default Header


const Container = styled.div`
    position:fixed;
    top:0;
    width:100%;
    min-width:400px;
    height:4rem;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    z-index:1000;
`

const Content= styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: auto;
justify-content: flex-start;
padding-top: 0.5rem;
margin:1rem 3rem;
@media only screen and (max-width: 349px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px)
    margin: 0 5%;
}
`

const Netflix = styled.img`
width:10rem;
height:2.75rem;
margin-right:auto;
@media (max-width: 768px) {
    width:7rem;
    height:1.75rem;
  }
`

const LeftContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    max-width: 30%;
    height:100%;
    flex-flow: row nowrap;
    
`

const DropDownButton = styled.div`
    background-color:transparent;
    color:white;
    display:flex;
    align-items:center;
    border:1px solid white;
    border-radius:3px;
    padding: 5px 16px;
    position:relative;
    cursor:pointer;
    margin-right:1rem;
`

const DropContainer = styled.ul`
    position:absolute;
    top:100%;
    width:100%;
    height:fit-content;
    background-color:gray;
    color :white;
    left:0;
`

const DropContent = styled.li`
    font:inherit;
    width:100%;
    height:fit-content;
    padding:4px 15px;
    text-align:center;
    cursor:pointer;
    :hover{
        background-color:blue;
    }
`

const SignButton = styled.button`
    width:fit-content;
    height:fit-content;
    padding: 8px 16px;
    white-space: nowrap;
    background-color:red;
    color:white;
    font-weight:500;
    font-size:1rem;
    border-radius:3px;
    text-align:center;
    border: none;
    cursor:pointer;
    @media(max-width: 768px){
        font-size: 0.75rem;
        padding: 4px 8px;
      }
`