"use client";

/**
 * “Aurora” variant: atmospheric 3D only (no fullscreen shader).
 * Cool blue/slate lighting + floating shapes — readable and stable across GPUs.
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.048) * 0.2;
    camera.position.y = 0.22 + Math.sin(t * 0.034) * 0.08;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContent() {
  const group = useRef(null);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.09;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.28} floatIntensity={0.48}>
        <mesh castShadow>
          <torusKnotGeometry args={[1.02, 0.32, 96, 28]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.9}
            roughness={0.22}
            envMapIntensity={0.75}
          />
        </mesh>
      </Float>
      <Float speed={1.85} rotationIntensity={0.75} floatIntensity={0.85}>
        <mesh position={[2.4, 0.25, -1]}>
          <icosahedronGeometry args={[0.72, 1]} />
          <meshStandardMaterial color="#64748b" wireframe />
        </mesh>
      </Float>
      <Float speed={1.45} rotationIntensity={0.38} floatIntensity={0.55}>
        <mesh position={[-2.1, -0.45, 0.75]}>
          <sphereGeometry args={[0.52, 48, 48]} />
          <meshStandardMaterial color="#334155" metalness={0.75} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene3DAurora() {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0.15, 7.2], fov: 40 }}
        gl={{ antialias: true, alpha: false, powerPreference: "default" }}
        dpr={[1, 1.25]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 1);
        }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 19]} />
        <CameraRig />
        <ambientLight intensity={0.12} />
        <directionalLight
          castShadow
          position={[6, 11, 5]}
          intensity={0.95}
          color="#e2e8f0"
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-6, -2, -4]} intensity={0.14} color="#38bdf8" />
        <pointLight position={[3, 2, 2]} intensity={0.45} color="#38bdf8" distance={18} decay={2} />
        <pointLight position={[-3, 1, -1]} intensity={0.28} color="#818cf8" distance={16} decay={2} />
        <SceneContent />
        <ContactShadows
          position={[0, -2.08, 0]}
          opacity={0.48}
          scale={20}
          blur={2.4}
          far={5}
          color="#000000"
        />
        <Sparkles count={64} scale={14} size={1.8} opacity={0.18} color="#94a3b8" />
        <Stars radius={38} depth={32} count={600} factor={0.4} saturation={0} fade speed={0.32} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.08, 0]} receiveShadow>
          <planeGeometry args={[48, 48]} />
          <meshStandardMaterial color="#020617" metalness={0.1} roughness={0.95} />
        </mesh>
      </Canvas>
    </div>
  );
}
