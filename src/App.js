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

{
  /*
  chalk.hex('#FF8800').bold('Orange!')


  <input />

  <h1 style={{ backgroundColor: '#FF0000' }}>Random Color</h1>

<div style={{ backgroundColor: 'red', height: '200px', width: '200px' }}>
  {hexColor}
</div>


//console.log(getRandomHexColor());
let hexCol = getRandomHexColor();
console.log(hexCol);

const colorName = GetColorName(hexCol); // returns 'Black'
//console.log(hexCol);
console.log(colorName);


const getRandomHexColor = () => {
  // Define an array of hexadecimal digits
  const hexChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  // Generate an array of six random indices from 0 to 15
  const hexIndices = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16),
  );
  // Map each index to its corresponding hex digit and join them into a string
  const hexCode = hexIndices.map((i) => hexChars[i]).join('');
  // Return the string with a "#" prefix
  return `#${hexCode}`;
};
console.log(getRandomHexColor);


*/
}
