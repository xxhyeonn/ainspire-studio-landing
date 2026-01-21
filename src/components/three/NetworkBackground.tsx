"use strict";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NodePoints = ({ count = 60 }) => {
  const meshRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Generate random positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);

  // Velocities for animation
  const velocities = useMemo(() => {
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      vels[i] = (Math.random() - 0.5) * 0.005;
    }
    return vels;
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const { geometry } = meshRef.current;
    const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

    for (let i = 0; i < count; i++) {
      // Basic movement
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      // Boundary check & bounce
      if (Math.abs(posAttr.array[i * 3]) > 5) velocities[i * 3] *= -1;
      if (Math.abs(posAttr.array[i * 3 + 1]) > 3) velocities[i * 3 + 1] *= -1;
      if (Math.abs(posAttr.array[i * 3 + 2]) > 2) velocities[i * 3 + 2] *= -1;

      // Mouse interaction (gentle pull)
      const dx = posAttr.array[i * 3] - mouse.current.x * 5;
      const dy = posAttr.array[i * 3 + 1] - mouse.current.y * 3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 2) {
        posAttr.array[i * 3] += dx * 0.005;
        posAttr.array[i * 3 + 1] += dy * 0.005;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const Connections = ({ count = 60, maxDistance = 2 }) => {
  const { scene } = useThree();
  const lineRef = useRef<THREE.LineSegments>(null);
  const nodes = useRef<THREE.Vector3[]>([]);

  useEffect(() => {
    // Initial nodes positions (sync with NodePoints ideally, but randomized for effect)
    for (let i = 0; i < count; i++) {
      nodes.current.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ));
    }
  }, [count]);

  useFrame(() => {
    if (!lineRef.current) return;

    const linePositions: number[] = [];
    const points = scene.children.find(c => c.type === "Points") as THREE.Points;
    
    if (points) {
      const positions = points.geometry.getAttribute("position").array;
      
      for (let i = 0; i < count; i++) {
        const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        
        for (let j = i + 1; j < count; j++) {
          const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
          const dist = p1.distanceTo(p2);
          
          if (dist < maxDistance) {
            linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
          }
        }
      }
    }

    const geometry = lineRef.current.geometry;
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry />
      <lineBasicMaterial
        color="#a78bfa"
        transparent
        opacity={0.15}
        depthWrite={false}
      />
    </lineSegments>
  );
};

const NetworkBackground = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#1b0a2e"]} />
        <fog attach="fog" args={["#1b0a2e", 5, 10]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        
        <NodePoints count={70} />
        <Connections count={70} maxDistance={1.8} />

        <SceneController />
      </Canvas>
      
      {/* Visual Overlays for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-electric-purple/10 via-transparent to-neon-purple/10"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#1b0a2e_100%)] opacity-40"></div>
    </div>
  );
};

const SceneController = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    // Smoothed camera movement
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current.y * 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default NetworkBackground;
