import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader} from "three";
import { LinearEncoding } from "@react-three/drei/helpers/deprecated";
import { useEffect } from "react";
import terRoughness from '../textures/terrain-roughness.jpg';
import terNormal from '../textures/terrain-normal.jpg';


const Ground = () => {

    const [roughness, normal] = useLoader(TextureLoader,[
        terRoughness,
        terNormal
    ])

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping
            t.wrapT = RepeatWrapping
            t.repeat.set(5, 5)
        })

        normal.encoding = LinearEncoding
    }, [normal, roughness])

    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
                envMapIntensity={1}
                normalMap={normal}
                normalScale={[0.15, 0.15]}
                roughnessMap={roughness}
                dithering={true}
                color={[0.05, 0.05, 0.05]}
                roughness={0.7}
                blur={[500, 200]}
                mixBlur={10}
                mixStrength={50}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectorOffset={0.2}
            />
        </mesh>
    )
}

export default Ground;