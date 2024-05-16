// ..
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [hexColor, setColor] = useState(randomColor);
  const ranCol = randomColor();

  return (
    <>
      <div style={{ backgroundColor: ranCol, fontSize: '100px' }}>
        {hexColor}
      </div>

      <div style={{ backgroundColor: ranCol }}>
        <button
          onClick={() => {
            setColor(ranCol);
          }}
        >
          Generate
        </button>
        <div style={{ fontSize: '60px' }}>Generated Color: {hexColor}</div>
      </div>
    </>
  );
}
