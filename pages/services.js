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
  <Layout title="services">
    <Banner imagepath="/static/img/big-lizard-oreo.jpg">
      <h1>That's what I do!</h1>
      <img src="/static/img/animals-line.png" />
    </Banner>
    <section>
      <article>
        <h1>Dog Walking</h1>
        <p>
        I offer private, leashed walks in your local neighbourhood. You can book either 30 or 60-miunute walks.
        </p>
        <img src="/static/img/2-big-dogs.jpg" alt="2 big dogs on a deck" />
      </article>
      <article>
        <h1>Drop-In Visits</h1>
        <p>
        Drop-in visits for dogs, cats, pocket pets, and reptiles. While I'm there, I will clean/change litter, freshen water, feed,
         clean cages and/or aquariums, potty break, playtime, and socialization (aka love!). I will also clean up any messes that
         happened before or during my visit. If your pet is on medication, I will also administer as required (oral meds only).
        </p>
        <img src="/static/img/bunnies.jpg" alt="cute bunnies eating" />
      </article>
      <article>
        <h1>Pet Sitting</h1>
        <p>
        I offer live-in or daily-visit vacation pet setting. For live-in sitting, I will care for your pets as well as your home.
         This includes watering plants, bringing in the mail, basic cleaning, and everything included with drop-in visits.
        </p>
        <img src="/static/img/jerry.jpg" alt="jerry!" />
      </article>
      <article>
        <h1>Basic Grooming</h1>
        <p>
        I can also do some basic grooming of your pets such as nail clipping, de-matting fur, and ear cleaning.
        </p>
        <img src="/static/img/cat-toes.jpg" alt="ready for a nail trim!" />
      </article>
    </section>
    <Banner imagepath="/static/img/2-cats.jpg">
      <h1>Still have questions?</h1>
      <article>
        <Button href={PHONE}>call me</Button>
        <Button href={EMAIL}>email me</Button>
      </article>
    </Banner>
    <style jsx>{`
      div {
        text-align: center;
      }

      p {
        margin: 0 .5rem;
      }

      img {
        margin: 1rem 0;
      }

      a {
        color: ${BLACK}
      }

      @media (min-width: 1025px) {
        section {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          align-content: space-around;
          flex-wrap: wrap;
        }

        article {
          width: 45%;
        }
      }
    `}
    </style>
  </Layout>
);
