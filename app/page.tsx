import Conatact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Statuts } from "./_components/Statuts";

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
      <Footer />
    </main>
  );
}
