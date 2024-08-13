import { Button } from '@mui/material'

function HomePage() {
  return (
    <>
    <div className="flex flex-col w-screen h-screen bg-center bg-origin-content bg-no-repeat bg-cover bg-[url('/src/assets/HomePageBackground.jpg')]">
        <nav className='flex flex-row justify-center w-screen md:hidden'>
            <img className='w-1/2' src='./src/assets/MainLogo.png'/>
        </nav>        
        <nav className='hidden md:flex flex-row menu-principal max-w-screen justify-between px-5'>
            <div className='w-1/5'>
                <img src='./src/assets/MainLogo.png'/>
            </div>
            <div className='w-4/5'>
                <ul className='w-full flex flex-row justify-evenly pt-14'>
                    <li className='w-full text-center rounded-full hover:bg-white opacity-75'><a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">HOME</a></li>
                    <li className='w-full text-center rounded-full hover:bg-white opacity-75'><a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">ABOUT US</a></li>
                    <li className='w-full text-center rounded-full hover:bg-white opacity-75'><a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">SERVICES</a></li>
                    <li className='w-full text-center rounded-full hover:bg-white opacity-75'><a className='block w-full poppins-light text-white hover:text-black text-xl' href="#">CONTACT</a></li>
                </ul>
            </div>        
        </nav>
        <section className='w-screen h-full'>
            <div className='anton-regular ml-5 md:ml-20'>
                <h1 className='text-4xl sm:text-6xl  md:text-9xl text-white'>
                    Y-BRANDS
                </h1>
                <h2 className='text-xl sm:text-2xl md:text-4xl text-white'>APPAREL & FOOTWEAR PRODUCTION </h2>
            </div> 
            <div className='flex flex-col md:flex-row'>
                <h3 className='w-4/5 py-14 poppins-bold ml-5 md:ml-20 text-md md:text-2xl text-black'>
                    JOIN US AND TAKE YOUR BRAND TO THE NEXT LEVEL!
                </h3>           
                <div className='flex flex-row self-center align-middle w-max py-14'>
                    <Button style={{ backgroundColor: '#FFFFFF', color: 'black', borderRadius: '100px' }} className="w-full" color='secondary' variant='contained' href="#" >KNOW MORE</Button>
                </div>                
            </div>            
        </section>
        
    </div>
      
    </>
  )
}

export default HomePage
