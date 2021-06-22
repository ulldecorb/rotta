import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import store from './redux/stores';
import Landing from './components/0-Log';
import ProjectsBoard from './components/2-ProjectsBoard';
import Dashboard from './components/3-Dashboard';
import ThemesDetail from './components/5b-Theme-detail';
import Search from './components/99-Search';

function App() {
  return (

    <Provider store={store({ type: String })}>
      <BrowserRouter>
        <div className="App" />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={ProjectsBoard} />
          <Route exact path="/:projectTitle" component={Dashboard} />
          <Route exact path="/:projectTitle/:themeTitle" component={ThemesDetail} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
