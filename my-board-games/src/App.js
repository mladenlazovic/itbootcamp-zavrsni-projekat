import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { useState } from 'react';
import Game from './components/Game';
import Games from './components/Games';
import Nav from './components/Nav';


const App = () => {

    

    const [user,setUser] = useState(null)

    return (
        <Router>
            <Nav user={user} setUser={setUser} />
            <Switch>
                <Route path="/games/:id">
                    <Game loggedIn={user}/>
                </Route>
                <Route path="/games">
                    <Games loggedIn={user}/>
                </Route>
                <Route path="/login">
                    <Login setUser={setUser}/>
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home loggedIn={user}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;