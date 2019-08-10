import React from 'react';
import './App.css';
import FormikUserForm from './components/UserForm';

class App extends React.Component{
  
  componentDidMount(){
    console.log('Successfully processed app')
  }

  render(){
  return (

    <div className="App">
      <FormikUserForm />
    </div>

)
}
}

export default App;