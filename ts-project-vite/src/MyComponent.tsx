import React from 'react';

interface MyComponentProps {
  text: string;
  isActive: boolean;
  count: number;
  callback: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, isActive, count, callback }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{isActive ? 'Active' : 'Inactive'}</p>
      <p>Count: {count}</p>
      <button onClick={callback}>Click me</button>
    </div>
  );
};

export default MyComponent;
