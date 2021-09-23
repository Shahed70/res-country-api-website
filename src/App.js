import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import SingleCountry from './components/SingleCountry';

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route exact path="/:name">
              <SingleCountry />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
