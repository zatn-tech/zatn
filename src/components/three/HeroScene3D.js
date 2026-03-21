"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.055) * 0.22;
    camera.position.y = 0.2 + Math.sin(t * 0.038) * 0.09;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function RotatingShapes() {
  const group = useRef(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.15} rotationIntensity={0.32} floatIntensity={0.52}>
        <mesh castShadow>
          <torusKnotGeometry args={[1.08, 0.34, 128, 32]} />
          <meshStandardMaterial
            color="#2d2d2d"
            metalness={0.92}
            roughness={0.2}
            envMapIntensity={0.85}
          />
        </mesh>
      </Float>
      <Float speed={2.1} rotationIntensity={0.95} floatIntensity={1.05}>
        <mesh position={[2.65, 0.35, -1.15]} castShadow>
          <icosahedronGeometry args={[0.78, 1]} />
          <meshStandardMaterial color="#6b6b6b" wireframe />
        </mesh>
      </Float>
      <Float speed={1.55} rotationIntensity={0.42} floatIntensity={0.68}>
        <mesh position={[-2.35, -0.55, 0.85]} castShadow>
          <sphereGeometry args={[0.54, 64, 64]} />
          <MeshDistortMaterial
            color="#454545"
            metalness={0.78}
            roughness={0.16}
            distort={0.34}
            speed={2.1}
          />
        </mesh>
      </Float>
      <Float speed={1.75} rotationIntensity={0.28} floatIntensity={0.48}>
        <mesh position={[0.15, 1.35, -1.95]} castShadow>
          <octahedronGeometry args={[0.52, 0]} />
          <meshStandardMaterial color="#5a5a5a" metalness={0.65} roughness={0.32} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.4}>
        <mesh position={[-1.2, 1.1, 0.5]} castShadow>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshStandardMaterial color="#4a4a4a" metalness={0.55} roughness={0.38} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene3D() {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0.2, 7.5], fov: 40 }}
        gl={{ antialias: true, alpha: false, powerPreference: "default" }}
        dpr={[1, 1.25]}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 4.5, 18]} />
        <CameraRig />
        <ambientLight intensity={0.14} />
        <directionalLight
          castShadow
          position={[8, 12, 6]}
          intensity={1.05}
          color="#f4f4f5"
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-7, -3, -5]} intensity={0.12} color="#52525b" />
        <pointLight position={[0, 3.5, 2]} intensity={0.28} color="#d4d4d8" />
        <RotatingShapes />
        <ContactShadows
          position={[0, -2.12, 0]}
          opacity={0.55}
          scale={22}
          blur={2.2}
          far={5}
          color="#000000"
        />
        <Sparkles count={80} scale={15} size={1.9} opacity={0.2} color="#a1a1aa" />
        <Stars
          radius={42}
          depth={36}
          count={700}
          factor={0.38}
          saturation={0}
          fade
          speed={0.35}
        />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.12, 0]} receiveShadow>
          <planeGeometry args={[48, 48]} />
          <meshStandardMaterial color="#020202" metalness={0.08} roughness={0.96} />
        </mesh>
      </Canvas>
    </div>
  );
}
