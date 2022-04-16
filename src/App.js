import React from 'react';
import './App.css';
import NavbarComp from './components/NavBarComp';
import About from './features/content/About';
import News from './features/content/News';
import Home from './features/content/Home';
import { AddContentForm } from './features/content/AddContentForm';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { EditContentForm } from './features/content/EditContentForm';


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/addContent" component={AddContentForm}/>
      <Route path='/editNews/:newsItemId' component={EditContentForm}/>
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
