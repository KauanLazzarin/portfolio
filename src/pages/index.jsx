import Head from 'next/head'
import AboutMe from '../components/About-Me/AboutMe'
import Header from '../components/Header/Header'
import MobileTechs from '../components/Mobile-Techs/MobileTechs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kauan Lazzarin || Desenvolvedor FullStack</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Permanent+Marker&family=Caveat&display=swap" rel="stylesheet" />
      </Head>

      <Header /> 
      <AboutMe />
      <MobileTechs />
    </div>
  )
}
