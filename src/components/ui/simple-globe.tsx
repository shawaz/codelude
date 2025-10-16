"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Mesh } from "three";

function Globe() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} scale={1.5}>
      <meshStandardMaterial
        color="#062056"
        roughness={0.7}
        metalness={0.3}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
}

export function SimpleGlobe() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-blue-900 to-purple-900 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
