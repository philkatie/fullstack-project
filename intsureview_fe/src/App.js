import { Header } from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import List from './Components/List/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/form' element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;