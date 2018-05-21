import React from 'react';
import { BURNT_ORANGE, WHITE } from '../constants/colors';

export default ({ children, ...props }) => (
  <a {...props}>
    {children}
    <style jsx>{`
      display: inline-block;
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;
      background-color: ${BURNT_ORANGE};
      color: ${WHITE};
      padding: .5rem 1rem;
      margin: .5rem 1rem;
      border-radius: 3px;
    `}
    </style>
  </a>
);
