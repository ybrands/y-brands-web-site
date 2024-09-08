import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from "@uidotdev/usehooks";
import Contacts from './components/Contacts'
import HomePage from './components/HomePage'
import MainMenu from './components/MainMenu'
import OurMission from './components/OurMission'
import OurObjective from './components/OurObjective'
import OurServices from './components/OurServices'
import OurTeam from './components/OurTeam'


function App() {
  const [exibirMenuFlutuante, setExibirMenuFlutuante] = useState(false);
  const [{ y }] = useWindowScroll();
  const scrollDemoRef = useRef(null);  

  useEffect(() => {
    setExibirMenuFlutuante((y || 0) > 400);
  }, [y])

  /**
   * Promove o deslizamento da tela para o elemento definido.
   *
   * @param elementId - Elemento para o qual a tela será deslizada.
   *
   */
  function scrollToSection(elementId: string) {
    const listNode: any = scrollDemoRef?.current;
    const sectionNode = listNode.querySelector(elementId);

    if (!sectionNode) {
      return
    }

    sectionNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <div id="MainApp" className="flex flex-col" ref={scrollDemoRef}>
        <MainMenu solidBackground isVisible={exibirMenuFlutuante} scrollToSection={scrollToSection}/>
        <HomePage scrollToSection={scrollToSection} />
        <OurMission/>
        <OurObjective/>
        <OurTeam/>
        <OurServices/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
