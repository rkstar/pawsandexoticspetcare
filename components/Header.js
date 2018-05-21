import React from 'react';
import Link from 'next/link';
import { BLACK, WHITE, BRIGHT_ORANGE } from '../constants/colors';
import Menu from './Menu';

export default () => (
  <header>
    <div>
      <Link href="/">
        <img src="/static/img/logo.png" alt="Paws & Exotics Pet Care logo" />
      </Link>
      <h1>PAWS & EXOTICS</h1>
    </div>
    <Menu />
    <style jsx>{`
      header {
        z-index: 100;
        background-color: ${BRIGHT_ORANGE};
        color: ${BLACK};
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .25rem;
        box-shadow: 0 2px 2px ${BLACK};
        margin-bottom: 2px;
      }

      div {
        display: flex;
        align-items: center;
      }

      img {
        max-height: 3.5rem;
        width: auto;
      }

      h1 {
        font-size: 1.25rem;
        display: inline-block;
        vertical-align: middle;
        font-weight: 300;
        letter-spacing: -.1rem;
      }
    `}
    </style>
  </header>
);
