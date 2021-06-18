import './App.css';
import { Random } from './components/RandomV1';
import { TagV1 } from './components/TagV1';
import RandomV2 from './components/RandomV2';
import TagV2 from './components/TagV2';

const App = () => {
  return (
    <div className='App'>
      <h1>Random GIF Application</h1>
      <div className='main-container'>
        <RandomV2 />
        <TagV2 />
      </div>
    </div>
  );
};

export default App;
