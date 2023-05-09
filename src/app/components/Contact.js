import React from 'react'
import Topic from './Topic'
import linkedinLogo from '../../assets/img/logos/linkedin.svg'
import githubLogo from '../../assets/img/logos/github.png'
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className='contact'>
        <div className="contact__main">
            <Topic>Contact</Topic>
            <p>Email: tiago.inaba@gmail.com</p>
            <Image src={linkedinLogo} width={85} height={85} alt='LinkedIn logo' className='contact__main--logo'></Image>
            <Image src={githubLogo} width={85} height={85} alt='Github logo' className='contact__main--logo'></Image>
        </div>
        <hr />
        <div className="contact__form">
            <p>Or fill in this form and I&apos;ll get in touch!</p>
            <ContactForm />
        </div>
    </section>
  )
}
