"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.22;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#2BE0C4"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.1}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[8, 8, 8]} intensity={2} color="#a855f7" />
        <pointLight position={[-8, -5, 5]} intensity={1.4} color="#2BE0C4" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}