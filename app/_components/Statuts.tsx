/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import {
  ArrowUpRight,
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import pkIcon from "/app/pk_icon.png";

export const Statuts = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-10">
      <div className="flex-[3] w-full">
        <Card className="flex w-full p-4 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Einige Projekte:</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((projet, index) => {
              return (
                <SideProject
                  key={index}
                  Logo={projet.Logo}
                  title={projet.title}
                  description={projet.description}
                  url={projet.url}
                />
              );
            })}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Berufserfahrung:</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => {
              return <Work key={index} {...work} />;
            })}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mich kontaktieren:</p>
          <ContactCard
            url="https://www.linkedin.com/in/patrick-kamdem-b88b3630b/"
            image="../pk_icon.png"
            mediumImage="https://e7.pngegg.com/pngimages/602/665/png-clipart-linkedin-linkedin-thumbnail.png"
            name="@patrick-kamdem-b88b3630b"
            description="20'00"
          />
          <ContactCard
            url="https://www.xing.com/profile/Patrick_Kamdem3"
            image="../pk_icon.png"
            mediumImage="https://img.icons8.com/?size=512&id=13979&format=png"
            name="@Patrick_Kamdem3"
            description="24'00"
          />
          <ContactCard
            url="mailto:patrick-kamdem@patelot.de"
            image="../pk_icon.png"
            mediumImage="https://img.freepik.com/freie-psd/entwurf-des-telefonsymbols_23-2151311652.jpg"
            name="patrick-kamdem@patelot.de"
            description="24'00"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Weight,
    title: "My Portfolio",
    description:
      "Mein Name ist Patrick Kamdem, und ich bin ein engagierter Frontend-Entwickler mit umfassender Erfahrung in der Entwicklung moderner, benutzerfreundlicher Webanwendungen.",
    url: "https://portfolio.patelot.de/",
  },
  {
    Logo: Code,
    title: "Boxy Generator",
    description:
      "Erstellen Sie mit wenigen Klicks maßgeschneiderte, responsive Box-Layouts für Ihre Website. Unser Tool ermöglicht es Ihnen, individuelle Designs zu generieren, die sich perfekt an verschiedene Bildschirmgrößen anpassen – schnell, effizient und ganz ohne Programmierkenntnisse.",
    url: "https://boxy.patelot.de/",
  },
  {
    Logo: Code,
    title: "Countries Selection",
    description:
      "Das Projekt gibt einen Überblick über die Hauptstadt und die ungefähre Bevölkerungszahl der genannten Länder.",
    url: "https://countries.patelot.de/",
  },
  {
    Logo: StickyNote,
    title: "Passwort Generator",
    description:
      "Sicher und zufällig erstelltes Passwort, das den höchsten Sicherheitsstandards entspricht und ideal für den Schutz Ihrer sensiblen Daten ist.",
    url: "https://pwd-generator.patelot.de/",
  },
  {
    Logo: Rss,
    title: "AI Domain Suche",
    description: "Finden Sie den perfekten Domainnamen für Ihre Firma.",
    url: "https://www.ionos.de/ki-domain-namen-generator",
  },
  {
    Logo: MessageCircle,
    title: "Bulk Domain Suche",
    description:
      "Massenabfrage für Domains. Prüfen Sie mehrere Domains gleichzeitig.",
    url: "https://www.ionos.de/domains/massen-domain-suche",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const WORKS: WorkProps[] = [
  {
    image: "https://www.ionos.de/_next/static/media/ionos.b2910554.svg",
    title: "IONOS",
    role: "Software Developer",
    date: "2014 - Heute",
    url: "https://www.ionos.de",
    freelance: true,
  },
  {
    image:
      "https://www.goetz-auktion.de/wp-content/uploads/sites/7/2021/03/logo-160x113.png",
    title: "Götz",
    role: "IT Mitarbeiter",
    date: "2013 - 2014",
    url: "https://www.goetz-auktion.de",
  },
  {
    image: "https://www.siemens.com/assets/static/logo-white.2f518675.svg",
    title: "Siemens",
    role: "Praktikant",
    date: "2012 - 2013",
    url: "https://www.siemens.com",
    freelance: false,
  },
  {
    image: "https://www.ionos.de/_next/static/media/ionos.b2910554.svg",
    title: "IONOS",
    role: "Werkstudent IT/QA",
    date: "2008 - 2012",
    url: "https://www.ionos.de",
    freelance: false,
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
}) => {
  return (
    <Link href={props.url!} className="w-full">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative">
          <Image
            className="w-10 h-10 rounded-full object-contain"
            src={pkIcon}
            alt={props.name}
          />
          <img
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
            src={props.mediumImage}
            alt={props.name}
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold">{props.name}</p>
          </div>

          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
