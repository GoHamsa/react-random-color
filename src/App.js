import randomColor from 'randomcolor';
//var randomHex = require('random-hex');
import { useState } from 'react';

export default function App() {
  const [hexColor, setColor] = useState(randomColor);
  //const [message, setMessage] = useState('initial Color');
  const ranCol = randomColor();

  return (
    <>
      <div style={{ backgroundColor: ranCol, fontSize: '100px' }}>
        {hexColor}
      </div>

      <div style={{ backgroundColor: ranCol }}>
        <button
          onClick={() => {
            //setMessage('Generated Color: ');
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
