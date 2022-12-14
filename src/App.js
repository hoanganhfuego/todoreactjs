import InputField from './components/InputField';
import List from './components/List';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col items-center justify-center h-[100%]'>
        <InputField />
        <List />
      </div>
    </div>
  );
}

export default App;