import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7bosn2b', 'template_mj330jf', form.current, 'RHfhXshODy5w9mL-w')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    }

  const [active, setActive] = useState(false);
  function EmailTick() {

    setActive(true);
    setTimeout(()=>setActive(false),2000)
  }
  const className = active ? 'emailTrick' : 'emailNo';

  return (
    <>
      <div className='contactMain'>
        <div className='contactMainContainer'>
          <div className='contactContainer'>
             <div className='floatingDivHome'>
              <div className='floatingHome'>
                <Link to='/'><i class="fa-solid fa-house"></i></Link>
              </div>
            </div> 
            <form ref={form} onSubmit={sendEmail}>
              <h1>I'm Here -- Let's <span>Talk:</span> </h1>
              <input type="text" name="from_name" placeholder='Your Name' required/>
              <input type="email" name="from_email" placeholder='Your Email' required/>
              <textarea name="message" placeholder="Your Message" required />
              <input type="submit" value="✉" className='contactSubmitButton' onClick={EmailTick} />
              
              <div className={className}><p>Sent ☑</p></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
// export default function Contact(){
//   return(
//     <>
//       <h1>hello</h1>
//     </>
//   )
// }