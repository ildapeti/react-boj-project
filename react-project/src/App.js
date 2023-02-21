import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer/>
      </Router>
    </div> 
  );
}

export default App;
