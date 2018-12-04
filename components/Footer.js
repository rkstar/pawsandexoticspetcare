import React from "react";
import Link from "next/link";
import Icon from "../components/Icon";
import { WHITE, DARK_ORANGE } from "../constants/colors";
import { FACEBOOK, INSTAGRAM, EMAIL, PHONE } from "../constants/external";

export default () => (
  <footer>
    <section>
      <h1>PAWS & EXOTICS PET CARE SERVICES</h1>
    </section>
    <section>
      <ul className="social">
        <li>
          <a
            className="icon"
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="facebook" />
          </a>
        </li>
        <li>
          <a
            className="icon"
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    </section>
    <section className="menu">
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
    </section>
    <section className="menu">
      <img src="/static/img/insured.png" alt="Bonded and Insured" /> &nbsp;
      <img
        src="/static/img/pet_first_aid.jpg"
        alt="Certified by St John's ambulance for pet first aid"
      />
    </section>
    <style jsx>
      {`
        footer {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          flex-wrap: wrap;
          justify-content: space-around;
          font-weight: 100;
        }

        section {
          text-align: center;
          width: 50%;
        }

        section.menu {
          text-align: center;
          width: 100%;
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
          display: inline-block;
          margin: 0.5rem 1rem;
        }

        ul.social {
          margin-bottom: 1rem;
        }

        ul.social li {
          display: inline-block;
          margin: 0 0.5rem;
        }

        a.icon {
          font-size: 1.5rem;
        }
      `}
    </style>
  </footer>
);
