import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Dong-Gyu', age: 26 },
      { name: 'Myung-Gyu', age: 24 },
      { name: 'Max', age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DONT'T DO THIS => this.state.persons[0].name = 'Kim Dong Gyu';
    setPersonsState({
      persons: [
        { name: 'Kim Dong-Gyu', age: 26 },
        { name: 'Kim Myung-Gyu', age: 24 },
        { name: 'Maximilian', age: 28 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies : Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', { className: 'App' },
  //   React.createElement('h1', null, "I\'m a React App!!!"));
  // html에서 onclick, jsx에서는 onClick
  // this.switchNameHandler()는 기능이 바로 실행된다. '()'를 제거하면 우리가 클릭을 할때만 기능이 실행된다.
};

export default App;