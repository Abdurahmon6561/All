import React from 'react';
import Home from './component/Home';

const handleSubmit = (message: string) => {
  console.log(message);
  
}

function App() {
  return (
    <div>
       <Home onSubmit={handleSubmit} message="Hi"/>
    </div>
  );
}

export default App;
