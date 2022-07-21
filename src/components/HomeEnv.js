import { OrbitControls } from '@react-three/drei';
import { React, Suspense } from 'react';
import Boule from '../3DModels/Boule';
import Casque from '../3DModels/Casque';
import Dispositif from '../3DModels/Dispositif';
import TheEnvironment from '../3DModels/TheEnvironment';
import Model from '../3DModels/Model';
import Restau from '../3DModels/Restau';
import ProgressLoader from '../Loaders/ProgressLoader';
import TheCamera from '../Staging/TheCamera';

function HomeEnv() {
  return (
    <>
      <Suspense fallback={<ProgressLoader />}>
        <TheCamera />
        <TheEnvironment />
        <OrbitControls />
        <Casque />
        <Model />
        <Boule />
        <Dispositif />
        <Restau />
      </Suspense>
    </>
  );
}

export default HomeEnv;
