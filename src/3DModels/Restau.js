import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useState } from 'react';

const Restau = () => {
  const [isRot, setIsRot] = useState(false);
  const mesh = useRef();
  const restau = useLoader(GLTFLoader, '/hdri/restau.gltf');

  return (
    <>
      <primitive
        onClick={() => setIsRot(!isRot)}
        ref={mesh}
        position={[-5, -5, -5]}
        object={restau.scene}
        scale={1}
      ></primitive>
    </>
  );
};

export default Restau;
