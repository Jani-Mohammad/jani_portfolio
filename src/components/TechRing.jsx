import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

function RingMesh({ color = "#61dafb" }) {
  const segments = 5;
  const rings = useMemo(() => Array.from({ length: segments }), []);
  return (
    <>
      {rings.map((_, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, (i / segments) * Math.PI * 2]}
          position={[0, 0, -0.6]}   // slight push back
        >
          <torusGeometry args={[2.8 + i * 0.22, 0.05, 16, 96]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} />
        </mesh>
      ))}
    </>
  );
}

function FloatingOrbs() {
  const colors = ["#22d3ee", "#a78bfa", "#34d399", "#f472b6"];
  return (
    <>
      {colors.map((c, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.6} floatIntensity={0.6}>
          <mesh position={[Math.cos(i) * 2.0, Math.sin(i) * 1.0, -1.2 + i * 0.35]}>
            <sphereGeometry args={[0.16 + i * 0.04, 32, 32]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.32} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function TechRing() {
  return (
    <div className="techring">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
          <RingMesh />
        </Float>
        <FloatingOrbs />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  );
}