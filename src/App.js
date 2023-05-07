import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

const App = () => {
  return (
    <>
      <Header />
      <main class="App">
        <Routes>
          <Route path="/" element={<div>Hello World</div>}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
