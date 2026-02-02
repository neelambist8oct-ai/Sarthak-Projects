import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "@react-three/drei";

export default function Ribbon() {
  const scroll = useScroll();
  // const { height } = useThree((state) => state.viewport);

  const curve = useMemo(() => {
    // Longer/More complex S-curve flowing downwards
    const points = [];

    // Start top right
    points.push(new THREE.Vector3(4, 5, 0));
    // Curve left
    points.push(new THREE.Vector3(-2, 2, 2));
    // Curve right and down
    points.push(new THREE.Vector3(2, -4, 1));
    // Curve left huge
    points.push(new THREE.Vector3(-3, -10, 3));
    // End near founder
    points.push(new THREE.Vector3(0, -18, 0));

    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
  }, []);

  useFrame((state) => {
    const offset = scroll.offset; // 0 to 1

    // Move camera down along Y axis
    // Start at Y=0, End at Y = -25 (covering the curve and footer)
    const targetY = -offset * 25;

    // Smooth dampening is handled by ScrollControls, but we map offset directly here
    // We can add a bit of parallax ease

    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      0.1,
    );

    // Also subtle lookAt deviation?
    state.camera.lookAt(0, targetY - 5, 0);
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <tubeGeometry args={[curve, 64, 1.2, 12, false]} />
        <meshPhysicalMaterial
          color="#F5F5F0" // Very subtle off-white
          roughness={0.4}
          metalness={0.1}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
