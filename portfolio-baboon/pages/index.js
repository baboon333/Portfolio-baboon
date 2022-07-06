import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>한상은 포트폴리오</title>
        <meta name="description" content="꾸준한 개발자!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1 className="text-3xl font-bold underline">
      홈 입니다
    </h1>

    </Layout>
  )
}
