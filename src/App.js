import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import StoreListing from './Components/StoreListing';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <StoreListing />
    </div>
  );
}

export default App;
