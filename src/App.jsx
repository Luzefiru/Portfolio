import './App.css';
import './components/animations/Animations.css';
import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Hero />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Contact />
      </main>
    </div>
  );
};

export default App;
