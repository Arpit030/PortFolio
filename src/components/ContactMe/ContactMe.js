import React, { useState } from 'react';
import './ContactMe.css';
import { assets } from '../../assets/assets';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit the form using Formspree
    const response = await fetch('https://formspree.io/f/mkgnnadn', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if submission was successful
    if (response.ok) {
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Message sent successfully!');
    } else {
      alert('There was an error sending your message.');
    }
  };

  return (
    <section className="contact section" id="contact">
      <h1 className="section_title">Contact Me</h1>
      <span className="section_subtitle">
        Want to connect? My inbox is always open!
      </span>

      <div className="contact_container container grid">
        <div>
          {/* Email Contact */}
          <a href="mailto:arpitverma17032003@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.email} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">arpitverma17032003@gmail.com</span>
              </div>
            </div>
          </a>

          {/* Online Meet Contact */}
          <a href="https://meet.google.com/landing" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.meeting} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Online Meet</h3>
                <span className="contact_subtitle">@Meeting</span>
              </div>
            </div>
          </a>

          {/* LinkedIn Contact */}
          <a href="https://www.linkedin.com/in/arpit-verma-46b8ab244/" target="_blank" rel="noopener noreferrer">
            <div className="contact_info">
              <img src={assets.linkedin} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">LinkedIn</h3>
                <span className="contact_subtitle">@ArpitVerma</span>
              </div>
            </div>
          </a>

          {/* Location Contact */}
          <a href="https://www.google.com/maps/place/Kanpur,+Uttar+Pradesh/@26.4473866,80.1735676,11z/data=!3m1!4b1!4m6!3m5!1s0x399c4770b127c46f:0x1778302a9fbe7b41!8m2!3d26.449923!4d80.3318736!16zL20vMDFfcTdo?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D">
            <div className="contact_info">
              <img src={assets.location} alt="" className="contact_icon" />
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">@Kanpur</span>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact_form grid">
          <div className="contact_inputs grid">
            <div className="contact_content">
              <label className="contact_label">Name</label>
              <input
                type="text"
                name="name"
                className="contact_input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact_content">
              <label className="contact_label">Email</label>
              <input
                type="email"
                name="email"
                className="contact_input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact_content">
            <label className="contact_label">Subject</label>
            <input
              type="text"
              name="subject"
              className="contact_input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact_content">
            <label className="contact_label">Message</label>
            <textarea
              name="message"
              cols="0"
              rows="7"
              className="contact_input message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button-flex">
              Send Message
              <img src={assets.send} alt="Message Icon" className="button_icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
