import React from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';
import { WHITE, DARK_ORANGE } from '../constants/colors';
import { FACEBOOK, INSTAGRAM, EMAIL, PHONE } from '../constants/external';

export default () => (
  <footer>
    <section>
      <h1>PAWS & EXOTICS PET CARE SERVICES</h1>
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>services</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </ul>
      <p />
    </section>
    <section>
      <ul className="social">
        <li>
          <a className="icon" href={FACEBOOK} target="_blank" rel="noopener noreferrer">
            <Icon icon="facebook" />
          </a>
        </li>
        <li>
          <a className="icon" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Icon icon="instagram" />
          </a>
        </li>
        <li>
          <a className="icon" href={EMAIL}>
            <Icon icon="at" />
          </a>
        </li>
        <li>
          <a className="icon" href={PHONE}>
            <Icon icon="mobile-alt" />
          </a>
        </li>
      </ul>

      <p>
      7044 Estoril Rd <br />
      Mississauga, ON L5N 1N4
      </p>
    </section>
    <style jsx>{`
      footer {
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        font-size: .7rem;
        font-weight: 100;
      }

      section {
        max-width: 49vw;
      }

      h1 {
        font-size: 1rem;
        margin: 0;
        margin-bottom: 1rem;
        line-height: 1.2rem;
        font-weight: 100;
      }

      a {
        color: ${WHITE};
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      ul {
        list-style-type: none;
      }

      ul li {
        margin: .5rem .25rem;
      }

      ul.social {
        margin-bottom: 1rem;
      }

      ul.social li {
        display: inline-block;
        margin: 0 .5rem;
      }

      a.icon {
        font-size: 1.5rem;
      }
    `}
    </style>
  </footer>
);
