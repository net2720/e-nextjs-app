import Head from 'next/head'
import Layout from '@/components/Layout'

export default function Home() {
  return (
  <>
    <Head>
      {/* 이렇게 해두면 탭 제목이 바뀜 */}
      <title>WEB!</title>
    </Head>
      <h2>Create!</h2>
      Hello, Create!
  </>
  )
}
