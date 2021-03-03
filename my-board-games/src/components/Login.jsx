import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../service"
import styled from "styled-components"

const Form = styled.div`
text-align: center;
padding: 20px;
font-size: 2rem;
margin: 200px;
`;

const Input = styled.input`
font-size: 1.5rem;
margin: 10px;
`;

const Label = styled.label`
margin: 10px;
font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
font-size: 1.5rem;
`;

const Login = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <Form>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if (user) {
                        setUser(user)
                        history.push('/games')
                    }
                    else {
                        alert('Username, email or password are incorrect')
                    }
                })
            }} >
                <Label >Username: </Label>
                <Input type="text" placeholder="Username or email..." onChange={e => setUsername(e.target.value)} />
                <Label >Password: </Label>
                <Input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                <Input type="submit" value="Login" />
            </form>
            <div>
                <StyledLink to='/register'>Not registered?</StyledLink>
            </div>
        </Form>
    )
}

export default Login