import Head from "next/head";
import Header from "components/Headers";
import Branch from "components/Branch";
import Collection from "components/Collection";
import Card from "components/Card";
import Footer from "components/Footer";
import SuperApp from "components/SuperApp"
import Contact from "components/Contact"
import Faq from "components/Faq"


export default function Home() {
  return (
    <>
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Branch />
      <Collection />
      <Card />
      <Faq />
      <SuperApp />
      <Contact />
      <Footer /></>
  );
}
