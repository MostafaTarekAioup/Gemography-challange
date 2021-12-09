import './App.css';
import {ReposContainer , Pagination} from './components.js'

function App() {
  return <main>
      <div className="title">
          <h1>Trending Github Repos</h1>
      </div>
      <ReposContainer/>
      <Pagination/>
  </main>
}

export default App;
