import React, { useState } from 'react';

/*
I find this is a perfect yet minimal example to illustrate how to pass functions between components as props; and more importantly how to share a function between components. You have one Parent Component which manages the logic and two Child Components – which are siblings – that receive props. These props can always include a callback function to call a function in another component. Basically that’s how it’s possible to call a function in different components in React. https://www.robinwieruch.de/react-function-component/
*/

const FunctionComponent = () => {
  const [greeting, setGreeting] = useState(
    'Function Component Example',
  );

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <Headline headline={greeting} />
      <p className="orange">FunctionComponent.js</p>
      <Input value={greeting} onChangeInput={handleChange}>
        Set My Title:&nbsp;
      </Input>
    </div>
  );
};

const Headline = ({ headline }) => <h3>{headline}</h3>;

const Input = ({ value, onChangeInput, children }) => (
  <label>
    {children}
    <input type="text" value={value} onChange={onChangeInput} />
  </label>
);

export default FunctionComponent;
