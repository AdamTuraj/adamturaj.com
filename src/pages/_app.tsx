import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Mouse from "../components/Mouse";
import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Adam Turaj</title>
                <meta
                    name="description"
                    content="Adam Turaj is a Mechatronics Engineer studying at the university of Waterloo!"
                />
                <link rel="canonical" href="https://www.adamturaj.com/" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/seomedia/apple-touch-icon.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/seomedia/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/seomedia/favicon-16x16.png"
                />
                <link rel="manifest" href="/seomedia/site.webmanifest" />

                <meta name="msapplication-TileColor" content="#00a300" />
                <meta name="theme-color" content="#00ed3b" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index,follow" />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IE" />
                <meta property="og:url" content="https://www.adamturaj.com/" />
                <meta property="og:site_name" content="Adam Turaj" />
                <meta
                    property="og:description"
                    content="Portfolio of Adam Turaj, a University of Waterloo Mechatronics Engineering student"
                />
                <meta property="og:image" content="/adamturaj.jpg" />
                <meta property="og:image:alt" content="Image of Adam Turaj" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@adamturaj" />
            </Head>
            <Mouse />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
