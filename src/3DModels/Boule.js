import React, { useState } from 'react';

function Boule() {
  const [active, setActive] = useState(false);

  return (
    <>
      <mesh
        position={[3, 0, -3]}
        receiveShadow
        rotation={[0, Math.PI / 3, 0]}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
      >
        <sphereGeometry args={[1, 10, 10]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default Boule;
