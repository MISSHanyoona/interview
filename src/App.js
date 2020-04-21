import React, {useState} from 'react';
import './App.css';
import PictureSelect from './components/PictureSelect'
const pictures = [
  {
    id: '1',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '2',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
  {
    id: '3',
    name: 'foo',
    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
  },
];
function App() {
  const [value, setValue] = useState(['1']);
  console.log('value',value);
  
  return (
    <div>
      <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)}></PictureSelect>
    </div>
  );
}

export default App;
