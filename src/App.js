import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContextActiveMesagges } from './components/ContextActiveMessages';
import { Nav } from './components/Nav';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { RightBar } from './components/RightBar';
import './App.scss';

export const App = () => {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [numberOfMessages, setNumberOfMessages] = useState(0);

  const contextValue = useMemo(() => (
    {
      numberOfMessages,
      setNumberOfMessages,
    }
  ), [numberOfMessages]);

  return (
    <div className="app">
      <ContextActiveMesagges.Provider value={contextValue}>
        <Header
          isNavVisible={isNavVisible}
          setNavVisibility={setNavVisibility}
        />
        <div className="app__wraper">
          {isNavVisible && (
            <nav className="app__nav">
              <Nav />
            </nav>
          )}
          <Switch>
            <Route path="/dashboard">
              <Dashboard
                isNavVisible={isNavVisible}
              />
            </Route>
            <p>PAGE NOT FOUND</p>
          </Switch>
          <RightBar />
        </div>
      </ContextActiveMesagges.Provider>
    </div>
  );
};
