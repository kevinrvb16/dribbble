import drbbb1 from '../../assets/images/drbbb1.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Container, Content, LoginDiv } from './styles'
const Login = () => {
    return (
        <LoginDiv>
            <Container>
                <Content>
                    <h1>dribbble</h1>
                    <h2>Discover the world’s top Designers & Creatives.</h2>
                </Content>
                <img src={drbbb1} alt="logo do Dribbble"/>
            </Container>
            <div>
                <h3>Sign up to Dribbble</h3>
                <p>Username os Email Address:</p>
                <Input></Input>
                <p>Password</p>
                <Input></Input>
                <Button></Button>

            </div>
        </LoginDiv>
    )
}

export default Login