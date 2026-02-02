import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Shared Geometries & Materials for better performance
// Defined outside the component to prevent recreation on every render
const BOX_05 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const BOX_BODY = new THREE.BoxGeometry(0.5, 0.8, 0.25);
const BOX_ARM = new THREE.BoxGeometry(0.2, 0.7, 0.2);
const PLANE_EYE = new THREE.PlaneGeometry(0.3, 0.05);

const MAT_SKIN = new THREE.MeshStandardMaterial({ color: "#fcdada" });
const MAT_SHIRT = new THREE.MeshStandardMaterial({ color: "#00a8a8" });
const MAT_PANTS = new THREE.MeshStandardMaterial({ color: "#3c44aa" });
const MAT_ENDER = new THREE.MeshStandardMaterial({ color: "#161616" });
const MAT_PIG = new THREE.MeshStandardMaterial({ color: "#ff9999" });
const MAT_ZOMBIE_SKIN = new THREE.MeshStandardMaterial({ color: "#54af4b" });
const MAT_ZOMBIE_SHIRT = new THREE.MeshStandardMaterial({ color: "#3c84aa" });
const MAT_ZOMBIE_PANTS = new THREE.MeshStandardMaterial({ color: "#2d2d7a" });

export function Steve({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current)
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });
  return (
    <group position={position} ref={groupRef}>
      <mesh position={[0, 1.5, 0]} geometry={BOX_05} material={MAT_SKIN} />
      <mesh position={[0, 0.85, 0]} geometry={BOX_BODY} material={MAT_SHIRT} />
      <mesh position={[-0.4, 0.85, 0]} geometry={BOX_ARM} material={MAT_SKIN} />
      <mesh position={[0.4, 0.85, 0]} geometry={BOX_ARM} material={MAT_SKIN} />
      <mesh
        position={[-0.15, 0.25, 0]}
        geometry={BOX_ARM}
        material={MAT_PANTS}
      />
      <mesh
        position={[0.15, 0.25, 0]}
        geometry={BOX_ARM}
        material={MAT_PANTS}
      />
    </group>
  );
}

export function Enderman({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const enderEyeMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#e079ff" }),
    [],
  );
  useFrame((state) => {
    if (groupRef.current)
      groupRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 2) * 0.005;
  });
  return (
    <group position={position} ref={groupRef}>
      <mesh position={[0, 3, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <mesh
          position={[0, 0, 0.21]}
          geometry={PLANE_EYE}
          material={enderEyeMat}
        />
      </mesh>
      <mesh position={[0, 1.8, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.4, 2, 0.2]} />
      </mesh>
      <mesh position={[-0.3, 1.5, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
      </mesh>
      <mesh position={[0.3, 1.5, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
      </mesh>
      <mesh position={[-0.15, 0.25, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
      </mesh>
      <mesh position={[0.15, 0.25, 0]} material={MAT_ENDER}>
        <boxGeometry args={[0.15, 2.5, 0.15]} />
      </mesh>
    </group>
  );
}

export function Pig({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const snoutMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#ff3366" }),
    [],
  );
  useFrame((state) => {
    if (groupRef.current)
      groupRef.current.position.x += Math.cos(state.clock.elapsedTime) * 0.005;
  });
  return (
    <group position={position} ref={groupRef}>
      <mesh position={[0, 0.4, 0]} material={MAT_PIG}>
        <boxGeometry args={[0.6, 0.5, 0.9]} />
      </mesh>
      <mesh position={[0, 0.6, 0.4]} material={MAT_PIG}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <mesh position={[0, -0.05, 0.21]} material={snoutMat}>
          <boxGeometry args={[0.2, 0.15, 0.1]} />
        </mesh>
      </mesh>
      {[
        [-0.2, 0.1, 0.3],
        [0.2, 0.1, 0.3],
        [-0.2, 0.1, -0.3],
        [0.2, 0.1, -0.3],
      ].map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          material={MAT_PIG}
        >
          <boxGeometry args={[0.15, 0.25, 0.15]} />
        </mesh>
      ))}
    </group>
  );
}

export function Zombie({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current)
      groupRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 1.5) * 0.003;
  });
  return (
    <group position={position} ref={groupRef}>
      <mesh
        position={[0, 1.5, 0]}
        geometry={BOX_05}
        material={MAT_ZOMBIE_SKIN}
      />
      <mesh
        position={[0, 0.85, 0]}
        geometry={BOX_BODY}
        material={MAT_ZOMBIE_SHIRT}
      />
      <mesh
        position={[-0.4, 1.0, 0.3]}
        rotation={[Math.PI / 2, 0, 0]}
        material={MAT_ZOMBIE_SKIN}
      >
        <boxGeometry args={[0.2, 0.7, 0.2]} />
      </mesh>
      <mesh
        position={[0.4, 1.0, 0.3]}
        rotation={[Math.PI / 2, 0, 0]}
        material={MAT_ZOMBIE_SKIN}
      >
        <boxGeometry args={[0.2, 0.7, 0.2]} />
      </mesh>
      <mesh
        position={[-0.15, 0.25, 0]}
        geometry={BOX_ARM}
        material={MAT_ZOMBIE_PANTS}
      />
      <mesh
        position={[0.15, 0.25, 0]}
        geometry={BOX_ARM}
        material={MAT_ZOMBIE_PANTS}
      />
    </group>
  );
}

export function Cow({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const COW_MAT = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#4d3319" }),
    [],
  );
  const HORN_MAT = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#f0f0f0" }),
    [],
  );
  useFrame((state) => {
    if (groupRef.current)
      groupRef.current.rotation.y += Math.sin(state.clock.elapsedTime) * 0.002;
  });
  return (
    <group position={position} ref={groupRef}>
      <mesh position={[0, 0.5, 0]} material={COW_MAT}>
        <boxGeometry args={[0.7, 0.6, 1.2]} />
      </mesh>
      <mesh position={[0, 0.8, 0.6]} material={COW_MAT}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <mesh position={[-0.2, 0.3, 0]} material={HORN_MAT}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
        </mesh>
        <mesh position={[0.2, 0.3, 0]} material={HORN_MAT}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
        </mesh>
      </mesh>
      {[
        [-0.25, 0.2, 0.4],
        [0.25, 0.2, 0.4],
        [-0.25, 0.2, -0.4],
        [0.25, 0.2, -0.4],
      ].map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          material={COW_MAT}
        >
          <boxGeometry args={[0.2, 0.4, 0.2]} />
        </mesh>
      ))}
    </group>
  );
}
