import './App.css';
// import ProjectCard from './component/ProjectCard';
// import ProjectListPage from './page/ProjectListPage';
// import HomePage from './page/HomePage';
import WelcomePage from './page/WelcomePage';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={WelcomePage} />
    </Router>
  )
}

export default App;
