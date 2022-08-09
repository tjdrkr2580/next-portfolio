import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "./../components/home/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Kim Tae Hyun</title>
        <meta name="description" content="김태현의 포트폴리오입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen items-center justify-center flex-col text-gray-60 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
