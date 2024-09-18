import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import "../../style.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import ScrollingText from './ScrollingText';
import React from 'react';

const Home3dMaterial = () => {
  return (
    <section className="relative h-[90vh] w-full bg-black">
      <Canvas camera={{ fov: 36 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={2} />
        {/* <pointLight color="#ffffff" intensity={0} position={[10, 10, 10]} /> */}
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={12.5}
            luminanceThreshold={0}// Controls the brightness threshold for the glow effect.
            luminanceSmoothing={0.2}// Smooths the glow effect transition.
            mipmapBlur={true}// Enable mipmap blur for better bloom quality
          />
        </EffectComposer>
      </Canvas>
      <ScrollingText />
    </section>
  );
};

export default Home3dMaterial;
