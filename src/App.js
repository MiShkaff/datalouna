import logo from './logo.svg';
import './App.scss';
import Header from './elements/header/header';
import Hero from './elements/hero/hero';
import Choose from './elements/choose/choose';
import Opportunity from './elements/opportunity/opportunity';
import Team from './elements/team/team';
import Contact from './elements/contact/contact';
import Footer from './elements/footer/footer';
import Statistic from './elements/statistic/statistic';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className='Hero'>
        <Hero />
      </div>
      <div className='Choose'>
        <Choose />
      </div>
      <div className='Opportunity'>
        <Opportunity />
      </div>
      <div className='Statistic'>
        <Statistic />
      </div>
      <div className='Team'>
        <Team />
      </div>
      <div className='Contact'>
        <Contact />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
