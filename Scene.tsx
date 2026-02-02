import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Ribbon from "./Ribbon";
import Founder3D from "./Founder3D";
import Hero from "../dom/Hero";
import Manifesto from "../dom/Manifesto";
import Features from "../dom/Features";
import Founder from "../dom/Founder";
import Particles from "./Particles";
import DiscordCTA from "../dom/DiscordCTA";
import Footer from "../dom/Footer";
import { Steve, Enderman, Pig, Zombie, Cow } from "./MinecraftCharacters";
import EnderDragon from "./EnderDragon";
import Sarthak3D from "./Sarthak3D";

import { Suspense } from "react";
import { Preload, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 35 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="w-full h-full"
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Preload all />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />

      <Suspense fallback={null}>
        <Particles count={50} />
        <EnderDragon />
        <Sarthak3D />
        <Steve position={[-3, -11, 2]} />
        <Enderman position={[4, -12.5, -1]} />
        <Pig position={[-2, -13.5, 3]} />
        <Zombie position={[2.5, -11.5, 4]} />
        <Cow position={[4, -14, 2]} />
      </Suspense>

      <ScrollControls pages={6.5} damping={0.3}>
        <Suspense fallback={null}>
          <Ribbon />
          <Founder3D />
        </Suspense>

        <Scroll html style={{ width: "100%", height: "100%" }}>
          <Hero />
          <Manifesto />
          <div style={{ height: "30vh" }}></div>
          <Features />
          <div style={{ height: "10vh" }}></div>
          <DiscordCTA />
          <div style={{ height: "40vh" }}></div>
          <Founder />
          <div style={{ height: "20vh" }}></div>
          <Footer />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
