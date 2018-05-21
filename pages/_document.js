import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { BLACK, WHITE } from '../constants/colors';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/static/css/reset.css" rel="stylesheet" />
          <link href="/static/css/main.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>{`
            body {
              background-color: ${WHITE};
              color: ${BLACK};
            }
          `}
          </style>
          <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

