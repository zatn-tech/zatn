"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";

/** GPU displacement — avoids CPU vertex loops + normal bugs that made waves look “dead” */
const WAVES_VS = `
uniform float uTime;
varying vec2 vUv;
varying float vHeight;

void main() {
  vUv = uv;
  float x = position.x;
  float y = position.y;
  float w =
    sin(x * 0.38 + uTime * 0.62) * 0.5 +
    cos(y * 0.31 + uTime * 0.48) * 0.4 +
    sin((x + y) * 0.16 + uTime * 0.38) * 0.26;
  vHeight = w;
  vec3 pos = vec3(x, y, w);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const WAVES_FS = `
varying vec2 vUv;
varying float vHeight;

void main() {
  float h = clamp(vHeight * 0.45 + 0.58, 0.0, 1.0);
  vec3 deep = vec3(0.02, 0.04, 0.1);
  vec3 mid = vec3(0.08, 0.22, 0.48);
  vec3 rim = vec3(0.2, 0.45, 0.75);
  float pulse = sin(vUv.x * 8.0 + vHeight * 5.0) * 0.5 + 0.5;
  vec3 col = mix(deep, mid, h);
  col = mix(col, rim, pulse * 0.25 * h);
  col += vec3(0.04, 0.1, 0.18) * pow(max(0.0, vHeight + 0.2), 1.8);
  gl_FragColor = vec4(col, 1.0);
}
`;

function WaveField() {
  const meshRef = useRef(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  );

  useFrame((state) => {
    const m = meshRef.current?.material;
    if (m?.uniforms?.uTime) {
      m.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.72, 0]}>
      <planeGeometry args={[44, 28, 96, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={WAVES_VS}
        fragmentShader={WAVES_FS}
        toneMapped={false}
      />
    </mesh>
  );
}

function CameraRig() {
  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.036) * 0.14;
    camera.position.y = 0.5 + Math.sin(t * 0.026) * 0.06;
    camera.lookAt(0, -0.35, -1.5);
  });
  return null;
}

export default function HeroScene3DWaves() {
  return (
    <div className="absolute inset-0 h-full min-h-[100dvh] w-full [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full">
      <Canvas
        camera={{ position: [0, 0.5, 7.5], fov: 36 }}
        gl={{ antialias: true, alpha: false, powerPreference: "default" }}
        dpr={[1, 1.25]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000008, 1);
        }}
      >
        <color attach="background" args={["#000008"]} />
        <CameraRig />
        <WaveField />
        <Sparkles count={52} scale={22} size={2.2} opacity={0.22} color="#93c5fd" />
      </Canvas>
    </div>
  );
}
