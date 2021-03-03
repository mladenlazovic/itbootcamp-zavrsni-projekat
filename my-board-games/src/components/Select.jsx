import styled from "styled-components"

const Selected = styled.select`
margin-left : 47%;
margin-top: 20px;
margin-bottom: 20px;
font-size: 1.5rem;
text-align: center;
`;

const Select = ({ setNumber }) => {
    return (
        <Selected onChange={(e)=> setNumber(e.target.value)}>
            <option value={Infinity}>Show all</option>
            <option value={5}>Show 5</option>
            <option value={10}>Show 10</option>
        </Selected>
    )
}

export default Select