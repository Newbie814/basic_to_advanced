import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './App.css';
import Button from './components/Button';
import ModeToggler from './components/ModeToggler';
import PromoHeading from './components/PromoHeading';
import Promo from './components/Promo';

function App({ title }) {
  return (
    <div className='App'>
      <Promo />
      <Header name='Sandra' color='pink' />
      <Button />
      <Header name='Matt' color='blue' />
      <Header name='Liam' color='green' />
      <Header name='Connor' color='red' />
      <Main greet='Howdy' />
      <Sidebar greet='Hi' />
      <ModeToggler />
    </div>
  );
}

export default App;
