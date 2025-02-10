import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";


const Car = ({car}) => {

    const model = useGLTF(car.path)
    useEffect(() => {
        model.scene.scale.set(car.scale, car.scale, car.scale)
        model.scene.position.set(0, -0.035, 0)
        model.scene.traverse((obj) => {
            if(obj instanceof Mesh) {
                obj.castShadow = true
                obj.receiveShadow = true
                obj.material.envMapIntensity = 10
            }
        })
    }, [model])

    return <primitive object={model.scene} />
}

export default Car;