import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './Components/Joke';
import { jokes } from './joke.js';

const App = (props) => {
  return (
    <>
      <div className="container">
        <Joke seznamVtipu={jokes} />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
