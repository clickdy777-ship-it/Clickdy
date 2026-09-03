"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/character.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    // Play whatever animation clip came in the file (the Mixamo "Pointing" clip),
    // looping continuously.
    if (names.length > 0) {
      const action = actions[names[0]];
      action?.reset().fadeIn(0.4).play();
      if (action) {
        action.loop = THREE.LoopRepeat;
      }
    }
    return () => {
      if (names.length > 0) actions[names[0]]?.fadeOut(0.3);
    };
  }, [actions, names]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.35} position={[0, -1.9, 0]} />
    </group>
  );
}

export default function Character3D() {
  return (
    <div className="relative w-full h-[420px] md:h-[520px]">
      <Canvas camera={{ position: [0, 0.2, 3.2], fov: 32 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 4, 3]} intensity={1.2} />
        <directionalLight position={[-2, 2, -2]} intensity={0.4} color="#a855f7" />
        <Avatar />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/character.glb");