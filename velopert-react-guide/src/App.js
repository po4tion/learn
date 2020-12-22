import React, {Component} from 'react';
import './App.css';
// import Validation from './Validation/Validation';
// import ScrollBox from './ScrollBox/ScrollBox';
// import Iteration from './Iteration/Iteration';
import LifeCycle from './LifeCycle/LifeCycle';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);    
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({color: getRandomColor()});
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycle color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
