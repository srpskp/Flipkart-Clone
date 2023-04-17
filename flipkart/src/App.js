import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Items from './Items';
import Slider from './Slider';
import Electronics from './Electronics';
import B_F_T from './B_F_T';
import Holi from './Holi';
import Summer from './Summer';
import Footer from './Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}

        <Routes>
          <Route path='' element={<Header />}></Route>
          {/* <Route path='' element={<Items/>}></Route> */}
          <Route path='login' element={<Login />}></Route>
        </Routes>
        <Items />
      </BrowserRouter>
      <Slider />
      <Electronics />

      <B_F_T />

      <Holi />

      <Summer />
      <Footer />

    </>
  );
}

export default App;
