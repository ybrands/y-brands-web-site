import emailjs from '@emailjs/browser';
import { SiLinkedin } from "react-icons/si";
import { useForm } from "react-hook-form";
import {EmailSchema, NameSchema, PhoneSchema} from './validators/ContactsFormValidationSchemas';

const SERVICE_ID = "service_0fkdq2n";
const TEMPLATE_ID = "template_0bcvoqm";
const PUBLIC_KEY = "HmBHrmW3JU-K08I2J";

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
            <div className="w-screen  
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
                        E-mail : joana@y-brands.com
                    </h3>
                    <br />
                    <div className="flex flex-col 
                                    poppins-light text-xl lg:text-2xl">
                        <div className="flex flex-row">
                            <img src="/public/assets/UKFlag.svg" /> &nbsp; +44 (0) 7497 255 652
                        </div>
                        <div className="flex flex-row mt-2">
                            <img src="/public/assets/PTFlag.svg" /> &nbsp; +351 961 347 133
                        </div>
                    </div>
                    <br />
                    <div className="">
                        <h5 className="poppins-bold text-md pb-3">Social Media</h5>
                        <SiLinkedin size={"50px"} onClick={() => { window.open("https://www.linkedin.com/") }} />
                    </div>
                </div>
                <div className="flex flex-col align-middle items-center 
                                w-full lg:w-1/2
                                mt-5 ">
                    <form className="flex flex-col align-middle items-center justify-between 
                                     w-full" onSubmit={handleSubmit(onSubmit)}>
                        <label className="w-full mt-2">
                            Name <br />
                            <input className="w-full h-10" {...register("name", NameSchema)} />
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        </label>
                        <label className="w-full mt-2 ">
                            Telephone <br />
                            <input type="tel" className="w-full h-10" {...register("telephone", PhoneSchema)} />
                            {errors.telephone && <p className='text-red-600'>{errors.telephone.message}</p>}
                        </label>
                        <label className="w-full mt-2">
                            E-mail <br />
                            <input type="email" className="w-full h-10" {...register("email", EmailSchema)} />
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        </label>
                        <label className="w-full mt-2 h-full">
                            Enter Your Message Here <br />
                            <textarea rows={5} className="w-full" {...register("message")} />
                        </label>
                        <button className="w-full mt-5" type="submit" value="Send"> Send!</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contacts
