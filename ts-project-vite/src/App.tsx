import React from 'react';
import MyComponent from './MyComponent';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="App">
      <MyComponent text="Hello, World!" isActive={true} count={42} callback={handleClick} />
    </div>
  );
};

export default App;
