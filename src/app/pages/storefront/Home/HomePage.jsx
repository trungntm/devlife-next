import { Helmet } from 'react-helmet-async';
import ImageHero from './components/ImageHero/ImageHero';
import { Intro } from './components/Intro/Intro';

export default function HomePage(props) {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <ImageHero />
      <Intro/>
    </>
  );
}
