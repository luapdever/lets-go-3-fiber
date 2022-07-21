import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function TheCamera() {
  const camera = useRef();

  useFrame((state, delta) => {
    state.camera.rotation.y += 0.01;
    console.log(state.camera.rotation.y);
  });
  return (
    <>
      <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 5]} />
    </>
  );
}

export default TheCamera;
