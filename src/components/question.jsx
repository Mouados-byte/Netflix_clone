import React , {useState } from 'react'
import styled from 'styled-components'

function Question(props) {
  const [shown, setShown] = useState(false);
  function show(){
    setShown(!shown);
  }
  return (
    <Container>
        <Button onClick={show}>{props.content.question} <span>{shown ? '+' : 'X'}</span></Button>
        {shown && <Answer>{props.content.answer}</Answer>}
    </Container>
  )
}

export default Question;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:70vw;
    height:fit-content;
    color:white;
`

const Button = styled.button`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    padding:2rem;
    font-size:2.5rem;
    background-color:#303030;
    color:white;
    @media (max-width: 768px) {
      font-size:1.25rem;
    }
`

const Answer = styled.div`
display:flex;
padding:2rem;
font-size:2rem;
white-space: pre-line;
justify-content:center;
align-items:center;
background-color:#303030;
@media (max-width: 768px) {
  font-size:1rem;
}
`