"use client"

import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function onChange(e) {
        console.log(formData)
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

  return (
    <form className='contact__form--form'>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={formData.name} onChange={onChange} />
        <label htmlFor="email">Email</label>
        <input type="text" id='email' value={formData.email} onChange={onChange} />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={formData.message} rows={10} onChange={onChange} />
        <button type="submit" className='button'>Send</button>
    </form>
  )
}
