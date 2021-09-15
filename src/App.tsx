import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calibration from './component/calibration/Calibration'
import Gaze from './component/gaze/Gaze'

const App: React.FC = (props: any) => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Gaze} />
          <Route exact path="/gaze" component={Gaze} />
          <Route exact path="/calibration" component={Calibration} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
