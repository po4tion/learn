import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './page/Home/Home';
import About from './page/About/About';
import Profiles from './page/Profile/Profiles/Profiles';
import History from './components/History/History';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link
            to={{
              pathname: '/about',
              search: '?detail=true',
              hash: '',
            }}
          >
            소개
          </Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
