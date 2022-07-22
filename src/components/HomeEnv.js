import { React, Suspense } from 'react';
import Boule from '../3DModels/Boule';
import Casque from '../3DModels/Casque';
import Dispositif from '../3DModels/Dispositif';
import TheEnvironment from '../Staging/TheEnvironment';
import Model from '../3DModels/Model';
import Restau from '../3DModels/Restau';
import ProgressLoader from '../Loaders/ProgressLoader';
import TheCamera from '../Staging/TheCamera';
import TheControls from '../Staging/TheControls';

function HomeEnv() {
  return (
    <>
      <Suspense fallback={<ProgressLoader />}>
        <TheCamera />
        <TheEnvironment />
        <TheControls />
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
