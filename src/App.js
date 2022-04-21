import React from 'react';
import './App.css';
import NavbarComp from './components/NavBarComp';
import About from './features/newsItems/About';
import News from './features/newsItems/News';
import Home from './features/newsItems/Home';
import { AddNewsItemForm } from './features/newsItems/AddNewsItemForm';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { EditNewsItemForm } from './features/newsItems/EditNewsItemForm';


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/addContent" component={AddNewsItemForm}/>
      <Route path='/editNews/:newsItemId' component={EditNewsItemForm}/>
    </Switch>
  </div>
)

function App() {
  return (
    <BrowserRouter>
        <NavbarComp/>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
