import React from 'react';
import Background from './components/background';
import SideMenu from './components/sideMenu'
import styles from './styles/App.scss';

function App() {
  return (
    <div>
      <body>
        <Background />
        <SideMenu />
      </body>
    </div>
  );
}

export default App;
