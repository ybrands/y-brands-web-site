'use client';

import { twMerge } from 'tailwind-merge'

export interface IMainMenu {
  /* Método que direcionará o usuário para a seção correta. */
  scrollToSection: (elementId: string) => void,

  /* Flag para exibição de menu com background sólido. */
  solidBackground?: boolean,

  /* Flag para exibição do Menu. */
  isVisible?: boolean,
}

export default function MainMenu(props: IMainMenu) {
  return (
    <div id="MenuPrincipal" style={{
      display: props.isVisible ? "block" : "none"
    }} className={twMerge("lg:fixed z-50 w-screen mt-6", props.solidBackground ? "bg-white/[.6] text-black rounded-full p-2 fade-in-menu" : "")}>
      <div className="flex flex-row justify-between">
        <div id="menu" className="w-full">
          <ul className="flex flew-row justify-evenly text-xl items-center w-75 text-white px-6 text-bold poppins-light">
            <li onClick={() => props.scrollToSection("#HomeSection")} className={twMerge("basis-1/5 text-center text-sm p-3 mx-3 rounded-full hover:bg-slate-200 hover:text-black", "text-black")}>
              HOME
            </li>
            <li onClick={() => props.scrollToSection("#OurObjective")} className={twMerge("basis-1/5 text-center text-sm p-3 mx-3 rounded-full hover:bg-slate-200 hover:text-black", "text-black")}>
              ABOUT US
            </li>
            <li onClick={() => props.scrollToSection("#OurServices")} className={twMerge("basis-1/5 text-center text-sm p-3 mx-3 rounded-full hover:bg-slate-200 hover:text-black", "text-black")}>
              SERVICES
            </li>
            <li onClick={() => props.scrollToSection("#ContactsSection")} className={twMerge("basis-1/5 text-center text-sm p-3 mx-3 bg-[#DAB98E] rounded-full text-white hover:bg-slate-200 hover:text-black", "text-black")}>
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}