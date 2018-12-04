import React from "react";
import Icon from "./Icon";
import { LIGHT_GREY } from "../constants/colors";

const iconStyle = {
  color: LIGHT_GREY,
  margin: "0 .25rem",
  fontSize: "2rem"
};

export default ({ by, children }) => (
  <blockquote className="flexquote">
    <Icon icon="quote-left" style={iconStyle} />
    {children}
    <Icon icon="quote-right" style={iconStyle} />
    <p className="byline">{by}</p>
    <style jsx>
      {`
        @media (min-width: 1025px) {
          .flexquote {
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 30%;
          }
        }

        .byline {
          margin-top: 0.5rem;
          text-align: right;
          font-weight: 300;
          font-style: italic;
        }
      `}
    </style>
  </blockquote>
);
