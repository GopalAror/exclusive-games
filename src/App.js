import './App.css';
import logo from "./assets/images/back-to-top.svg";
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
import BackToTop from './components/BackToTop';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [preloder, setpreloder] = useState(false)
  useEffect(() => {
    setpreloder(true)
    setTimeout(() => {
      setpreloder(false)
    }, 3500);
  }, [])
  useEffect(() => {
    AOS.init(
      {
        duration:2000,
        once:true,
      }
    );
  }, [])
  return (
    <div>
      {preloder ? (<div className='bg-white fixed top-0 bottom-0 overflow-hidden flex items-center flex-col justify-center w-full h-full'>
        <img className=' animate-bounce' src={logo} alt='gif' />
        <div className=' font-poppins text-[50px] text-[#00141B] font-semibold'>Loading ...</div>
      </div>) : (<div className='bg-[#00141B]'>
        <div className='bg-[url(./assets/images/header-bg.webp)] min-h-screen flex flex-col bg-no-repeat bg-cover bg-center'>
          <Nav />
          <Header />
        </div>
        <Misson />
        <div className=' max-sm:bg-white sm:bg-[url(./assets/images/slot-bg.webp)] bg-no-repeat pt-[50px] sm:py-[150px] md:py-[243px] h-full bg-cover md:bg-100'>
          <Atributos />
          <Slot />
        </div>
        <div className='bg-[url(./assets/images/jackport-bg.webp)] bg-no-repeat h-full bg-100'>
          <Jackport />
        </div>
        <div className=' max-sm:bg-white sm:bg-[url(./assets/images/por-bg.webp)] bg-no-repeat h-full bg-cover md:bg-100'>
          <Por />
        </div>
        <TripleSeven />
        <Poker />
        <Apostar />
        <Preguntas />
        <ReadMore />
        <Footer />
        <BackToTop />
      </div>)}
    </div>
  );
}
export default App;