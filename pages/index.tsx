import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ilham Farobi</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="logo">
            <Image src="/logo.png" alt="Ilham Farobi" width="367" height="93" />
          </div>
          <h2>
            Hey there! I am a Software Engineer.
          </h2>
          <p>
            Currently working at 
            <a
              href="https://latecheckout.studio"
              target="_blank"
              rel="noreferrer"
            >
              Late Checkout
            </a>
            as a Fullstack Engineer. Work and lead some projects such as <a href="https://jawa.gg" rel="nofollow noreferrer" target="_blank">JAWA</a>, <a href="https://latecheckout.studio" rel="nofollow noreferrer" target="_blank">Our Company Page</a>, etc. I write backend (Node.js, Express) and Frontend (React, Next.js).
            Interested to hire me?
            <a href="mailto:ilhamfarobi@gmail.com">Hit me!</a>
          </p>
          <div className="links">
            <a href="mailto:ilhamfarobi@gmail.com" className="icon">
              <i className="icon-envelope"></i>
            </a>
            <a href="https://github.com/ifarobi" className="icon">
              <i className="icon-social-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ifarobi/"
              className="icon"
            >
              <i className="icon-social-linkedin"></i>
            </a>
            <a href="https://twitter.com/IFarobi" className="icon">
              <i className="icon-social-twitter"></i>
            </a>
            <a href="https://instagram.com/ifarobi" className="icon">
              <i className="icon-social-instagram"></i>
            </a>
          </div>
          <div className="footer">
            <span>©2021 Ilham Farobi</span>
          </div>
        </div>
      </div>
      <style jsx>{`
      h2,
      p {
        text-align: center;
      }

      h2 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 16px;
        line-height: 150%;
      }

      a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
      }

      a:hover {
        text-decoration: underline;
      }

      .container {
        max-width: 680px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 20px;
      }

      .links {
        width: 200px;
        margin: auto;
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .icon {
        font-size: 22px;
      }

      .icon:hover {
        text-decoration: none;
      }

      .logo {
        text-align: center;
        margin-bottom: 40px;
      }

      .logo img {
        width: 367px;
        height: auto;
      }

      .footer {
        text-align: center;
        margin-top: 80px;
        color: rgb(105, 105, 105);
      }
      `}</style>
    </>
  )
}

export default Home
