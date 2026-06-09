import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Experience from '../components/Sections/Experience';
import Hero from '../components/Sections/Hero';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import {homePageMeta} from '../data/data';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </Page>
  );
});

export default Home;
