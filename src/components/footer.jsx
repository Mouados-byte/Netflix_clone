import React from 'react'
import styled from 'styled-components'

function Footer() {

    function handleDropdown(){
        setDropdown(previous => {
            return !previous;
        })
    }
    const [dropdown , setDropdown] = React.useState(false);
  return (
    <Container>
        <Content>
            <Questions>Questions? Contact us</Questions>
            <List>
                <Item><span className='footer-items'>FAQ</span></Item>
                <Item><span className='footer-items'>Help Center</span></Item>
                <Item><span className='footer-items'>Account</span></Item>
                <Item><span className='footer-items'>Media Center</span></Item>
                <Item><span className='footer-items'>Investor Relations</span></Item>
                <Item><span className='footer-items'>Jobs</span></Item>
                <Item><span className='footer-items'>Ways to Watch</span></Item>
                <Item><span className='footer-items'>Terms of Use</span></Item>
                <Item><span className='footer-items'>Privacy</span></Item>
                <Item><span className='footer-items'>Cookie Preferences</span></Item>
                <Item><span className='footer-items'>Corporate Information</span></Item>
                <Item><span className='footer-items'>Contact Us</span></Item>
                <Item><span className='footer-items'>Speed Test</span></Item>
                <Item><span className='footer-items'>Legal Notices</span></Item>
                <Item><span className='footer-items'>Only on Netflix</span></Item>
            </List>

            <DropDownButton onClick={handleDropdown}>
            <i class="fa-solid fa-earth-africa"></i><span>English</span>   <i class="fa-sharp fa-solid fa-caret-down"></i>
            {
                dropdown && <DropContainer>
                <DropContent>Arabic</DropContent>
                <DropContent>French</DropContent>
                <DropContent>English</DropContent>
            </DropContainer>
            }
            </DropDownButton>
            <Copyright>Netflix Morocco</Copyright>
        </Content>
    </Container>
  )
}

export default Footer

const Container = styled.div`

margin:0;
    width:100vw;
    height:fit-content;
    padding:5vh 10vw;
    display:flex;
    justify-content:center;
    align-items:center;
    background:black;
`

const Content = styled.div`
    max-width:900px;
    min-width:300px;
    width:70vw;
    color:gray;
`

const Questions = styled.a`
    text-decoration:none;
    cursor:pointer;
    :hover{
        border-bottom:2px solid gray;
        padding-bottom:-9px;
    }
`

const List = styled.ul`
    width:100%;
    min-width:400px;
    margin-top:2rem;
    font-size: 13px;
`
    
    const Item = styled.li`
    display:inline-block;
    list-style:none;
    margin-bottom: 16px;
    padding: 0 5% 0 0;
    vertical-align: top;
    width:25%;
    min-width: 150px;
    word-wrap: break-word;
    cursor:pointer;
`


const DropDownButton = styled.div`
    background-color:transparent;
    color:gray;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border:1px solid white;
    border-radius:3px;
    padding: 16px 16px;
    position:relative;
    cursor:pointer;
    width:8rem;
    min-width:8rem;
    max-width:8rem;
    height:fit-content;
    margin-right:1rem;
    margin-bottom:1rem;
`

const DropContainer = styled.ul`
    position:absolute;
    top:100%;
    width:100%;
    height:fit-content;
    background-color:black;
    color :white;
    left:0;
`

const DropContent = styled.li`
    font:inherit;
    width:100%;
    height:fit-content;
    padding:2px 15px;
    text-align:center;
    cursor:pointer;
    border: 1px solid gray;
    :hover{
        background-color:blue;
    }
`

const Copyright = styled.p`
    font-size:13px;
    color:gray;
    margin-top:1.5rem;
    margin-bottom:0.7rem;
`
