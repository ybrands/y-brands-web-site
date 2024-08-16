
function Contacts() {
    return (
        <>
            <div className="w-screen h-screen bg-black grid grid-rows-1 grid-cols-2 px-20 py-10 text-white ">
                <div className="">
                    <h1 className="anton-bold text-6xl">
                        CONTACT US
                    </h1>
                    <h2 className="my-5 poppins-bold text-xl">
                        Y-BRANDS <br />
                        Apparel and Footwear Production
                    </h2>
                    <h3 className="my-5 poppins-light text-xl">
                        Contact : Joana Barbosa <br />
                        E-mail : joana@y-brands.com
                    </h3>
                    <div className="flex flex-col my-5 poppins-light text-xl">
                        <div className="flex flex-row">
                            <img src="./src/assets/UKFlag.svg"/> +44 (0) 7497 255 652
                        </div>
                        <div className="flex flex-row mt-2">
                            <img src="./src/assets/PTFlag.svg"/> +351 961 347 133
                        </div>
                    </div>
                    <div className="">
                        <h5 className="poppins-bold text-md">Social Media</h5>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </>
    )
}

export default Contacts
