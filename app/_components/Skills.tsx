import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import Section from "./Section";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { WebDev } from "./icons/WebDev";

export default function Skills() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ich arbeite gerne an anspruchsvollen und kreativen Projekten.
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">
            Technologien
          </h3>
          <p className="text-sm text-muted-foreground">
            Ich verfüge über Kenntnisse in HTML, CSS, JavaScript,{" "}
            <Code>React.js</Code>, <Code>Next.js</Code>, <Code>TypeScript</Code>{" "}
            sowie modernen Frameworks wie <Code>Tailwind CSS</Code> und
            Bootstrap...
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <WebDev size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tools</h3>
          <p className="text-sm text-muted-foreground">
            UX/UI-Design, VSCode, Scrum, JIRA, Confluence, Photoshop, ADOBE
            Target Test, SEA/SEO
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Support</h3>
          <p className="text-sm text-muted-foreground">
            Beratung / Analyse / Wartung / CRO
          </p>
        </div>
      </div>
    </Section>
  );
}
