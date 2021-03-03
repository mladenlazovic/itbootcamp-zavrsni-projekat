import { Link } from "react-router-dom";
import styled from "styled-components"

const Navi = styled.nav`
text-align: center;
padding: 20px;
background-color: #f0efef;
`;

const StyledLink = styled(Link)`
padding: 10px;
margin-left: 50px;

color: black;
font-size: 2rem;
&:hover{
    background: rgb(176, 234, 252);
    color: grey;
    border-radius: 8px;
}
&:link{
    text-decoration: none;
}
`;

const Span = styled.span`
padding: 20px;
color: black;
font-size: 2rem;
`;

const Log = styled.div`
float: right;
`;

const Button = styled.button`
background: white;
padding: 10px;
font-size: 1rem;
border-radius: 8px;
font-weight: bold;
&:hover{
    background: rgb(176, 234, 252);
    color: grey;
}
`;

const Nav = ({user,setUser}) => {
    return(
        <Navi>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/games">Games</StyledLink>
            {
                user ? 
                <Log>
                    <Span>{`User: ${user.username}`}</Span>
                    <Button onClick={() => setUser(null)}>Logout</Button> 
                </Log>
                :
                <>
                    <StyledLink to="/login">Login</StyledLink>
                    <StyledLink to="/register">Register</StyledLink>
                </>
            }
        </Navi>
    )

}

export default Nav