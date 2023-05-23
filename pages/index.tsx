import Head from 'next/head'
import Layout from '@/components/Layout'

/*function P(props){
  return <div>{props.children}</div>
}*/

export default function Home() {
  return (
  <>
    <Head>
      {/* 이렇게 해두면 탭 제목이 바뀜 */}
      <title>WEB!</title>
    </Head>
      <h2>Welcome</h2>
      Hello,World!
    {/*<P>w</P>*/}
  </>
  )
}
