import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import '../style.css'
import CarShow from './components/CarShow'
import styled from 'styled-components'
import { useState } from 'react'
import TextLayout from './components/TextLayout/TextLayout'

const P = styled.p`
  background-color: none;
  position: absolute;
  top: 10px;
  z-index: 1;
`

const App = () => {

  const cars = [{
    path: '/models/cars/porche911930turbo/scene.gltf',
    scale: 1,
    carTitle: 'Porche 911 (930) Turbo',
    info: 'The Porsche 911 (930) Turbo, produced from 1975 to 1989, was the first turbocharged 911, featuring a 3.0L (later 3.3L) flat-six engine with a distinctive rear whale tail spoiler. Its explosive power delivery, combined with rear-engine handling, earned it the nickname "the Widowmaker." A symbol of raw performance and engineering prowess, the 930 Turbo cemented Porsche’s reputation for high-performance road cars.'
  },
  {
    path: '/models/cars/bmwm3e30/scene.gltf',
    scale: 1.2,
    carTitle: 'BMW M3 E30',
    info: "The BMW M3 E30, produced from 1986 to 1991, was the first M3 and a homologation special born for touring car racing. Powered by a high-revving 2.3L (later 2.5L) S14 inline-four, it combined razor-sharp handling with lightweight agility. Its boxy fender flares and motorsport pedigree made it an icon of driving purity and one of BMW’s most celebrated performance cars."
  }]

  const [car, setCar] = useState(cars[0])

  const handleChangeCar = (event) => {
      event.preventDefault()
      setCar(cars[event.target.value])
  }

  return(
    <Suspense fallback={null}>
      <TextLayout car={car} handleCarChange={handleChangeCar}/>
      <Canvas shadows>
        <CarShow car={car}/>
      </Canvas>
    </Suspense>
  )
}

export default App