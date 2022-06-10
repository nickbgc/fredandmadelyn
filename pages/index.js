import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fred & Madelyn</title>
        <meta name="description" content="Fred and Madelyn Papineau, my loving grandparents.  RIP " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fred and Madelyn Papineau <br></br>
          Rest in Peace
        </h1>
       
        <div className={styles.grid}>
          <Image src="/nikki_pa.png" alt="Nikki" width={400} height={500} className={styles.card} />
        </div>
        <div>
          <p>Nikki and Fred</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Fred and Madelyn Papineau Memorial Website</p>
      </footer>
    </div>
  )
}
