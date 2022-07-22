import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef, useState } from 'react';

const Dispositif = () => {
  const [isRot, setIsRot] = useState(false);
  const mesh = useRef();
  const dispositif = useLoader(GLTFLoader, 'hdri/dispositif.gltf');

  return (
    <>
      <primitive
        onClick={() => setIsRot(!isRot)}
        ref={mesh}
        position={[-5, -5, -5]}
        object={dispositif.scene}
        scale={1}
      ></primitive>
    </>
  );
};

export default Dispositif;
