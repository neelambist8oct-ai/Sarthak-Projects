import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

export default function Founder3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smoothly look at the camera
      const targetRotation = Math.atan2(
        state.camera.position.x - groupRef.current.position.x,
        state.camera.position.z - groupRef.current.position.z,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation,
        0.05,
      );
    }
  });

  const creeperGreen = "#4aa34f";
  const creeperDark = "#1a1a1a";

  return (
    <group position={[0, -18, 0]} ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 2.8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={creeperGreen} />

        {/* Face (Simple representation) */}
        <group position={[0, 0, 0.51]}>
          {/* Eyes */}
          <mesh position={[-0.2, 0.1, 0]}>
            <planeGeometry args={[0.2, 0.2]} />
            <meshBasicMaterial color={creeperDark} />
          </mesh>
          <mesh position={[0.2, 0.1, 0]}>
            <planeGeometry args={[0.2, 0.2]} />
            <meshBasicMaterial color={creeperDark} />
          </mesh>
          {/* Mouth */}
          <mesh position={[0, -0.2, 0]}>
            <planeGeometry args={[0.3, 0.4]} />
            <meshBasicMaterial color={creeperDark} />
          </mesh>
        </group>
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.7, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color={creeperGreen} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.25, 0.5, 0.25]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color={creeperGreen} />
      </mesh>
      <mesh position={[0.25, 0.5, 0.25]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color={creeperGreen} />
      </mesh>
      <mesh position={[-0.25, 0.5, -0.25]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color={creeperGreen} />
      </mesh>
      <mesh position={[0.25, 0.5, -0.25]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color={creeperGreen} />
      </mesh>

      {/* Floating Label */}
      <Html position={[0, -1, 0]} center transform>
        <div className="text-text font-bold text-xl tracking-widest uppercase opacity-50 pointer-events-none select-none">
          Pratham
        </div>
      </Html>
    </group>
  );
}
