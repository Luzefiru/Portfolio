import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Routes>
          <Route path="/" element={<Hero />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;