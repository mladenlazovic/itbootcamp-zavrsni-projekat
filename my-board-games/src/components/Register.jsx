import { useState } from "react"
import { getAllUsers, registerUser } from "../service"
import { useHistory } from "react-router"
import styled from "styled-components"

const Form = styled.div`
text-align: center;
padding: 20px;
font-size: 1.5rem;
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

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const validPassword = password => password.length >= 6
                                   && password.split('').some(char => !isNaN(Number(char)))
                                   && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))

    return (
        <Form>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (username.length < 4) {
                    alert('Username must contain at least 4 characters')
                    return
                }
                else if (!validPassword(password)) {
                    alert('Password must contain at least 6 characters and number')
                    return
                }
                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {
                        registerUser(username, email, password).then(() => {
                            history.push('/login')
                        })
                    }
                    else {
                        alert('Username is taken')
                    }
                })
            }} >
                <Label >Username: </Label>
                <Input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)} />
                <Label >Email: </Label>
                <Input type="email" placeholder="Email..." onChange={e => setEmail(e.target.value)} />
                <Label >Password: </Label>
                <Input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)} />
                <Input type="submit" value="Register" />
            </form>
            <p>Username must contain at least 4 characters</p>
            <p>Password must contain at least 6 characters and number</p>
        </Form>
    )
}

export default Register