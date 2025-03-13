'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react"
import * as THREE from "three";
const Cube = ({position, size}: {position: Array<number>, size: Array<number>}) => {
  const ref = useRef<THREE.Mesh>(null)
  const scrollSpeed = 0.1;

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (ref.current) {
        if (ref.current.position.z - (event.deltaY * scrollSpeed * 0.01) < -5.0) {
          ref.current.position.z = -5.0
        }
        else if (ref.current.position.z - (event.deltaY * scrollSpeed * 0.01) > 3.5) {
          ref.current.position.z = 3.5
        }
        else {
          ref.current.position.z -= event.deltaY * scrollSpeed * 0.01;
        }
        
        console.log(ref.current.position.z)
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useFrame((state, delta) => {
      ref.current.rotation.x += delta / 2
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  )
}

export default function Home() {
  return (
    <div className="canvas-container">
      <Canvas>
        <directionalLight position={[0, 0, 2]}/>
        <Cube position={[2, 0, 0]} size={[1, 1, 1]} /> 
      </Canvas>
    </div>
  );
}
