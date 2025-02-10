import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    text-align: center;
`

const Button = styled.button`
    border:rgb(255, 84, 169) solid 1px;
    background-color: transparent;
    &:hover {
        border-color:  #3c98ff;
    }
`

const CarSelector = ({ handleCarChange }) => {

    return (
        <Div onClick={handleCarChange}>
         <h2>Cars:</h2>
         <Button value={0}>Porsche</Button>
         <Button value={1}>BMW</Button>
        </Div>
    )
}

export default CarSelector