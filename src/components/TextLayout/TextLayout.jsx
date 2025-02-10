import { Html } from "@react-three/drei"
import styled from "styled-components"
import CarTitle from "../TextLayout/CarTitle"
import CarSelector from "./CarSelector"
import CarInformation from "./CarInformation"
const Container = styled.div`

`

const TextLayout = ({car, handleCarChange}) => {

    return (
        <Container>
            <CarTitle title={car.carTitle}/>
            <CarSelector handleCarChange={handleCarChange}/>
            <CarInformation carInfo={car.info}/>
        </Container>
    )
 
}

export default TextLayout 