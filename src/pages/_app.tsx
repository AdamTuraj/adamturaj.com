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
        description="Adam Turaj is a Canada based software engineer who specializes in developing (and sometimes designing) spectacular services!"
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
        ]}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.adamturaj.com/",
          site_name: "Adam Turaj",
          description:
            "This is the portfolio of Adam Turaj, a Canadian based software engineer.",
          images: [{ url: "/adamturaj.png", alt: "Image of Adam Turaj" }],
        }}
      />
      <Mouse />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
