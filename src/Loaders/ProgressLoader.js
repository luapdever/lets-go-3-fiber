import { Html, useProgress } from '@react-three/drei';

function ProgressLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className='progress-loader'>
        <h2>Loading</h2>
        <p>
          <span className='loader'>{progress.toFixed(0) ?? 0} %</span>
        </p>
        <progress id='progressbar' max='100' value={progress.toFixed(0)}>
          {progress.toFixed(0) ?? 0}%
        </progress>
      </div>
    </Html>
  );
}

export default ProgressLoader;
