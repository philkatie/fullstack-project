import { Header } from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import List from './Components/List/List';
import Detail from './Components/Detail/Detail';
import Update from './Components/Update/Update';
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
          <Route path='/:id' element={<Detail />} />
          <Route path='/:id/update' element={<Update />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;