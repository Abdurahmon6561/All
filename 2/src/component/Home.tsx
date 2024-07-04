import React from "react";

interface HomeProps {
  message: string;
  onSubmit: (n: string) => void;
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <h1>{props.message}</h1>
      <button onClick={() => props.onSubmit("Submited by button")}>
        Submit
      </button>
    </div>
  );
};

export default Home;
