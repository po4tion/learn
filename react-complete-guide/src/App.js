import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'Dong-Gyu', age: 26 },
      { id: 'b', name: 'Myung-Gyu', age: 24 },
      { id: 'c', name: 'Max', age: 28 }
    ]
  }

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DONT'T DO THIS => this.state.persons[0].name = 'Kim Dong Gyu';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Kim Myung-Gyu', age: 24 },
        { name: 'Maximilian', age: 28 }
      ],
      otherState: 'some other state',
      showPersons: false
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', { className: 'App' },
  //   React.createElement('h1', null, "I\'m a React App!!!"));
  // html에서 onclick, jsx에서는 onClick
  // this.switchNameHandler()는 기능이 바로 실행된다. '()'를 제거하면 우리가 클릭을 할때만 기능이 실행된다.
};

export default App;