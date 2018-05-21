import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { BLACK } from '../constants/colors';
import { FACEBOOK, INSTAGRAM, EMAIL, PHONE } from '../constants/external';

const iconStyle = {
  fontSize: '2rem',
  margin: '0 .25rem',
};
export default () => (
  <Layout title="about me">
    <Banner imagepath="/static/img/cathy-and-dog.jpg">
      <h1>I'm a pet owner!</h1>
      <h2>
        <Icon icon="heart" style={iconStyle} />
        <Icon icon="paw" style={iconStyle} />
        <Icon icon="smile" style={iconStyle} />
      </h2>
      <p>
      I care for all breeds of dogs and cats as well as lizards, snakes, and other exotic pets.
      </p>
    </Banner>
    <main>
      <section>
        <h1>All About Me</h1>
        <p>
    My name is Catherine Fudge and I am the owner/ operator of Paws and Exotics Pet Care Services.
     I have been in the animal care industry 5 years caring for all breeds of dogs and cats as well as
     lizards, snakes, and other exotic pets.
        </p>
        <p>
    I graduated from the Animal Care program at Sheridan College with honours in 2011.
     Since graduation, I have worked in veterinary hospitals treating all breeds of dogs and cats,
    and even some reptiles. I have personally owned and fostered dogs, cats, and reptiles.
        </p>
        <p>
        Please feel free to reach out to me with questions, check out my social media links
         below and take a look at some of my reviews here.
        </p>
        <div>
          <Button href={PHONE}>call me</Button>
          <p>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
              <Icon icon="facebook" style={iconStyle} />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Icon icon="instagram" style={iconStyle} />
            </a>
          </p>
        </div>
      </section>
    </main>
    <style jsx>{`
      div {
        text-align: center;
      }

      a {
        color: ${BLACK}
      }
    `}
    </style>
  </Layout>
);
