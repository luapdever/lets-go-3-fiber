import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useRef } from 'react';

const Model = () => {
  const mesh = useRef();
  const imgHdri = useLoader(GLTFLoader, '/hdri/hdriImg.gltf');

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <primitive ref={mesh} object={imgHdri.scene} scale={0.4}></primitive>
    </>
  );
};

export default Model;
