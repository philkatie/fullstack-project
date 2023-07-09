import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
import List from './Components/List';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
