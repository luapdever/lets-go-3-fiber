import { OrbitControls } from '@react-three/drei';
import React from 'react';

function TheControls() {
  return (
    <>
      <OrbitControls
        minDistance={-200}
        maxDistance={200}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
    </>
  );
}

export default TheControls;
