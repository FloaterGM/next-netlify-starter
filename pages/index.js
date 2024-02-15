import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Te quieroooo!!!</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .heart {
            position: relative;
            width: 100px;
            height: 90px;
            transform: rotate(-45deg);
            margin: 50px auto;
            animation: drawHeart 2s forwards;
            opacity: 0;
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
          .additional-message{
            text-align: center;
            padding: 0px 50px 0px 50px;
          }

          @keyframes drawHeart {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </Head>

      <main>
        <div className="additional-message">
          Bueno, esto es una página que hice en la noche solo para decirte que en verdad te aprecio mucho, me gustaría poder darte todo el amor que tengo y demostrártelo pero poco a poco se va dando, aunque creo que sabes de sobra que es un poco mucho. Sin embargo, espero poder estar a tu lado un tiempo bastante eterno, para que veas que el cariño que tengo hacia ti cada día se hace más grande. Gracias por permitirme estar a tu lado.
        </div>
        <div className="heart"></div>
        <div className="message">Te quiero mucho cielo</div>
      </main>
    </div>
  )
}