import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllGames } from "../service"
import styled from "styled-components"
import Select from "./Select";


const Img = styled.img`
margin-left : 42%;
width: 300px;
height: 300px;
`;

const Para = styled.p`
text-align: center;
font-size: 1.5rem;
`;

const Input = styled.input`
margin-left : 42%;
margin-top: 20px;
margin-bottom: 20px;
font-size: 1.5rem;
text-align: center;
`;

const StyledLink = styled(Link)`
color: black;
&:link{
    text-decoration: none;
}
`;

const Button = styled.button`
font-size: 1.5rem;
margin-left: 10px;
`;

const Games = ({ loggedIn }) => {

    const [games, setGames] = useState([])
    const [search, setSearch] = useState('')
    const [number, setNumber] = useState(0)
    const [page, setPage] = useState(0)
    const history = useHistory()

    const range = (s, f) => {
        let tmp = []
        for(let i = s; i < f; i++){
            tmp.push(i)
        }
        return tmp
    }

    let numberOfPages = Math.ceil(games.length / number)
    let pagesNumber = range(0, numberOfPages)

    
    useEffect(() => {
        let mounted = true

        if (!loggedIn) {
            history.push('/login')
            return
        }

        getAllGames().then(res => {
            if (mounted){
                setNumber(res.data.length)
                setGames(res.data)
            }
                
        })

        return () => mounted = false
    }, [loggedIn,history])


    return (
        <div>
            <div>
                <Select setNumber={setNumber} />
                {
                    pagesNumber.length > 1 ? 
                    pagesNumber.map(pageNumber => <Button key= {pageNumber}
                    onClick={()=>{
                        
                        setPage(pageNumber)
                    }}>{pageNumber+1}</Button>)
                    : null
                }
                <Input type="search" placeholder="search..." onChange={(e)=> setSearch(e.target.value)} />
            </div>
            <div>
                {
                    games.slice(number*page,number*(page+1)).filter(game=> game.name.toUpperCase().includes(search.toUpperCase())).map(game => 
                        <StyledLink to={`/games/${game.id}`} key={game.id}>
                            <Img src={game.images.main} alt={game.name} />
                            <Para>{game.name}</Para>
                        </StyledLink>)
                }
            </div>
        </div>
    )
}

export default Games