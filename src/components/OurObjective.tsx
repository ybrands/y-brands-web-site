
function OurMission() {
  return (
    <>
        <div className="w-screen h-screen grid grid-rows-2 grid-cols-3 px-20 py-10 ">
            <div className='row-span-2 flex flex-col justify-center'>
                <h3 className="text-lg poppins-light">About Company</h3><br/>
                <h2 className="anton-bold text-6xl">
                    TURNING IDEAS <br/>  
                    INTO TRENDS!
                </h2>
                <br/>
                <p className="text-xl poppins-light text-justify">
                    We aim to source the best materials, manage manufacturing schedules efficiently, 
                    and maintain strict quality control throughout the production cycle. 
                    By everaging our expertise and network in the industry, we seek to help our clients 
                    optimize their supply chain, minimize production costs, and maximize profitability. 
                    Our focus is on delivering value-added services that contribute to the success and 
                    growth of our clients apparel and footwear businesses.
                </p>
            </div>
            <div className='flex flex-col justify-center row-span-2 col-span-2'>
                <img className="max-w-full max-h-full" src="/src/assets/OurObjective.svg"/>
            </div>            
        </div>      
    </>
  )
}

export default OurMission
