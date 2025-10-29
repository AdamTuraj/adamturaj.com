import "../styles/globals.css";
import type { AppProps } from "next/app";
import Mouse from "../components/Mouse";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <NextSeo
                title="Adam Turaj"
                description="Adam Turaj is a Mechatronics Engineer studying at the university of Waterloo!"
                canonical="https://www.adamturaj.com/"
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "/favicon.ico",
                    },
                    {
                        rel: "apple-touch-icon",
                        href: "/seomedia/apple-touch-icon.png",
                    },
                    {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/seomedia/favicon-32x32.png",
                    },
                    {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/seomedia/favicon-16x16.png",
                    },
                    {
                        rel: "manifest",
                        href: "/seomedia/site.webmanifest",
                    },
                ]}
                additionalMetaTags={[
                    {
                        name: "msapplication-TileColor",
                        content: "#00a300",
                    },
                    {
                        name: "theme-color",
                        content: "#00ed3b",
                    },
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                    },
                    {
                        name: "robots",
                        content: "index,follow",
                    },
                ]}
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://www.adamturaj.com/",
                    site_name: "Adam Turaj",
                    description:
                        "Portfolio of Adam Turaj, a University of Waterloo Mechatronics Engineering student",
                    images: [{ url: "/adamturaj.jpg", alt: "Image of Adam Turaj" }],
                }}
                twitter={{
                    cardType: "summary_large_image",
                    site: "@adamturaj",
                }}
            />
            <Mouse />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
