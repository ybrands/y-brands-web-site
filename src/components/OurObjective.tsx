
function OurMission() {
  return (
    <>
        <div className="hidden w-screen h-screen sm:grid grid-rows-2 grid-cols-3 px-20 py-10 ">
            <div className='row-span-2 flex flex-col justify-center'>
                <h3 className="text-lg poppins-light">About Company</h3><br/>
                <h2 className="anton-bold text-6xl">
                    WHAT IS OUR OBJECTIVE?
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
        <div className="w-screen flex flex-col sm:hidden pt-5 px-10">
            <div className='flex flex-col'>
                <h2 className="anton-bold text-5xl">
                    WHAT IS OUR OBJECTIVE?
                </h2>
            </div>
            <div className='flex flex-col items-center pt-5'>
                <img className="w-full" src="/src/assets/OurObjectiveFirstMobile.svg"/>
                <p className="text-md poppins-light text-justify pt-5">
                    We aim to source the best materials, manage manufacturing schedules efficiently, 
                    and maintain strict quality control throughout the production cycle. 
                    By everaging our expertise and network in the industry, we seek to help our clients 
                    optimize their supply chain, minimize production costs, and maximize profitability. 
                    Our focus is on delivering value-added services that contribute to the success and 
                    growth of our clients apparel and footwear businesses.
                </p>
            </div>
            <div className='pt-5 flex flex-col justify-center row-span-2 col-span-2'>
                <img className="max-w-full max-h-full" src="/src/assets/OurObjectiveSecondMobile.svg"/>
            </div>            
        </div>      
    </>
  )
}

export default OurMission
