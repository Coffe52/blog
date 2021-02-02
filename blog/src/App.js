import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import './global.css';
import Header from './components/Header';
import firebase from './firebase';

class App extends Component{

  state={
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(result =>{
      //Devolve o usuário
      this.setState({firebaseInitialized: result});
    })
  }
  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}

export default App;
