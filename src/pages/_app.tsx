//esse arquivo é onde fica cosias que nao mudao e estao em todas as paginas
//tudo que é para todas as paginas

import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
