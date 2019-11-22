import React from 'react';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const Sessions = () => {
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const onChange = event => setValue(event.target.value);

  return (
    <div>
      <p>This value is stored locally in browser (i.e. cached)<br /><span className="aqua">Comes from Session.js</span></p>

      <input id="sessionval" value={value} type="text" onChange={onChange} />

      <p id="ptag">{value}</p>
    </div>
  );
};

export default Sessions;
