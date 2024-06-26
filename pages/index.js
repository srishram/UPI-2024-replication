import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UPI Advice 2024 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header title="UPI Advice and Interview Study Codebook " />
        <p className="description">
         Link to codebook
        </p>
      </main>

      <Footer />
    </div>
  )
}
