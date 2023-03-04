import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './App.css';

function App({ title }) {
  return (
    <div className='App'>
      <Header name='Sandra' color='pink' />
      <Main greet='Howdy' />
      <Sidebar greet='Hi' />
    </div>
  );
}

export default App;
