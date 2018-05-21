import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Testimonial from '../components/Testimonial';

const iconStyle = {
  margin: '0 .25rem',
};
export default () => (
  <Layout title="home page">
    <Banner imagepath="/static/img/lizard.jpg">
      <h1>I love gross things too!</h1>
      <h2>
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
      </h2>
      <p>
      Sure, walking dogs is fun and batting around a plaything with cats is cool,
       but I also love slippery, slimey, scaley, disgusting exotic pets too.
      </p>
      <Button href="tel:14164079638">call me</Button>
    </Banner>
    <main>
      <section>
        <h1>GTAs favourite exotic pet care</h1>
        <p>
        With over 10 years of exotic pet care experience, we are the best choice for
         short and long term care for your snakes, lizards, spiders, raccoons, and long-haired camels.
        </p>
      </section>

      <section>
        <h1>Vacation Pet Setting</h1>
        <p>
        Leave your pet home where they are most comfortable and we will come and visit them. We are your stress free alternative to boarding or imposing on friends and family. Go ahead! Book that vacation!
        </p>
      </section>

      <section>
        <h1>Mid-day Dog Walking</h1>
        <p>
        We'll walk the dog for you when you're too busy. Daily, weekly or as needed. Perfect for the busy professional or for help potty training puppies.
        </p>
      </section>
    </main>
    <section>
      <h1>Service Area</h1>
      <iframe
        title="service area"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7033.36178313984!2d-79.77020795888578!3d43.59813188493247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a608b0e51e9%3A0x1751c8a57c037b9f!2s7044+Estoril+Rd%2C+Mississauga%2C+ON+L5N+1N4!5e0!3m2!1sen!2sca!4v1526845124357"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </section>
    <main>
      <section className="testimonials">
        <h1>What people say...</h1>
        <Testimonial by="Richard G">
        Was great with our cats while we were gone. Sent update pictures and videos of
them playing and laying around. Came home to happy, healthy kitties!
        </Testimonial>
        <Testimonial by="Meredith M">
        This was my first time using both Rover and a pet/house sitter, so I was a bit
nervous about leaving my three dogs while away on holiday. Catherine was patient
with all my questions and put me at ease with the whole process. Knowing I was
nervous, Catherine sent several pics and messages during the trip, which were all
much appreciated. I returned to happy, well cared for dogs who did not have the
stress of going to a kennel. It is comforting to know that if I need to go away again,
Catherine is an excellent option for the dogs who probably are hoping that is not too
far off.
        </Testimonial>
        <Testimonial by="Judy P">
        I have three pure bred cats, 2 are 2 years and one 4 months, they are my babies and I am glad to have found Catherine to look after them when I travel for business or pleasure! Thanks Catherine!
        </Testimonial>
      </section>
    </main>
    <Banner
      imagepath="/static/img/cathy-and-jack.jpg"
      style={{
        backgroundPosition: 'top center',
        height: '30vh',
      }}
    >
      <Button href="tel:14164079638">call me</Button>
    </Banner>
    <style jsx>{`
      section {
        text-align: center;
        margin: 0 auto;
      }

      section.testimonials {
        text-align: left;
      }
    `}
    </style>
  </Layout>
);
