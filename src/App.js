// import React, { useState } from 'react';
import React, { Component } from 'react';
import classes from './App.css';

import Person from'./Person/Person';
import ErrorBoundary from'./ErrorBoundary/ErrorBoundary';
/* This is first way to use react code */
class App extends Component{

  state = {
    persons : [
        {id: 'sdfsds', name: 'Max', age: 28},
        {id: 'asdsdf', name: 'Manu', age: 29},
        {id: 'dfgfgs', name: 'Stephanie', age: 26},
        ],
      otherState: 'some other value',
      showPersons: false
  };

  /*switchNameHandler = (newName) => {
    // console.log('Was clicked!');
      // DON"T DO THIS: personsState.persons[0].name = 'Sumit';
      this.setState({
          persons: [
              {id: 'sdfsds', name: newName, age: 28},
              {id: 'asdsdf', name: 'Manu', age: 29},
              {id: 'dfgfgs', name: 'Stephanie', age: 26},
          ]
      })

  };*/

  nameChangeHandler = (event, id ) => {
      console.log("event Value : ", event.target.value);
      const personIndex = this.state.persons.findIndex(p => {
          return p.userId === id;
      });

      console.log("personIndex : ", personIndex);
      const person = {...this.state.persons[personIndex]};

      console.log("Person Value : ", person);
    // const person = Object.assign({}, this.state.persons[personIndex]);
      person.name = event.target.value;
      const persons = [...this.state.persons];
      console.log("Persons  : ", persons);
      console.log(" persons[personIndex]  : ",  persons[personIndex]);
      persons[personIndex] = person;

    this.setState( {persons: persons} );
  };
    deletePersonHandler = (personIndex) => {
        console.log("Index : ", personIndex);
       // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow})
    };

  render() {
      let btnClass = null;
/*
      const style = {
          backgroundColor: 'green',
          color: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };*/

      let persons = null;
      // console.log("this.state.showPersons", this.state.showPersons);
      if(this.state.showPersons) {
          persons =(
              <div>
                  {this.state.persons.map((person, index) => {
                     return <ErrorBoundary  key={person.id}><Person
                         click={ () => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.nameChangeHandler (event, person.id)}
                      >
                          My Hobbies: Racing
                     </Person> </ErrorBoundary>
                  })}
                 {/* <Person
                      name={this.state.persons[0].name}
                      age={this.state.persons[0].age}
                  >
                      My Hobbies: Racing
                  </Person>
                  <Person
                      name={this.state.persons[1].name}
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler.bind(this, 'Sum!')}
                      changed={this.nameChangeHandler}
                  >
                      My Hobbies: Racing
                  </Person>
                  <Person
                      name={this.state.persons[2].name}
                      age={this.state.persons[2].age}>
                      My Hobbies: Racing
                  </Person>*/}
              </div>
          );
          // style.backgroundColor= 'red';
            btnClass = classes.Red

      }
        /*This is way to use dynamically style in the html*/
      // let classes  = ['red', 'bold'].join(' ');
      /*Second way to use dynamically style in the html*/
      let assignedClasses  = [];
      if (this.state.persons.length <= 2) {
          assignedClasses.push(classes.red)
      }
      if (this.state.persons.length <= 1) {
          assignedClasses.push(classes.bold)
      }
    return (

            <div className={classes.App}>
              <h1> Hi, I'm a React App</h1>
              <p className={assignedClasses.join(' ')}> This is really working</p>
                {/*You can bind the data in the button*/}
              {/*<button onClick ={this.switchNameHandler.bind(this, 'Sumit')}>Switch Name</button>*/}
             {/* <button style={style} onClick ={ () => this.switchNameHandler.bind('Sumit')}>Switch Name</button>*/}
              <button className={btnClass} onClick ={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default App;
/* Second Way to write the same code to another way*/
 /*const  App = props => {
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
          <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age}>
              My Hobbies: Racing
          </Person>
          <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
          >
              My Hobbies: Racing
          </Person>
          <Person
              name={personsState.persons[2].name}
              age={personsState.persons[2].age}>
              My Hobbies: Racing
          </Person>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
};
export default App;

*/



