import React, { useState } from 'react';
import './App.css';
import Person from'./Person/Person'
/* This is first way to use react code */
/*class App extends Component{

  state = {
    persons : [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 26},
        ],
      otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
      // DON"T DO THIS: personsState.persons[0].name = 'Sumit';
      this.setState({
          persons: [
              {name: 'Sumit', age: 28},
              {name: 'Manu', age: 29},
              {name: 'Stephanie', age: 26},
          ]
      })

  };
  render() {
    return (
        <div className="App">
          <h1> Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Racing </Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing </Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing </Person>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;*/
/* Second Way to write the same code to another way*/
 const  App = props => {
    const [personsState, setPersonsState] = useState({
         persons : [
             {name: 'Max', age: 28},
             {name: 'Manu', age: 29},
             {name: 'Stephanie', age: 26},
         ]
     });

    useState('some other value');
    const [otherState, setOhterState] = useState('some other value');
    console.log(personsState, otherState);
    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // DON"T DO THIS: this.state.persons[0].name = 'Sumit';
        setPersonsState({
            persons: [
                {name: 'Sumit', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 26},
            ]
        })

    };
    return (
        <div className="App">
          <h1> Hi, I'm a React App</h1>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Racing </Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing </Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing </Person>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
};
export default App;





