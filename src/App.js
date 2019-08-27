import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import PersonCls from './PersonCls/PersonCls';

function App() {
  return (
    <div className="App">
      <h1>I'm Supreeth Kumar</h1>
      <Person name="Supreeth" age ="20"></Person>
      <Person name="Supreeth" age ="25">
        <h2>This is child</h2>
      </Person>
      <PersonCls name="Supreeth" age ="30"></PersonCls>
    </div>
  );
}

export default App;
