import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Footer from '../components/footer';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [more, setMore] = useState(false);
  function handleemail(e){
    setEmail(e.target.value);
  }

  function handlepassword(e){
    setPassword(e.target.value);
  }
  return (
    <Container>
    <Header>
    <Link to='/'>
      <Netflix src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png'>
      </Netflix>
    </Link>
    </Header>

    <Content>
    <FormCont method='POST' action='/'>
      <H1>
        Sign In
      </H1>
        <Input type="text" className={email ? "contained": ''} placeholder="Email/phone Number" name="userinfo" onChange={(e)=>{handleemail(e)}}/>
        <Input type="password" className={password ? "contained": ''} placeholder="Password" name="userpass" onChange={(e)=>{handlepassword(e)}}/>
      <Button type='submit'>Sign In</Button>
      <Lowerform className='shesh'>
        <div>
        <Check type="checkbox" name="rememberme" value={false}/>
        <CheckLabel htmlFor="rememberme">Remember Me</CheckLabel>
        </div>
        <Link className='linkhelp'><span className='footer-items'>Need Help?</span></Link>
      </Lowerform>
    </FormCont>
    <OtherCont>
      <P1>New to Netflix? <Link to="/">Sign up now</Link>.</P1>
      <P2>This page is protected by Google reCAPTCHA to ensure you're not a bot.
         {!more ? <Link onClick={() => setMore(true)}>Learn more.</Link> : "\n\nThe information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google)."}
      </P2>
    </OtherCont>
    </Content>
    <Footer></Footer>
    </Container>
  )
}

export default SignIn;


const Container = styled.div`
width:100%;
height:fit-content;
  background-color:black;
  color:white;
  background:  linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/0e4b01c0-84f6-43b5-b531-ffa9d63d49ba/MA-fr-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  position:relative;
`

const Content = styled.div`
min-height: 660px;
min-width: 450px;
border-radius:5px;
margin-bottom: 90px;
padding: 60px 68px 40px;
background:rgba(0,0,0,0.7);
display:flex;
flex-direction:column;
`

const Netflix = styled.img`
position:absolute;
width:10rem;
height:2.75rem;
top:3.5vh;
left:6vh;
@media (max-width: 768px) {
    width:7rem;
    height:1.75rem;
  }
`

const Header = styled.div`
  width:100%;
  height:13vh;
`

const FormCont = styled.form`
width:100%;
display:flex;
flex-direction:column;
`

const H1 = styled.h1`
font-size: 32px;
    font-weight: 500;
    margin-bottom: 28px;
`


const Input = styled.input`
  width:100%;
  margin-bottom:20px;
  font-size:1rem;
  background: #333;
  border: 0;
  border-radius: 4px;
  margin-bottom:1rem;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 6px 20px 0;
  :focus{
    outline:none;
  }
`

const Button = styled.button`
  width:100%;
  height:50px;
  background:red;
  border-radius:5px;
  border:none;
  color:white;
  font-size:1rem;
  font-weight:700;
  margin:2rem 0 0.5rem 0;
`

const Lowerform = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`

const CheckLabel = styled.label`
  font-size:12px;
  margin-left:2px;
  margin-top:2px;
  font-weight:600;
  color:#555;
`

const Check = styled.input`
  color:#555;
`

const OtherCont = styled.div`
  width:100%;
  text-align:left;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`

const P1 = styled.p`
  color:#555;
  font-size:1rem;
  margin:10px 0 1rem 0;
  *{
    color:white;
    text-decoration:none;
  }
  *:hover{
    border-bottom:2px solid white;
  }
`

const P2 = styled.p`
width:22rem;
line-break: anywhere;
color:#555;
font-size:0.75rem;
white-space: pre-line;
`