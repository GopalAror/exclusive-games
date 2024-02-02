import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Misson from './components/Misson';
import Atributos from './components/Atributos';
import Slot from './components/Slot';
import Jackport from './components/Jackport';
import Por from './components/Por';
import TripleSeven from './components/TripleSeven';
import Poker from './components/Poker';
import Apostar from './components/Apostar';
import ReadMore from './components/ReadMore';
import Footer from './components/Footer';
import Preguntas from './components/Preguntas';
function App() {
  return (
    <div className='bg-[#00141B]'>
      <div className='bg-[url(./assets/images/header-bg.webp)] min-h-screen flex flex-col bg-no-repeat bg-cover bg-center'>
        <Nav />
        <Header />
      </div>
      <Misson />
      <div className='bg-[url(./assets/images/slot-bg.webp)] bg-no-repeat pb-[70px] pt-[100px] sm:py-[150px] md:py-[243px] h-full bg-cover md:bg-100'>
        <Atributos />
        <Slot />
      </div>
      <div className='bg-[url(./assets/images/jackport-bg.webp)] bg-no-repeat h-full bg-100'>
        <Jackport />
      </div>
      <div className='bg-[url(./assets/images/por-bg.webp)] bg-no-repeat h-full bg-cover md:bg-100'>
        <Por />
      </div>
      <TripleSeven />
      <Poker />
      <Apostar />
      <Preguntas />
      <ReadMore />
      <Footer />
    </div>
  );
}
export default App;