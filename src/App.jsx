import './App.css';
import FinalPage from './components/finalpage';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import SecondPage from './components/secondpage';
import Small from './components/small';
import Third from './components/third';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SecondPage/>
      <Small/>
      <Third/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <FinalPage/>
      
    </div>
  );
}

export default App;

