import { Hero } from "../../components/Hero/Hero"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { Wrapper } from "./LoginPage.styled"

const LoginPage = () => {
  return (<Wrapper>
    <LoginForm />
    <Hero />
  </Wrapper>
    
  )
}

export default LoginPage