import { Hero } from '../../components/Hero/Hero'
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import { Wrapper } from './RegisterPage.styled'

const RegisterPage = () => {
  return (<Wrapper>
    <RegisterForm />
    <Hero />
  </Wrapper>
    
  )
}

export default RegisterPage