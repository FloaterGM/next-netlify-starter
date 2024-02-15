import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .heart {
            position: relative;
            width: 100px;
            height: 90px;
            transform: rotate(-45deg);
            margin: 50px auto;
          }
          .heart:before,
          .heart:after {
            position: absolute;
            content: "";
            left: 50px;
            top: 0;
            width: 50px;
            height: 80px;
            background-color: red;
            border-radius: 50px 50px 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
          }
          .heart:after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
          }
          .message {
            text-align: center;
            margin-top: 20px;
            font-size: 20px;
          }
        `}</style>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="heart"></div>
        <div className="message">Te quiero mucho cielo</div>
      </main>

      <Footer />
    </div>
  )
}
