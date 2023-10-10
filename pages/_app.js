// pages/_app.js (or pages/_app.tsx for TypeScript)
import '../styles/tailwind.css'; // Import your Tailwind CSS file
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
