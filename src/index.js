/* global $ */

import $ from 'jquery';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';
import BlogView from './components/BlogView';
import About from './components/About';

import { appReducer } from './reducers';
import { goDummy } from './actions';

import './main.css';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const wrapperStyle = {
  maxWidth: 'calc(800px - (30px * 2))',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '30px',
};


const NoMatch = () => {
  return <div>NoMatch :D</div>;
};

class App extends React.Component {

  componentDidMount() {
      var $document = $(document);

      var toggleMenu = function(e){
        e.preventDefault();

        $("body").toggleClass("nav-opened nav-closed");
        $("body").toggleClass("noscroll");

        if ($("#click-screen").css('display') === 'block') {
          $("#click-screen").css('display', 'none');
          $("body").css('overflow', 'unset');
        } else {
          $("#click-screen").css('display', 'block');
          $("body").css('overflow', 'hidden');
        }
      };

      $(".menu-button").on("click", toggleMenu);
      $("#click-screen").on("click", toggleMenu);
      $('.no-fouc').removeClass('no-fouc');
  }

  render() {

    return (
      <Provider store={store}>
        <Router>
          <div style={wrapperStyle}>
            <Route path="" component={Nav} />
            <Header />
            <Switch>
              <Route exact path="/" component={BlogList} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/:id" component={BlogView}/>
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(
 <App />,
  document.getElementById('app'),
);
