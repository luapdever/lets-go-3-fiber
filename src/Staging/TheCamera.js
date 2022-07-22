import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';

function TheCamera() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </>
  );
}

export default TheCamera;
