import emailjs from '@emailjs/browser';
import { SiLinkedin } from "react-icons/si";
import { useForm } from "react-hook-form";
import {EmailSchema, NameSchema, PhoneSchema} from './validators/ContactsFormValidationSchemas';

const SERVICE_ID = "service_rusc5yh";
const TEMPLATE_ID = "template_an1l9lw";
const PUBLIC_KEY = "yUuUvZAhOAXRlaiCB";

type FormInputs = {
    name: string,
    telephone: string
    email: string
    message: string
  }

function Contacts() {
    const {
        register,
        handleSubmit,
        // Read the formState before render to subscribe the form state through Proxy
        formState: { errors },
      } = useForm<FormInputs>();

    const onSubmit = (e: FormInputs) => {
        emailjs.send(SERVICE_ID, TEMPLATE_ID, e, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
    };

    return (
        <>
            <div id="ContactsSection"
                 className="w-screen  
                            bg-black 
                            flex flex-col lg:flex-row
                            px-5 py-5 lg:px-20 lg:py-16 
                            text-white ">
                <div className="flex flex-col justify-evenly 
                                w-full lg:w-1/2 ">
                    <h1 className="anton-bold text-5xl lg:text-8xl">
                        CONTACT US
                    </h1>
                    <br />
                    <h2 className="poppins-bold text-center text-xl lg:text-left lg:text-2xl">
                        Y-BRANDS <br />
                        Apparel and Footwear Production
                    </h2>
                    <br />
                    <h3 className="poppins-light text-xl lg:text-left lg:text-2xl">
                        Contact : Joana Barbosa <br />
                        E-mail : contact@y-brands.com
                    </h3>
                    <br />
                    <div className="flex flex-col 
                                    poppins-light text-xl lg:text-2xl">
                        <div className="flex flex-row">
                            <img src="/assets/UKFlag.svg" /> &nbsp; +44 (0) 7497 255 652
                        </div>
                        <div className="flex flex-row mt-2">
                            <img src="/assets/PTFlag.svg" /> &nbsp; +351 961 347 133
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-row">
                        <div className='w-2/4'>
                            <h5 className="poppins-bold text-md pb-3">Social Media</h5>
                            <SiLinkedin size={"50px"} onClick={() => { window.open("https://www.linkedin.com/") }} />
                        </div>
                        <div className='flex flex-col justify-center w-2/4'>
                            <h5 className="poppins-bold text-md pb-3">Created by</h5>
                            <a href='https://www.instagram.com/poty.digital'>
                                <img className='w-[40%]' src='/assets/pdlogo.svg'/>
                            </a>                          
                        </div>                        
                    </div>
                </div>
                <div className="flex flex-col align-middle items-center 
                                w-full lg:w-1/2
                                mt-5 ">
                    <form className="flex flex-col align-middle items-center justify-between 
                                     w-full" onSubmit={handleSubmit(onSubmit)}>
                        <label className="w-full mt-2 poppins-bold">
                            Name <br />
                            <input className="w-full h-10" {...register("name", NameSchema)} />
                            {errors.name && <p className='text-xs text-red-600 poppins-light'>{errors.name.message}</p>}
                        </label>
                        <label className="w-full mt-2 poppins-bold">
                            Telephone <br />
                            <input type="tel" className="w-full h-10" {...register("telephone", PhoneSchema)} />
                            {errors.telephone && <p className='text-xs text-red-600 poppins-light'>{errors.telephone.message}</p>}
                        </label>
                        <label className="w-full mt-2 poppins-bold">
                            E-mail <br />
                            <input type="email" className="w-full h-10" {...register("email", EmailSchema)} />
                            {errors.email && <p className='text-xs text-red-600 poppins-light'>{errors.email.message}</p>}
                        </label>
                        <label className="w-full mt-2 h-full poppins-bold">
                            Enter Your Message Here <br />
                            <textarea rows={5} className="w-full noresize" {...register("message")} />
                        </label>
                        <button className="w-full mt-5 sendButton" type="submit" value="Send"> Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacts
