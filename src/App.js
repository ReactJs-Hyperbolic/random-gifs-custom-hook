import './App.css';
import { Random } from './components/Random_V1';
import { Tag_V1 } from './components/Tag_V1';

const App = () => {
  return (
    <div className='App'>
      <h1>Random GIF Application</h1>
      <div className='main-container'>
        <Random />
        <Tag_V1 />
      </div>
    </div>
  );
};

export default App;
