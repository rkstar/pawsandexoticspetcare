import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ServiceMap from '../components/ServiceMap';
import Testimonial from '../components/Testimonial';
import { BURNT_ORANGE } from '../constants/colors';

const iconStyle = {
  margin: '0 .25rem',
};
export default () => (
  <Layout title="home page">
    <Banner imagepath="/static/img/lizard.jpg">
      <h1>Reptiles need love too!</h1>
      <h2>
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="heart" style={iconStyle} />
      </h2>
      <p>
      Everyone thinks puppies and kittens are cute but
       lizards, snakes, rats, and other "creepy-crawlies" are cute too.
      </p>
      <Button href="tel:14164079638">call me</Button>
    </Banner>
    <main>
      <section>
        <h1>All breeds, all species!</h1>
        <p>
        With over 10 years of exotic pet care experience, I am the best choice for
         short and long term care for your snakes, lizards, pocket pets, cats, and dogs.
        </p>
      </section>

      <section>
        <h1>Pet Sitting</h1>
        <p>
        Leaving your pet while you're away can be stressful. Consider hiring a professional to care for your pet and <a href="https://youtu.be/NT1tZmGvFfY" target="_blank" rel="noopener noreferrer">dance your cares away.</a>
        </p>
      </section>

      <section>
        <h1>Dog Walking</h1>
        <p>
        Dogs love going for walks at all times of the day and night; turns out I do too! If you need your dog taken for a walk at morning, noon, or night, <a href="https://youtu.be/Niu9Zmrx0p8" target="_blank" rel="noopener noreferrer">I'll be there for you.</a>
        </p>
      </section>
    </main>
    <section>
      <h1>Service Area</h1>
      <p>
      My usual service area is basically Mississauga, but I have also serviced clients in Brampton, Oakville, and Etobicoke as well.
      </p>
      <ServiceMap />
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

      a {
        color: ${BURNT_ORANGE};
      }
    `}
    </style>
  </Layout>
);
