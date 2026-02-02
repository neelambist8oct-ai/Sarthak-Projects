import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import * as THREE from "three";

export default function Sarthak3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/sarthak.jpg");

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[4, -22, 0]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      <mesh position={[4, -22, -0.1]}>
        <ringGeometry args={[2.05, 2.15, 32]} />
        <meshBasicMaterial color="#00a8ff" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

useTexture.preload("/sarthak.jpg");
