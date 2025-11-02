'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

// Cute 3D Avatar with smiling expression
function AvatarHead({ mousePos }) {
  const headRef = useRef();
  const [lookAt, setLookAt] = useState([0, 0]);

  useFrame((state, delta) => {
    if (headRef.current && mousePos.current && typeof window !== 'undefined') {
      const { x, y } = mousePos.current;
      
      // Calculate look direction - only for eyes, not head rotation
      const lookX = (x / window.innerWidth - 0.5) * 2;
      const lookY = -(y / window.innerHeight - 0.5) * 2;
      
      // Update eyes look position only
      setLookAt([
        Math.max(-0.025, Math.min(0.025, lookX * 0.1)),
        Math.max(-0.025, Math.min(0.025, lookY * 0.1))
      ]);
    }
  });

  return (
    <group ref={headRef} position={[0, -0.1, 0]}>
      {/* Head - Main sphere - Cute and rounded */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial 
          color="#f4d5b8" 
          roughness={0.7}
          metalness={0.05}
        />
      </mesh>

      {/* Hair - Cute style with bangs */}
      <mesh position={[0, 0.85, 0.05]} castShadow>
        <sphereGeometry args={[0.54, 32, 32, 0, Math.PI, 0, Math.PI * 0.85]} />
        <meshStandardMaterial color="#2c1810" roughness={0.8} />
      </mesh>
      
      {/* Bangs */}
      <mesh position={[0, 0.75, 0.4]} castShadow>
        <boxGeometry args={[0.5, 0.15, 0.1]} />
        <meshStandardMaterial color="#2c1810" />
      </mesh>

      {/* Left Eye - Bigger and cuter */}
      <group position={[-0.13, 0.62, 0.48]}>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[lookAt[0], lookAt[1], 0.06]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Right Eye - Bigger and cuter */}
      <group position={[0.13, 0.62, 0.48]}>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[lookAt[0], lookAt[1], 0.06]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Nose - Smaller and cuter */}
      <mesh position={[0, 0.52, 0.52]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#e8c4a0" roughness={0.7} />
      </mesh>

      {/* Mouth - Cute smile */}
      <group position={[0, 0.35, 0.5]}>
        {/* Upper lip */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 8, 0, 0]}>
          <torusGeometry args={[0.1, 0.015, 8, 16, Math.PI * 0.6]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
        {/* Lower lip - smile */}
        <mesh rotation={[Math.PI / 8, 0, 0]}>
          <torusGeometry args={[0.12, 0.015, 8, 16, Math.PI * 0.8]} />
          <meshStandardMaterial color="#d4a574" />
        </mesh>
      </group>

      {/* Headphones - Stylized */}
      <mesh position={[0, 0.72, 0.3]} rotation={[-Math.PI / 6, 0, 0]} castShadow>
        <torusGeometry args={[0.58, 0.06, 8, 32, Math.PI * 0.7]} />
        <meshStandardMaterial color="#c9a86b" metalness={0.2} />
      </mesh>
      
      {/* Left Ear Cup */}
      <mesh position={[-0.48, 0.68, 0.15]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
        <meshStandardMaterial color="#f4d03f" metalness={0.4} roughness={0.3} />
      </mesh>
      
      {/* Right Ear Cup */}
      <mesh position={[0.48, 0.68, 0.15]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
        <meshStandardMaterial color="#f4d03f" metalness={0.4} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Main Scene Component
function Scene({ mousePos }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} castShadow />
      <pointLight position={[-2, 3, 3]} intensity={0.3} color="#00f5ff" />
      <pointLight position={[2, 2, 2]} intensity={0.4} />
      <AvatarHead mousePos={mousePos} />
    </>
  );
}

// Main Component
export default function Avatar3D() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize mouse position to center
    mousePos.current = {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    };
    
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  if (!isClient) return <div className="w-full h-full bg-gray-800 rounded-full"></div>;

  return (
    <div className="w-full h-full relative cursor-none">
      <Canvas
        style={{ background: 'transparent' }}
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.05, 2.6], fov: 45 }}
      >
        <Scene mousePos={mousePos} />
      </Canvas>
    </div>
  );
}

