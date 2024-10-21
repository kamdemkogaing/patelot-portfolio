import { Badge } from "@/components/ui/badge";
import Section from "./Section";
import { ContactCard } from "./Statuts";

export default function Conatact() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Mich Kontaktieren</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ich freue mich auf Deine Rückmeldung.
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          url="https://www.linkedin.com/in/patrick-kamdem-b88b3630b/"
          image="pk_icon.png"
          mediumImage="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png"
          name="@patrick-kamdem-b88b3630b"
          description="Ich bin auf LinkedIn"
        />
        <ContactCard
          url="https://www.xing.com/profile/Patrick_Kamdem3"
          image="pk_icon.png"
          mediumImage="https://img.icons8.com/?size=512&id=13979&format=png"
          name="@Patrick_Kamdem3"
          description="Ich bin auf XING"
        />
        <ContactCard
          url="mailto:patrick-kamdem@patelot.de"
          image="pk_icon.png"
          mediumImage="https://img.freepik.com/freie-psd/entwurf-des-telefonsymbols_23-2151311652.jpg"
          name="patrick-kamdem@patelot.de"
          description="Schick mir eine Email"
        />
      </div>
    </Section>
  );
}
