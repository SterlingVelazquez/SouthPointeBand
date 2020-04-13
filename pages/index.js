import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import "./_app.js"

export default function Index() {
  return (
    <div>
    <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="https://img.icons8.com/color/48/000000/rock-music.png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"/>
        <script src="https://kit.fontawesome.com/84e39d63f3.js" crossOrigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="https://img.icons8.com/color/48/000000/rock-music.png"/>
        <title>South Pointe Band</title>
    </Head>

    <img src="https://1.bp.blogspot.com/-A1Neip9wnRc/XGHkafCbIMI/AAAAAAAACdY/dejOLxC5RgsTKjF6ZFSjQ7GUwW7UAHVqwCKgBGAs/w3840-h2160-c/sunset-beach-sea-horizon-scenery-8K-165.jpg"></img>
    <p>DEBUT EP</p>
    <p style={{fontSize:"110px", marginTop:"-60px"}}><b>AURORA</b></p>
    <button style={{top:"-100px"}}>LISTEN NOW</button>

    <div className="navigationBar">
      <img src="https://concord.com/wp-content/uploads/2019/03/concord-logo-2019-white.png"></img>
    <button>HOME</button> 
    <button>MERCH</button> 
    <button>MUSIC</button>
    <button>VIDEOS</button> 
    <Link href="/about">
        <button><a>ABOUT</a></button>
    </Link>
    <button>CONTACT</button>
    </div>

    </div>
  );
}