import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Weather Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="">The Weather Project</a>
        </h1>

        <p className={styles.description}>
          View real time Weather Forecast of any city, bookmark your favourite cities
        </p>

        <p className={styles.description}>
         Features
        </p>
        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Selecting Location &rarr;</h3>
            <p>You can select any location on the app by either searching or byselecting on the Map.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Bookmarks&rarr;</h3>
            <p>Save your favourite cities by bookmarking them so you can always access them in an instant!</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3> RealTime Data &rarr;</h3>
            <p>Realtime weather information fromso you are always up to date.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Customize &rarr;</h3>
            <p>
              configure your app up to your liking in your settings page
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by OB
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
