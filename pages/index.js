import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>김태현 | 포트폴리오</title>
        <meta name="description" content="김태현의 포트폴리오입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>홈입니다.</h1>
    </Layout>
  )
}
