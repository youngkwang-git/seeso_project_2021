import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calibration from './component/calibration/Calibration'
import Gaze from './component/gaze/Gaze'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/gaze" component={Gaze}/>
          <Route path="/calibration" component={Calibration}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
