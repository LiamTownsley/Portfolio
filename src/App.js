import './App.css';

import NavBar from './NavBar';

import './Firebase';
import Test from './Test';

//import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionDate } from 'react-firebase-hooks/firestore';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <h1 id="header">LIAM TOWNSLEY</h1>
        <p id="subheader">Welcome to my portfolio, here you will find work I have completed and a few other fun things.</p>
        <div id="work-content">
          <div id="work-content-children">
            {Array(10).fill(<Test />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
