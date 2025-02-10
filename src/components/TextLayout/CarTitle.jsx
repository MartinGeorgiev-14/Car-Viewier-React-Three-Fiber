import styled from "styled-components";

const Div = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`
const Underline = styled.div`
    background: linear-gradient(31deg, rgba(60,152,255,1) 25%, rgba(255,84,169,1) 75%);
    height: 10px;
    border-radius: 3px;
`

const CarTitle = ({title}) => {
    return (
        <Div>
            <h1>{title}</h1>
            <Underline/>
        </Div>
    )
}


export default CarTitle;