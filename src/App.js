import { Canvas } from '@react-three/fiber';
import { React } from 'react';
import HomeEnv from './components/HomeEnv';

function App() {
  return (
    <div id='canvas-container'>
      <Canvas>
        <HomeEnv />
      </Canvas>
    </div>
  );
}

export default App;
