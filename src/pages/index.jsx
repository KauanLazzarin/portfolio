import Head from 'next/head'
import AboutMe from '../components/About-Me/AboutMe'
import Header from '../components/Header/Header'
import Projects from '../components/Projects/Projects'
import Techs from '../components/Techs/Techs'

export default function Home() {

  return (
    <>
      <Head>
        <title>Kauan Lazzarin || Desenvolvedor FullStack</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Permanent+Marker&family=Caveat&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/icons/favicon.png" />
      </Head>

      <Header /> 
      <AboutMe />
      <Techs />
      <Projects />
    </>
  )
}
