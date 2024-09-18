import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from "three";
import { TextureLoader } from 'three';
import frame from "../../assets/images/Frame.png";

const Scene = () => {
    // Correctly reference the texture from the public folder
    let tex = useTexture(frame);
    let cyl = useRef(null);

    useFrame((state, delta) => {
        cyl.current.rotation.y += 0.5 *  delta;  // Rotate the cylinder
    })

    return (
        <group rotation={[-.2, -1, .2]}>

            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 80, 80, true]} />
                <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide}  />
            </mesh>
        </group>
    );
};

export default Scene;
