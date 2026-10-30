import {
  IconArchive,
  IconBuildingStore,
  IconChecklist,
  IconClock,
  IconShieldLock,
  IconWriting,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ClassNameValue } from "tailwind-merge";
import AnimatedButton from "@/components/ui/animated-button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function SolutionsCardCustom({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={cn(
        "border border-secondary bg-card/60 text-center",
        className,
      )}
    >
      <div className="relative mx-auto mb-4 flex aspect-square size-12 items-center justify-center rounded-full border border-primary text-primary before:absolute before:-inset-2 before:rounded-full before:border before:border-secondary">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl text-primary">{title}</h3>
        <p className="mt-2 text-base leading-tight text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="text-center h-[90dvh] pt-30"
      >
        <div className="bg-linear-to-t from-background via-background/50 via-30% to-transparent h-full p-6">
          <div className="max-w-3xl h-full flex flex-col items-center justify-center mx-auto gap-6">
            <img
              src="https://docufybd.com/docufy-fiscal.png"
              alt="Docufy Logo"
              className="h-36"
            />
            <h1 className="uppercase font-serif lg:text-4xl">
              One Less Thing to Worry
            </h1>
            <p className="text-xl text-secondary">
              Clear, reliable tax support for filing, record organization,
              return preparation, and tax issues, so you can move forward with
              confidence.
            </p>
            <div className="flex gap-6 max-sm:flex-col justify-center items-center w-full">
              <AnimatedButton variant="accent">
                <a
                  href="https://calendly.com/docufy-bd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Request A Consultation
                </a>
              </AnimatedButton>
              <AnimatedButton variant="outline">
                <a
                  href="mailto:info@fiscal.docufybd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex justify-center items-center"
                >
                  Contact Us
                </a>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-30">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <h2 className="capitalize leading-relaxed tracking-wider text-center text-primary">
            Values Why Docufy Fiscal Stands Out
          </h2>

          <div className="relative mx-auto grid max-w-6xl overflow-hidden gap-2 backdrop-blur-xl *:border-secondary *:bg-card/50 *:p-12 sm:grid-cols-2 lg:grid-cols-3">
            <SolutionsCardCustom
              title="End-to-end fiscal support"
              description="One team handles tax filing, VAT, audits, RJSC returns, consultancy, and dispute matters so nothing gets scattered across vendors."
              icon={<IconChecklist className="size-6" />}
            />
            <SolutionsCardCustom
              title="Accuracy with accountable process"
              description="We focus on careful review, clean documentation, and timely submission, which lowers the chance of avoidable errors and last-minute fixes."
              icon={<IconWriting className="size-6" />}
            />
            <SolutionsCardCustom
              title="Confidential by default"
              description="Client records are treated with strict confidentiality, so sensitive tax and financial information stays protected throughout the process."
              icon={<IconShieldLock className="size-6" />}
            />
            <SolutionsCardCustom
              title="Guidance that makes tax manageable"
              description="We turn complex tax, VAT, and compliance requirements into practical next steps that are easier for teams and founders to act on."
              icon={<IconBuildingStore className="size-6" />}
            />
            <SolutionsCardCustom
              title="Research-led support"
              description="Our approach is built on clear communication and careful review, so clients get informed support instead of generic filing advice."
              icon={<IconArchive className="size-6" />}
            />
            <SolutionsCardCustom
              title="Prepared for both routine and urgent needs"
              description="From recurring compliance work to notices and disputes, the team is set up to respond quickly when the situation needs attention."
              icon={<IconClock className="size-6" />}
            />
          </div>
        </div>
      </section>
      <section className="py-30 flex flex-col justify-center text-center items-center gap-4 p-6">
        <p>
          Ready to elevate your tax experience? Let's get started with Docufy
          Fiscal.
        </p>
        <div className="flex gap-6 max-sm:flex-col w-full justify-center items-center">
          <AnimatedButton variant="accent">
            <a
              href="https://calendly.com/docufy-bd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              Book a Consultation
            </a>
          </AnimatedButton>
          <AnimatedButton variant="outline">
            <Link
              to="/solutions"
              className="w-full h-full flex justify-center items-center"
            >
              Explore Solutions
            </Link>
          </AnimatedButton>
        </div>
      </section>
    </>
  );
}
