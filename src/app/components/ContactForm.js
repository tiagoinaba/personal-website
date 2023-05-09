"use client"

import React, { useState } from 'react'
import Email from './smtp'


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function sendEmail() {
        Email.send({
            SecureToken: '3baf621f-f966-4236-92df-459c74f94657',
            To : 'tiago.inaba@gmail.com',
            From : 'formsubmission47@gmail.com',
            Subject : "New contact form enquiry",
            Body : `Name: ${formData.name}<br>
                    Email: ${formData.email}<br>
                    ${formData.message}`
        }).then(
          message => alert(message)
        );
    }

    function onChange(e) {
        console.log(formData)
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

  return (
    <form className='contact__form--form' onSubmit={e => {
            e.preventDefault()
            sendEmail()
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            return false
        }
    } >
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={formData.name} onChange={onChange} required />
        <label htmlFor="email">Email</label>
        <input type="text" id='email' value={formData.email} onChange={onChange} required />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={formData.message} rows={10} onChange={onChange} required />
        <button type="submit" className='button'>Send</button>
    </form>
  )
}
