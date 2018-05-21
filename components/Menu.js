import React from 'react';
import Link from 'next/link';
import { WHITE } from '../constants/colors';

export default () => (
  <ul>
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
    <style jsx>{`
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ul li {
        margin: 0 .5rem;
      }
      ul li a {
        color: ${WHITE};
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 300;
        font-size: .9rem;
      }
      ul li a:hover {
        text-deocration: underline;
      }
    `}
    </style>
  </ul>
);
