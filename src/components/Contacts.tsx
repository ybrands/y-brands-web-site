import emailjs from '@emailjs/browser';
import { SiLinkedin } from "react-icons/si";
import { useForm } from "react-hook-form";

const SERVICE_ID = "service_0fkdq2n";
const TEMPLATE_ID = "template_0bcvoqm";
const PUBLIC_KEY = "HmBHrmW3JU-K08I2J";

function Contacts() {
    const {register} = useForm();    

    const handleOnSubmit = (e:any) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      };

    return (
        <>
            <div className="w-screen h-screen bg-black grid grid-rows-1 grid-cols-2 px-20 py-16 text-white ">
                <div className="">
                    <h1 className="anton-bold text-8xl">
                        CONTACT US
                    </h1>
                    <h2 className="my-5 poppins-bold text-2xl">
                        Y-BRANDS <br />
                        Apparel and Footwear Production
                    </h2>
                    <h3 className="my-5 poppins-light text-2xl">
                        Contact : Joana Barbosa <br />
                        E-mail : joana@y-brands.com
                    </h3>
                    <div className="flex flex-col my-5 poppins-light text-2xl">
                        <div className="flex flex-row">
                            <img src="./src/assets/UKFlag.svg" /> &nbsp; +44 (0) 7497 255 652
                        </div>
                        <div className="flex flex-row mt-2">
                            <img src="./src/assets/PTFlag.svg" /> &nbsp; +351 961 347 133
                        </div>
                    </div>
                    <div className="">
                        <h5 className="poppins-bold text-md">Social Media</h5>
                        <SiLinkedin size={"50px"} onClick={() => { window.open("https://www.linkedin.com/") }} />
                    </div>
                </div>
                <div className="flex flex-col align-middle items-center w-full">
                    <form className="flex flex-col align-middle items-center justify-between w-full" onSubmit={handleOnSubmit}>
                        <label className="w-full mt-2">
                            Name <br/>
                            <input className="w-full h-10" {...register("Name")}/>
                        </label>
                        <label className="w-full mt-2 ">
                            Telephone <br/>
                            <input type="tel" className="w-full h-10" {...register("Telephone")}/>
                        </label>
                        <label className="w-full mt-2">
                            E-mail <br/>
                            <input type="email" className="w-full h-10" {...register("E-mail")}/>
                        </label>
                        <label className="w-full mt-2 h-full"> 
                            Enter Your Message Here <br/>
                            <textarea rows={5} className="w-full" {...register("Message")}/>
                        </label>
                        <button className="w-full mt-5" type="submit" value="Send"> Send!</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacts
