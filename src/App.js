import { Fragment } from 'react';
import './App.css';
import Message from './Components/Message'
import vinny from './Components/vinny.png'

function App() {
  return (
    <Fragment>
    <Message text="Давным-давно, кажется, в прошлую пятницу, жил в одной стране медвежонок под именем Винни-Пух. А почему под именем? Потому что над его дверью была надпись: «Винни-Пух», а он под ней жил." />
    <img src={vinny} alt='vinny' />
  </Fragment>
  );
}

export default App;
