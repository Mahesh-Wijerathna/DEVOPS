import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from './footer.js'; 


export const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    
    
    emailjs
      .sendForm('service_qsa5mnw', 'template_a4fooqk', form.current, {
        publicKey: 'fQ81t1v3iWPQOc1np',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const address = "Address : No:123,AAAAAAAAAAAAA,BBBBBBBBBBB,CCCCCCCCCCCC";
const addressLines = address.split(',');

  return (
    <div className="back">
      <div className='contInfor'>
        <h1 className="contacth1">Contact Us</h1>
        <la className="contacth2">Telephone No : 0123456789 </la>
        <br />
        {addressLines.map((line, index) => (
      <p className="contacth2" key={index} style={{ marginLeft: index !== 0 ? '80px' : '0' }}>{line}</p>
    ))}

      </div>
    <div className="contact">
    <form ref={form} onSubmit={sendEmail}>
      <la className='la'>Name</la>
      <input className='i1' type="name" name="from_name" />
      <br />
      <la className='la' >Email</la>
      <input className='i1' type="email" name="from_email" />
        <br />
      <la className='la' >Message</la>
      <textarea className='t1' name="message" />
        <br />
      <input className='i2' type="submit" value="Send" />
    </form>
    </div>
    
    </div>
  );
};
export default Contact;
