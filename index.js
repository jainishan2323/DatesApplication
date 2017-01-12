import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Hero from './components/HeroComponent';
import University from './components/UniversityComponent';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Hero}>
      <IndexRoute component={App} />
      <Route path="/university" component={University}/>
    </Route>
  </Router>
), document.getElementById('app'))