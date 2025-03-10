'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react"
import * as THREE from "three";
const Cube = ({position, size}: {position: Array<number>, size: Array<number>}) => {
  const ref = useRef<THREE.Mesh>(null)

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
