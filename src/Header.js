import React from "react";

// TODO add more cat images
const HEADER_IMAGES = [
  "https://dl.dnanex.us/F/D/VKJ4V96GG5qxKP1Y1xGXx4pY5B3Gb23KPxFVVx1B/headercat.png"
];

const image = HEADER_IMAGES[Math.floor(Math.random() * HEADER_IMAGES.length)];

export default () => (
  <header style={{backgroundImage: `url(${image})`}}>
    <h1>Welcome to Cat Cafe!</h1>
  </header>
);
