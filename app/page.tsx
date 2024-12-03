import Conatact from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import Hero from "./_components/hero/Hero";

import { Spacing } from "./_components/helpers/Spacing";
import Skills from "./_components/skills/Skills";
import { Statuts } from "./_components/status/Statuts";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Statuts />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Conatact />
      <Spacing size="md" />
      {/* <Dummy /> */}
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
