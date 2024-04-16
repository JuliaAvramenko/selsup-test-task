import React from 'react';
import Form from './components/Form/Form';
import { modelData } from './mockData/data';


function App() {

  return (
    <div className="App">
      <Form params={[]} model={modelData} />
    </div>
  );
}

export default App;
