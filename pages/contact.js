import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { BLACK, BURNT_ORANGE } from '../constants/colors';
import { FACEBOOK, INSTAGRAM, EMAIL, PHONE } from '../constants/external';

const iconStyle = {
  fontSize: '2rem',
  margin: '0 .25rem',
};
export default () => (
  <Layout title="get in touch!">
    <Banner imagepath="/static/img/cathy-and-puppy.jpg">
      <h1>Get in touch!</h1>
      <h2>
        <Icon icon="mobile-alt" style={iconStyle} />
        <Icon icon="at" style={iconStyle} />
        <Icon icon="child" style={iconStyle} />
      </h2>
      <p>
      Make the first move and I'll take it from there.
      </p>
    </Banner>
    <main>
      <section>
        <h1>What you get from me</h1>
        <p>
        If you are new to pet care services or a have any questions about how I run my business,
         I will guide you through the process to make sure you are comfortable and informed.
        </p>
        <p>
        I will send you pictures of your pet while you're away so that you know they are in good hands
         and they're having fun!
        </p>
      </section>
      <section>
        <h1>What I need from you</h1>
        <p>
        After our initial conversation, I will need you to fill out some paperwork to give me some more information
         about your pet. Once we've filed the papers and scheduled our time together, it's smooth sailing!
        </p>
        <p>
        You can download the PDF paperwork from here:
        </p>
        <p>
          <ul>
            <li>
              <a href="/static/pdf/Veterinary-Release-Form.pdf" target="_blank" rel="noopener noreferrer">Veterinary Release Form</a>
            </li>
            <li>
              <a href="/static/pdf/Paws-And-Exotics-Service-Agreement.pdf" target="_blank" rel="noopener noreferrer">Service Agreement</a>
            </li>
            <li>
              <a href="/static/pdf/Paw-And-Exotics-Cancellation-Policy.pdf" target="_blank" rel="noopener noreferrer">Cancellation Policy</a>
            </li>
          </ul>

        </p>
      </section>
    </main>
    <Banner imagepath="/static/img/happy-dog.jpg">
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

      a {
        color: ${BURNT_ORANGE}
      }

      @media (min-width: 1025px) {
        main {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
        }

        section {
          width: 45%;
        }
      }
    `}
    </style>
  </Layout>
);
