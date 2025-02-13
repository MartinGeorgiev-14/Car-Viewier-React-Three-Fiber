import { OrbitControls, PerspectiveCamera, CubeCamera, Environment } from "@react-three/drei";
import Ground from './Ground'
import Car from "./Car";
import Rings from "./Rings";
import Boxes from "./Boxes";
import { EffectComposer, Bloom, ChromaticAberration, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useState } from "react";
const CarShow = ({ car }) => {



    return(
        <>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>

            <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={50} />

            <color args={[0, 0, 0]} attach={'background'}/>

            

            <CubeCamera resolution={256} frames={Infinity}>
                {(texture) => (
                    <>
                        <Environment map={texture} />
                        <Car car={car}/>
                    </>
                )}
            </CubeCamera>
            
            
            <Rings />
            <Boxes />

            <spotLight
                color={[1, 0.25, 0.7]}
                intensity={200}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.1}
            />

            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={250}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.1}
            />

            <Ground />
            
            <EffectComposer>
                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={0.2}
                    width={300}
                    height={300}
                    kernelSize={3}
                    luminanceThreshold={0.15}
                    luminanceSmoothing={0.025}
                />
                <ChromaticAberration
                    blendFunction={BlendFunction.NORMAL}
                    offset={[0.0005, 0.0012]}
                />
            </EffectComposer>
        </>
    )
}

export default CarShow;