import { useRef } from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';
import {Alert} from '@mui/material'

const Contact=()=>{
    const form=useRef()
    const sendemail = (e) => {
        e.preventDefault(); 
        emailjs.sendForm('service_qhwuilg', 'template_npaj3v8', form.current, 'uYhFPpyfDIZ6Gw8ni')
          .then((result) => {
              console.log(result.text);
              alert("Message has been sent.")
          }, (error) => {
              console.log(error.text);
              alert("Error message has not been sent.")
        });
        e.target.reset()
    }
    return(
        <section className='consection' id='contact'>
            <div className='box'>
                <form className='form' ref={form} onSubmit={sendemail}>
                    <h1 className='enter'>Enter here.</h1>
                    <input type="text" className='name input' placeholder='Your name' name='user_name' required />
                    <input type="text" className='email input' placeholder='Your email' name='user_email' required/>
                    <input type="text" className='message input' placeholder='Message' name='message' required />
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
            <div className='condiv'>
                <h1 className='conme'>Contact me</h1>
                <div className='details'>
                    <ion-icon name="call" ></ion-icon>
                    <p>+447309629820</p>
                </div>
                <div className='details'>
                    <ion-icon name="mail"></ion-icon>
                    <p>abdiaden1422@gmail.com</p>
                </div>
            </div>
        </section>
    )
}
export default Contact