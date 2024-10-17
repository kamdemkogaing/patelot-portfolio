/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import myImg from "../my_face_pk.png";
import { Code } from "./Code";
import Section from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <Section className="flex max-md:flex-col items-center gap-10">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Patrick Kamdem
        </h2>
        <h3 className="text-3xl font-caption">Software Developer / Frontend</h3>
        <p className="text-base">
          Ich bin ein engagierter
          <Link href="https://www.linkedin.com/in/patrick-kamdem-b88b3630b">
            <Code className="inline-flex items-center gap-1">
              <LinkedinIcon size={16} className="inline" />
              Frontend-Entwickler
            </Code>
          </Link>
          mit Erfahrung in der Entwicklung moderner, benutzerfreundlicher
          Webanwendungen und andere spannende Projekte.
          <Link href="https://boxy.patelot.de">
            <Code className="inline-flex items-center gap-1">
              Das Projekt Boxy Generator
            </Code>
            .
          </Link>{" "}
        </p>
      </div>
      <div className="md:flex md:justify-center md:items-center max-md:m-atuo">
        <Image
          src={myImg}
          width={200}
          height={200}
          alt="patelet's picture"
          className="max-w-xs max-md:w-50 rounded-full"
        />
      </div>
    </Section>
  );
}
