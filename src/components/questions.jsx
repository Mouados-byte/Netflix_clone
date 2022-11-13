import React from 'react'
import styled from 'styled-components'
import Emailfield from './emailfield'
import Question from './question'

const ques = [
    {
        question:'What is Netflix?',
        answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    }
    ,{
    question:'How much does Netflix cost?',
        answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 65 MAD to 125 MAD a month. No extra costs, no contracts."
    }
    ,{
    question:'Where can I watch?',
        answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    }
    ,{
    question:'How do I cancel?',
        answer:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    }
    ,{
    question:'What can I watch on Netflix?',
        answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
    ,{
    question:'Is Netflix good for kids?',
        answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
    }
]

function Questions() {
  return (
    <Container>
        <Content>
            <Header>Frequently Asked Questions</Header>
            <div>
            {ques && ques.map((que , index) => {
          return (
            <Question content={que} key={index} id={index}/>
            );
        }
        
    )}
            </div>
            <Emailfield></Emailfield>
        </Content>
    </Container>
  )
}

export default Questions;

const Container = styled.div`
width:100%;
height:fit-content;
  background-color:black;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom: 0.825rem solid gray;
  padding:3rem;
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

const Header = styled.h1`
    font-size:3.125rem;
    text-align:center;
    margin-bottom:2rem;
    @media (max-width: 768px) {
      font-size:2rem;
    }
`