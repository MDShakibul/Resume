import Head from "next/head";
import { Home } from "@/components/home/Home";
import { MouseFollower, UpdateFollower } from "react-mouse-follower";

export default function home() {
  return (
    <>
      <Head>
        <title>MD Shakibul Islam | Full Stack Developer</title>
        <link rel="shortcut icon" href="/fav.jpg" />
        <meta name="description" content="MD Shakibul Islam | Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="MD Shakibul Islam | Full Stack Developer" />
        <meta name="description" content="Hey! I'm MD Shakibul Islam, and I'm a Bachelor of Science in Computer Science and Engineering." />

        <meta property="og:title" content="MD Shakibul Islam | Full Stack Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://shakibulislam.com/" />
        <meta property="og:image" content="https://shakibulislam.com/screenshot.png" />
        <meta property="og:description" content="Hey! I'm MD Shakibul Islam, and I'm a Bachelor of Science Computer Science and Engineering." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@si_devz"/>
        <meta name="twitter:title" content="MD Shakibul Islam | Full Stack Developer"/>
        <meta name="twitter:description" content="Hey! I'm MD Shakibul Islam, and I'm a Bachelor of Science Computer Science and Engineering."/>
        <meta name="twitter:creator" content="@si_devz"/>
        <meta name="twitter:image" content="https://shakibulislam.com/screenshot.png"/>

      </Head>
      <MouseFollower />
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}
    >
      <Home />
      </UpdateFollower>
      
    </>
  );
}
