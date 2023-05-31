"use client"

import '../sass/_contact.scss'

import React from 'react'
import Topic from './Topic'
import linkedinLogo from '../../assets/img/logos/linkedin.svg'
import githubLogo from '../../assets/img/logos/github.png'
import Image from 'next/image'
import ContactForm from './ContactForm'
import { LanguageContextConsumer } from '../context/langContext'

export default function Contact() {
  return (
    <LanguageContextConsumer>
      {
        ({language}) => {
          return (
            <section className='contact' id='contact'>
                <div className="contact__main">
                    <Topic>{language === "EN" ? "Contact" : "Contato"}</Topic>
                    <p>Email: tiago.inaba@gmail.com</p>
                    <a href="https://www.linkedin.com/in/tiago-inaba-654774123/" target='_blank' className='contact__main--logo'>
                      <Image src={linkedinLogo} width={85} height={85} alt='LinkedIn logo'></Image>
                    </a>
                    <a href="https://github.com/tiagoinaba" target='_blank' className='contact__main--logo'>
                      <Image src={githubLogo} width={85} height={85} alt='Github logo'></Image>
                    </a>
                </div>
                <hr />
                <div className="contact__form">
                    <p>{language === "EN" ? "Or fill in this form and I'll get in touch!" : "Ou preencha este formulário e eu entrarei em contato!"}</p>
                    <ContactForm />
                </div>
            </section>
          )
        }
      }
    </LanguageContextConsumer>
  )
}
