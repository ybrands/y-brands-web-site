import { Button } from '@mui/material'

export interface IHomeSection {
    /* Método que direcionará o usuário para a seção correta. */
    scrollToSection: (elementId: string) => void,
}

function HomePage(props: IHomeSection) {
    return (
        <>
            <div id="HomeSection"
                className="flex flex-col justify-between 
                            w-screen h-[100vmax] lg:h-screen
                            bg-center bg-origin-content bg-no-repeat bg-cover bg-[url('/assets/HomePageBackground.jpg')]">

                {/* Logo de topo para Mobile*/}
                <nav className='lg:hidden flex flex-row justify-center items-center 
                                pt-28'>
                    <img className='w-1/2' src='/assets/YBRANDSSEGUNDA.svg' />
                </nav>

                {/* Menu e Logo de topo para Tablets ou acima.*/}
                <nav className='hidden lg:flex flex-row justify-between 
                                max-w-screen h-1/4
                                px-20 my-10 
                                menu-principal'>
                    <div className='w-1/5 flex flex-row items-center'>
                        <img src='/assets/YBRANDSSEGUNDA.svg' />
                    </div>
                    <div className='w-4/5 px-3 flex flex-row items-center'>
                        <ul className='w-full flex flex-row justify-evenly items-center'>
                            <li onClick={() => props.scrollToSection("#HomeSection")} className='w-full text-center rounded-full hover:bg-white'>
                                <a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">
                                    HOME
                                </a>
                            </li>
                            <li onClick={() => props.scrollToSection("#OurObjective")} className='w-full text-center rounded-full hover:bg-white'>
                                <a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">
                                    ABOUT US
                                </a>
                            </li>
                            <li onClick={() => props.scrollToSection("#OurServices")} className='w-full text-center rounded-full hover:bg-white'>
                                <a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">
                                    SERVICES
                                </a>
                            </li>
                            <li onClick={() => props.scrollToSection("#ContactsSection")} className='w-full text-center rounded-full hover:bg-white'>
                                <a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Conteúdo para Mobile.*/}
                <section className='flex flex-col justify-evenly lg:hidden w-screen h-full'>
                    <div className='anton-regular'>
                        <h1 className='text-7xl md:text-9xl text-white text-center'>
                            Y-BRANDS
                        </h1>
                        <h2 className='text-xl md:text-4xl text-white text-center'>APPAREL & FOOTWEAR PRODUCTION </h2>
                    </div>
                    <div className='flex flex-col items-center py-10'>
                        <h3 className='p-2 w-3/4 text-lg text-white poppins-bold text-center bg-black rounded-lg'>
                            JOIN US AND TAKE YOUR BRAND TO THE NEXT LEVEL!
                        </h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row self-center align-middle w-max'>
                            <Button 
                                style={{ backgroundColor: '#FFFFFF', color: 'black', borderRadius: '100px' }} 
                                className="w-full poppins-light" 
                                color='secondary' 
                                variant='contained' 
                                href="#" 
                                onClick={() => props.scrollToSection("#OurMission")}>
                                    KNOW MORE
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Conteúdo para Tablets ou acima.*/}
                <section className='hidden lg:flex flex-col justify-evenly 
                                    w-screen h-full'>
                    <div className='anton-regular ml-5 lg:px-20'>
                        <h1 className='text-4xl sm:text-6xl md:text-9xl text-white shadow-text'>
                            Y-BRANDS
                        </h1>
                        <h2 className='text-xl sm:text-2xl md:text-4xl text-white shadow-text-subtitle'>APPAREL & FOOTWEAR PRODUCTION </h2>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <h3 className='w-4/5 
                                       py-14 ml-5 lg:px-20 
                                       text-md lg:text-2xl poppins-bold text-black bordered-text'>
                            JOIN US AND TAKE YOUR BRAND TO THE NEXT LEVEL!
                        </h3>
                        <div className='flex flex-row self-center align-middle w-max py-14'>
                            <Button 
                                style={{ backgroundColor: '#FFFFFF', color: 'black', borderRadius: '100px' }}
                                className="w-full"
                                color='secondary'
                                variant='contained'
                                onClick={() => props.scrollToSection("#OurMission")}>
                                KNOW MORE
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage
