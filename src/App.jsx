import './App.css';
import Headers from './components/Headers';
import AppBody from './components/AppBody';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const [state,setState] = useContext(AppContext);

  return (
    <div className='app'
      // className={
      //   (state?.selctedCityInfo?.main?.temp > Number(12 + 273.15))
      //     ? 'app warm'
      //     : 'app'
      // }
    >

      <main>
        <Headers />

        <AppBody />

      </main>

    </div>
  );
}

export default App;
