import React from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    quote: '"Eco-Friendly and Stylish"',
    description:
'Comfy Kicks! Stopped by this place on a whim and ended up buying two pairs! The staff was super friendly and helped me find the perfect size. Their sneaker collection is 🔥 — lots of trendy options and some hidden gems too. One star off just because the checkout line was a bit slow, but otherwise a great experience. Will definitely come back for more!',
    name: 'James Mitchell',
    image: '/images/james.png', 
  },
  {
    quote: '"Shoes so good, my feet wrote this review!"',
    description:
      'I walked in barefoot, walked out feeling like a runway model. These shoes are so comfy, I forgot I was wearing them. I even did a little happy dance in the store — not ashamed. 10/10 would recommend if your feet deserve some love. Bonus points for the free socks promo!',
    name: 'Rebecca Thompson',
    image: '/images/rebecca.png',
  },
  {
    quote: '"Excellent Product Range and Courteous Service"',
    description:
      'The store offers a wide variety of footwear options suitable for both casual and formal occasions. Staff members were attentive and provided useful suggestions based on my requirements. I appreciated the clean layout and organized display. Slight delay at billing, but overall a pleasant shopping experience.',
    name: 'Sophia Navarro',
    image: '/images/sophia.png',
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">
        FIND OUT WHAT PEOPLE ARE SAYING ABOUT QUENX
      </h2>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <h3 className="testimonial-quote">{item.quote}</h3>
            <p className="testimonial-description">{item.description}</p>
            <div className="testimonial-author">
              <img src={item.image} alt={item.name} className="author-image" />
              <span className="author-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
