import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {
    return (
        <div>
            {loggedIn ? <Redirect to='/games' /> : <Redirect to='/login' />}
        </div>
    )
}

export default Home