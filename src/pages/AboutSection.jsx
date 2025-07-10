import React from 'react';
import './AboutSection.css';
import { HiOutlineSearch, HiOutlineLink } from 'react-icons/hi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import bgImage from '../assets/images/about-bg.jpg';

const AboutPage = () => {
  const values = [
    {
      image: "https://i.pinimg.com/originals/38/ef/df/38efdf26c382b57b7c862f0443cfd4de.png",
      title: 'Sustainability',
      description:
        'Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
    },
    {
      image: "https://i.pinimg.com/736x/60/c8/0a/60c80ad1457ed688cfd7319df4e44812--sneakers-style-retail-shop.jpg",
      title: 'Quality',
      description:
        'Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
    },
    {
      image: "https://www.gngmodels.com/wp-content/uploads/2022/10/mens-shoes-photoshoot-1-682x1024.jpg",
      title: 'Community',
      description:
        'Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors.',
    },
  ];

  return (
    <div>

      <div className="about-hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="about-content">
          <h1 className="about-heading">ABOUT US</h1>
          <div className="about-text">
            <h2>Hydration with Heart</h2>
            <p>
              This is a space to share more about the business: who's behind it, what it does and
              what this site has to offer. It’s an opportunity to tell the story behind the business
              or describe a special service or product it offers. You can use this section to share
              the company's history or highlight a particular feature that sets it apart from competitors.
              Let the writing speak for itself. Keep a consistent tone and voice throughout the website
              to stay true to the brand image and give visitors a taste of the company’s values and personality.
            </p>
          </div>
        </div>
      </div>

      <section className="we-stand-for">
        <h2>WE STAND FOR</h2>
        <p>
          This is a space to share more about the business: who's behind it, what it does and what this site has to offer.It’s an opportunity to tell the story behind the business or describe a special service or product it offers.You can use this section to share the company's history or highlight a particular feature that sets it apart from competitors.
        </p>
      </section>

      <section className="values-grid">
        {values.map((item, index) => (
          <div key={index} className="value-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently asked questions</h2>
          <div className="faq-search">
            <i className="search-icon"><HiOutlineSearch /></i>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span>?What is an FAQ section</span>
            <span className="faq-arrow"><MdKeyboardArrowUp /></span>
          </div>
          <p className="faq-answer">
            An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?",
            "What are your opening hours?", or "How can I book a service?"
          </p>
          <div className="faq-icons">
            <HiOutlineLink />
            <FaLinkedin />
            <RxCross1 />
            <FaFacebook />
          </div>
        </div>

        <div className="faq-item collapsed">
          <div className="faq-question">
            <span>?Why do FAQs matter</span>
            <span className="faq-arrow"><MdKeyboardArrowDown /></span>
          </div>
        </div>

        <div className="faq-item collapsed">
          <div className="faq-question">
            <span>?Where can I add my FAQs</span>
            <span className="faq-arrow"><MdKeyboardArrowDown /></span>
          </div>
        </div>
      </section>
   <section className="contact-section">
      <div className="contact-left">
        <h2>HAVE A QUESTION?<br />WE’RE HAPPY TO HELP.</h2>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>First name *</label>
              <input type="text" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label>Last name *</label>
              <input type="text" placeholder="Enter your last name" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Subject *</label>
            <input type="text" placeholder="Answer briefly" required />
          </div>
          <div className="form-group">
            <label>Your Message *</label>
            <textarea placeholder="Leave us a message" required></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default AboutPage;
