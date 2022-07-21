import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useState } from 'react';

const Casque = () => {
  const [isRot, setIsRot] = useState(false);
  const mesh = useRef();
  const casque = useLoader(GLTFLoader, '/hdri/casque.gltf');
  useFrame((state, delta) => {
    if (isRot) {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x += 0.01;
    }
  });

  return (
    <>
      <primitive
        onClick={() => setIsRot(!isRot)}
        ref={mesh}
        position={[-5, 0, -5]}
        object={casque.scene}
        scale={1}
      ></primitive>
    </>
  );
};

export default Casque;
