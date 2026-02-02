import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BODY_COLOR = "#161616";
const EYE_COLOR = "#e079ff";
const WING_COLOR = "#222222";

const DRAGON_BODY_GEO = new THREE.BoxGeometry(1.5, 1, 3);
const DRAGON_NECK_GEO = new THREE.BoxGeometry(0.6, 0.6, 1);
const DRAGON_HEAD_GEO = new THREE.BoxGeometry(0.8, 0.8, 1);
const DRAGON_WING_GEO = new THREE.BoxGeometry(3, 0.1, 2);
const DRAGON_EYE_GEO = new THREE.PlaneGeometry(0.15, 0.1);
const DRAGON_SPIKE_GEO = new THREE.BoxGeometry(0.2, 0.4, 0.2);

const MAT_DRAGON_BODY = new THREE.MeshStandardMaterial({ color: BODY_COLOR });
const MAT_DRAGON_EYE = new THREE.MeshBasicMaterial({ color: EYE_COLOR });
const MAT_DRAGON_WING = new THREE.MeshStandardMaterial({
  color: WING_COLOR,
  transparent: true,
  opacity: 0.9,
});
const MAT_DRAGON_SPIKE = new THREE.MeshStandardMaterial({ color: "#333333" });

export default function EnderDragon() {
  const groupRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Group>(null);
  const rightWingRef = useRef<THREE.Group>(null);
  const neckRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const speed = 0.5;

    if (groupRef.current) {
      groupRef.current.position.set(
        Math.cos(time * speed) * 15,
        -5 + Math.sin(time * speed * 2) * 2,
        Math.sin(time * speed) * 15,
      );
      groupRef.current.rotation.set(
        0,
        -time * speed + Math.PI / 2,
        Math.sin(time * speed) * 0.2,
      );
    }

    const flapAngle = Math.sin(time * 4) * 0.6;
    if (leftWingRef.current) leftWingRef.current.rotation.z = flapAngle;
    if (rightWingRef.current) rightWingRef.current.rotation.z = -flapAngle;

    if (neckRef.current) neckRef.current.rotation.x = Math.sin(time * 2) * 0.1;
    if (headRef.current)
      headRef.current.rotation.y = Math.sin(time * 1.5) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={DRAGON_BODY_GEO} material={MAT_DRAGON_BODY} />

      <group position={[0, 0, 1.5]} ref={neckRef}>
        <mesh
          position={[0, 0.4, 0.5]}
          geometry={DRAGON_NECK_GEO}
          material={MAT_DRAGON_BODY}
        />
        <group position={[0, 0.8, 1]} ref={headRef}>
          <mesh geometry={DRAGON_HEAD_GEO} material={MAT_DRAGON_BODY}>
            <mesh
              position={[-0.3, 0.1, 0.51]}
              geometry={DRAGON_EYE_GEO}
              material={MAT_DRAGON_EYE}
            />
            <mesh
              position={[0.3, 0.1, 0.51]}
              geometry={DRAGON_EYE_GEO}
              material={MAT_DRAGON_EYE}
            />
          </mesh>
        </group>
      </group>

      <group position={[-0.75, 0.3, 0]} ref={leftWingRef}>
        <mesh
          position={[-1.5, 0, 0]}
          geometry={DRAGON_WING_GEO}
          material={MAT_DRAGON_WING}
        />
      </group>

      <group position={[0.75, 0.3, 0]} ref={rightWingRef}>
        <mesh
          position={[1.5, 0, 0]}
          geometry={DRAGON_WING_GEO}
          material={MAT_DRAGON_WING}
        />
      </group>

      {[1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[0, -0.2 * i, -1.5 - i * 0.8]}
          material={MAT_DRAGON_BODY}
        >
          <boxGeometry args={[0.6 - i * 0.1, 0.6 - i * 0.1, 0.8]} />
        </mesh>
      ))}

      {[0, 0.8, -0.8].map((z, i) => (
        <mesh
          key={i}
          position={[0, 0.6, z]}
          geometry={DRAGON_SPIKE_GEO}
          material={MAT_DRAGON_SPIKE}
        />
      ))}
    </group>
  );
}
