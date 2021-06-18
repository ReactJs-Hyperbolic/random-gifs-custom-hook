import './App.css';
import { Random } from './components/RandomV1';
import { TagV1 } from './components/TagV1';

const App = () => {
  return (
    <div className='App'>
      <h1>Random GIF Application</h1>
      <div className='main-container'>
        <Random />
        <TagV1 />
      </div>
    </div>
  );
};

export default App;
