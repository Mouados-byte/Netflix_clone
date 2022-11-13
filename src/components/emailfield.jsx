import React from 'react'
import styled from 'styled-components';

function Emailfield() {
  return (
    <Last>
                <Hinlast>Ready to watch? Enter your email to create or restart your membership.</Hinlast>
                <Inpinlast method='GET' action='/sheesh'>
                    <Input placeholder='Email address' type='email' />
                    <Button>Get Started <i class="fa-thin fa-greater-than"></i> </Button>
                </Inpinlast>
            </Last>
  )
}

export default Emailfield;


const Last = styled.div`
padding-top:15px;
display:flex;
flex-flow:column nowrap;
justify-content:space-around;
align-items:center;
height:20vh;
min-width:700px;
`

const Hinlast = styled.h4`
    font-size:1.125rem;
    font-weight:500;
    text-align:center;
    max-width: 650px;
    @media (max-width: 768px) {
      font-size:0.75rem;
      padding:0 5%;
    }
    
`

const Inpinlast = styled.form`
font-size:3.625rem;
text-align:center;
width:50vw;
max-width:700px;
min-width:350px;
margin:0 8rem;
display:flex;
flex-direction:row;
@media (max-width: 768px) {
    flex-direction: column;
    justify-content:space-around;
    align-items:center;
    gap:10px;
  }
height:70px;
`

const Input = styled.input`
font-size:1rem;
background-color:white;
width:70%;
border: 2px solid rgba(0 , 0 , 0 , 0.6);
padding:10px;
:focus {
    outline:none;
  }
`

const Button = styled.button`
background-color:red;
font-size:1.625rem;
width:fit-content;
padding:0 10px;
@media (max-width: 768px) {
    font-size:1rem;
    width:fit-content;
  }
color:white;
border: 2px solid rgba(0 , 0 , 0 , 0.6);
`