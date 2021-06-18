import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {

  foos = () => 'Bars';

  render() {

    const name = 'John Doe';
    const foo = () => 'Bar';   //Function

    const loading = false    // This will return Loading... if true and neglect all the rest
    const showName = false    //A value to showname when available
    if(loading) {           // and return all data below if false
      return <h4>Loading...</h4>
    }

    return (
      <Fragment>
      {loading ? <h4>Loading...</h4> : <h1>Hello{showName ? name : null}</h1>}  {/*Ternary operator*/}
        {loading ? <h4>Loading...</h4> : <h1>Hello{showName && name}</h1>}  {/*Only show name if shwName is true*/}

        <h1>Hello {name}</h1>     {/*Output data stored in a variable using jsx*/}
        <h1>Hello {name.toUpperCase()}</h1>     {/*Use methods in variables*/}
        <h1>{1 + 1}</h1>    {/*Output javascript expression using jsx*/}
        <h1>Hello {foo()}</h1>      {/*Output a function*/}
        <h1>Hello {this.foos()}</h1>      {/*Output a method part of the class / Outside render method*/}
      </Fragment>
    )
  }
}


export default App;
