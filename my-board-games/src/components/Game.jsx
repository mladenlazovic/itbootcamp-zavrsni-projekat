import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getGameById } from "../service"
import styled from "styled-components"

const Image = styled.img`
margin: 20px;
width: 550px;
height: 550px;
`;

const Name = styled.p`
font-size:1.5rem;
`;

const Year = styled.p`
font-size:1.5rem;
`;

const Desc = styled.p`
font-size:1.5rem;
`;

const Game = (loggedIn) => {
    const [game, setGame] = useState({})
    const history = useHistory()

    let { id } = useParams()

    useEffect(() => {
        let mounted = true

        if (!loggedIn) {
            history.push('/login')
            return
        }

        getGameById(id).then(res => {
            if (mounted)
                setGame(res.data)
        })

        return () => mounted = false
    }, [id,loggedIn,history])

    return (
        <div>
            <Image src={game?.images?.main} alt={game.name}/>
            <Image src={game?.images?.board} alt={game.name}/>
            <Image src={game?.images?.detail} alt={game.name}/>
            <Name>{`Name: ${game.name}`}</Name>
            <Year>{`Year: ${game.year}`}</Year>
            <Desc>{`Description: ${game.description}`}</Desc>
        </div>
    )
}

export default Game