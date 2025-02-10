import styled from "styled-components"
const Div = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    width: 20%;
    z-index: 1;
    text-align: left;
`

const CarInformation = ({carInfo}) => {
    console.log(carInfo)
return (
    <Div>
        <h2>Information:</h2>
        {carInfo}
    </Div>
)
}

export default CarInformation