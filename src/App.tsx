import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Calibration from './calibration/Calibration'

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/calibration" component={Calibration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
