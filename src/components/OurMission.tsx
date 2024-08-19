
function OurMission() {
  return (
    <>
        <div className="hidden w-screen h-screen sm:grid grid-rows-2 grid-cols-2 px-20 py-10 ">
            <div className='row-span-2 flex flex-col justify-center'>
                <img className="max-w-full max-h-full" src="/src/assets/OurMissionImage.svg"/>
            </div>
            <div className='flex flex-col'>
                <h3 className="text-lg poppins-light">About Company</h3><br/>
                <h2 className="anton-bold text-8xl">
                    TURNING IDEAS <br/>  
                    INTO TRENDS!
                </h2>
            </div>
            <div className='flex flex-col'>
                <h3 className="text-2xl poppins-bold">OUR MISSION</h3><br/>
                <p className="text-2xl poppins-light text-justify">
                    We provide exceptional sourcing and manufacturing services to our clients .  
                    Our goal is to forge long-lasting partnerships with our clients 
                    and suppliers, built on trust, transparency, and mutual success.
                </p>
            </div>       
        </div>   
        <div className="sm:hidden w-screen flex flex-col px-10">
            <div className='flex flex-col py-3'>
                <h3 className="text-lg poppins-light">About Company</h3><br/>
                <h2 className="anton-bold text-5xl">
                    TURNING IDEAS <br/>  
                    INTO TRENDS!
                </h2>
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
                <img className="w-3/4" src="/src/assets/OurMissionImage.svg"/>
            </div>            
            <div className='flex flex-col py-3'>
                <h3 className="text-2xl poppins-bold">OUR MISSION</h3><br/>
                <p className="text-md poppins-light text-justify">
                    We provide exceptional sourcing and manufacturing services to our clients.  
                    Our goal is to forge long-lasting partnerships with our clients 
                    and suppliers, built on trust, transparency, and mutual success.
                </p>
            </div>       
        </div>         
    </>
  )
}

export default OurMission
