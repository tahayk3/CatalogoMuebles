import React from "react";
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'



function Contact(){
    return (
        <div className='contact'>
            <h1>Comunícate con nosotros</h1>
            <div className="container contact_container">
                <div className="contact_options">

                    <article className="contact_option">
                        <MdAttachEmail className="contact_option-icon"/>
                        <h4>Correo</h4>
                        <h5>mueblexela@gmail.com</h5>
                        <a className="mensaje" href="mailto:mueblexela@gmail.com"> Enviar un mensaje</a>
                    </article>

                    <article className="contact_option">
                        <SiMessenger className="contact_option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Contactar</h5>
                        <a className="mensaje" href="https://m.me/roberto.castilloXela"> Enviar un mensaje</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>Contactar</h5>
                        <a className="mensaje" href="https://api.whatsapp.com/send?phone=50242273049">Enviar un mensaje</a>
                    </article>
                    
                </div>

                <form action="">
                    <input type="text" name="name" placeholder="Nombre y apellido" required/>
                    <input type="email" name="correo" placeholder="Correo electronico" required/>
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Consulta" required></textarea>
                    <button type="submit" className="btn-send">Enviar</button>
                </form>
                
            </div>
        </div>
    );
}

export default Contact;