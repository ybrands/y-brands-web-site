
function OurMission() {
  return (
    <>
        {/* Conteúdo para Desktop.*/}
        <div className="hidden w-screen lg:flex flex-row px-20 py-5 ">
            <div className="flex flex-row">
                <div className='w-2/5 flex flex-col justify-start'>
                    <h3 className="text-lg poppins-light">About Company</h3><br/>
                    <h2 className="anton-bold text-6xl">
                        WHAT IS OUR OBJECTIVE?
                    </h2>
                    <br/>
                    <p className="text-2xl p-3 poppins-light text-justify">
                        We aim to source the best materials, manage manufacturing schedules efficiently, 
                        and maintain strict quality control throughout the production cycle. 
                        By everaging our expertise and network in the industry, we seek to help our clients 
                        optimize their supply chain, minimize production costs, and maximize profitability. 
                        Our focus is on delivering value-added services that contribute to the success and 
                        growth of our clients apparel and footwear businesses.
                    </p>
                </div>
                <div className='w-3/5 flex flex-col justify-center items-center'>
                    <img className="w-5/6" src="/src/assets/OurObjective.svg"/>
                </div>
            </div>                        
        </div>

        {/* Conteúdo para Mobile.*/}
        <div className="w-screen flex flex-col lg:hidden pt-5 px-10">
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
            <div className='pt-5 flex flex-col justify-start row-span-2 col-span-2'>
                <img className="max-w-1/2" src="/src/assets/OurObjectiveSecondMobile.svg"/>
            </div>            
        </div>      
    </>
  )
}

export default OurMission
