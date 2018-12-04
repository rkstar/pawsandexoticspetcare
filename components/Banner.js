import React from "react";

export default ({ children, imagepath, style = {} }) => (
  <div className="banner" style={style}>
    {children}
    <style jsx>
      {`
        .banner {
          background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.35) 0%,
              rgba(0, 0, 0, 0.25) 100%
            ),
            url(${imagepath});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      `}
    </style>
  </div>
);
