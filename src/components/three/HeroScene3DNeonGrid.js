"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Grid, Float } from "@react-three/drei";
import { useRef } from "react";

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.045) * 0.35;
    camera.position.z = 7.2 + Math.sin(t * 0.02) * 0.15;
    camera.position.y = 0.55 + Math.sin(t * 0.035) * 0.07;
    camera.lookAt(0, -0.4, -2);
  });
  return null;
}

function AccentRings() {
  const g = useRef(null);
  useFrame((_, delta) => {
    if (g.current) g.current.rotation.y += delta * 0.12;
  });
  return (
    <group ref={g} position={[0, 0.2, -1]}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <mesh>
          <torusGeometry args={[1.45, 0.018, 16, 100]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.55} />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh rotation={[Math.PI / 2.8, 0, 0]}>
          <torusGeometry args={[2.1, 0.012, 16, 80]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function MovingLights() {
  const a = useRef(null);
  const b = useRef(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (a.current) {
      a.current.position.x = Math.sin(t * 0.7) * 4.5;
      a.current.position.z = Math.cos(t * 0.5) * 2.5 - 1;
    }
    if (b.current) {
      b.current.position.x = Math.cos(t * 0.55) * 3.8;
      b.current.position.z = Math.sin(t * 0.65) * 2.8 - 2;
    }
  });
  return (
    <>
      <pointLight ref={a} position={[2, 1.2, 1]} intensity={1.1} color="#38bdf8" distance={16} decay={2} />
      <pointLight ref={b} position={[-2, 0.8, 0]} intensity={0.75} color="#c084fc" distance={14} decay={2} />
    </>
  );
}

export default function HeroScene3DNeonGrid() {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full">
      <Canvas
        camera={{ position: [0, 0.55, 7.2], fov: 42 }}
        gl={{ antialias: true, alpha: false, powerPreference: "default" }}
        dpr={[1, 1.25]}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 7, 30]} />
        <CameraRig />
        <ambientLight intensity={0.06} />
        <directionalLight position={[4, 10, 6]} intensity={0.22} color="#e4e4e7" />
        <MovingLights />
        <AccentRings />
        <Grid
          position={[0, -1.9, -2]}
          infiniteGrid
          fadeDistance={38}
          fadeStrength={5.5}
          sectionSize={1.15}
          cellSize={0.55}
          sectionThickness={1.1}
          cellThickness={0.65}
          sectionColor="#0ea5e9"
          cellColor="#0c0e14"
          followCamera={false}
        />
      </Canvas>
    </div>
  );
}
