// import React, { useState } from 'react';
import React, { Component } from 'react';

import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary"
import AuthContext from "../context/auth-context"
/* This is first way to use react code */
class App extends Component{

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');

    }
  state = {
    persons : [
        {id: 'sdfsds', name: 'Max', age: 28},
        {id: 'asdsdf', name: 'Manu', age: 29},
        {id: 'dfgfgs', name: 'Stephanie', age: 26},
        ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
  };
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    /* componentWillMount() {
         console.log('[App.js] componentWillMount');
     }*/

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
          return p.id === id;
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

    this.setState((prevState, props) => {
        return {
            persons: persons,
            changeCounter: prevState.changeCounter + 1
        }
    }) ;
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

    loginHandler = () => {
        this.setState({authenticated: true})
    };

  render() {
      console.log('[App.js] render');
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
                  <Persons
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      changed={this.nameChangeHandler}
                      isAuthenticated={this.state.authenticated}
                  />
               /*  {/!* {this.state.persons.map((person, index) => {
                     return <ErrorBoundary  key={person.id}><Person
                         click={ () => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          changed={(event) => this.nameChangeHandler (event, person.id)}
                      >
                          My Hobbies: Racing
                     </Person> </ErrorBoundary>
                  })}*!/}
                 {/!* <Person
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
                  </Person>*!/}*/

          );
          // style.backgroundColor= 'red';


      }
        /*This is way to use dynamically style in the html*/
      // let classes  = ['red', 'bold'].join(' ');
      /*Second way to use dynamically style in the html*/
      console.log("Props: ", this.props);
    return (

            <Aux>
                <button onClick={() => {
                    this.setState({showCockpit: false})
                }}>Remove Cockpit</button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}

                    /> : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'))
  }
}

export default withClass(App, classes.App);
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



