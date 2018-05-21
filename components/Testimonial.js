import React from 'react';
import Icon from './Icon';
import { LIGHT_GREY } from '../constants/colors';

const iconStyle = {
  color: LIGHT_GREY,
  margin: '0 .25rem',
  fontSize: '2rem',
};

export default ({ by, children }) => (
  <blockquote>
    <Icon icon="quote-left" style={iconStyle} />
    {children}
    <Icon icon="quote-right" style={iconStyle} />
    <p className="byline">{by}</p>
    <style jsx>{`
      .byline {
        margin-top: .5rem;
        text-align: right;
        font-weight: 300;
        font-style: italic;
      }
    `}
    </style>
  </blockquote>
);
