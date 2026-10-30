import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/solutions")({
  component: RouteComponent,
});

type Solution = {
  title: string;
  description: string;
  details: {
    included: string[];
    commercialModel: string;
    deliveryTime: string;
    pricingFactors: string[];
    pricingEstimates: string;
  };
};

const solutions: Solution[] = [
  {
    title: "Corporate Tax Filing",
    description:
      "The Corporate Tax Filing service prepares compliant tax submissions aligned with applicable tax laws. It supports accuracy, audit readiness, and risk management.",
    details: {
      included: [
        "Tax computation and reconciliation",
        "Financial data verification",
        "Allowance and adjustment review",
        "Return preparation",
        "Filing support",
        "Obtaining of Tax Certificate",
      ],
      commercialModel:
        "Pricing is based on the complexity of the tax situation and the volume of financial transactions.",
      deliveryTime: "5–10 working days",
      pricingFactors: [
        "Revenue volume",
        "Deduction complexity",
        "Audit exposure",
      ],
      pricingEstimates: "Starts at BDT 50,000",
    },
  },
  {
    title: "Financial Audit",
    description:
      "The Financial Audit service provides an independent review of financial statements and controls. It supports transparency, compliance, and stakeholder confidence.",
    details: {
      included: [
        "Financial statement examination",
        "Compliance verification",
        "Risk and control assessment",
        "Audit reporting",
        "Improvement recommendations",
        "DVC and Report",
      ],
      commercialModel:
        "Pricing is based on the complexity of the financial statements and the scope of the audit.",
      deliveryTime: "15–30 working days",
      pricingFactors: ["Transaction volume", "Control maturity", "Audit scope"],
      pricingEstimates: "Starts at BDT 40,000",
    },
  },
  {
    title: "Income Tax Filing",
    description:
      "The Income Tax Filing service ensures accurate and compliant preparation of income tax returns. It supports documentation integrity and regulatory adherence.",
    details: {
      included: [
        "Income assessment",
        "Deduction validation",
        "Supporting documentation",
        "Return preparation",
        "Filing assistance",
      ],
      commercialModel:
        "Pricing is based on the complexity of the tax situation and the volume of financial transactions.",
      deliveryTime: "3–7 working days",
      pricingFactors: [
        "Income sources",
        "Documentation completeness",
        "Prior-year adjustments",
      ],
      pricingEstimates: "Starts at BDT 5,000",
    },
  },
  {
    title: "RJSC Return Submission",
    description:
      "This service manages RJSC submissions in line with regulatory timelines and requirements. It ensures accuracy and traceability.",
    details: {
      included: [
        "Return preparation and validation",
        "Data verification",
        "Online submission",
        "Compliance confirmation",
        "Record retention",
        "Obtaining of Tax Certificate",
      ],
      commercialModel:
        "Pricing is based on the complexity of the regulatory requirements and the volume of information to be submitted.",
      deliveryTime: "2–5 working days",
      pricingFactors: [
        "Return type",
        "Accuracy of records",
        "Rectification requirements",
      ],
      pricingEstimates: "Starts at BDT 50,000",
    },
  },
  {
    title: "Tax Consultancy",
    description:
      "Tax Consultancy helps individuals and businesses navigate tax laws, optimize tax liabilities, and ensure compliance with local and international tax regulations.",
    details: {
      included: [
        "Tax planning and strategy development",
        "Advice on tax-saving schemes and exemptions",
        "Support for tax audits and investigations",
        "Filing assistance for tax returns",
        "Representation in front of tax authorities",
      ],
      commercialModel:
        "Pricing is based on the complexity of tax issues and the scope of services required.",
      deliveryTime:
        "Varies based on the scope of consultancy (typically 5–10 working days for standard consultations).",
      pricingFactors: [
        "Type of tax issues (personal, corporate, international)",
        "Scope of advisory and representation required",
        "Number of filings or audits involved",
      ],
      pricingEstimates: "Starts at BDT 3,000",
    },
  },
  {
    title: "VAT Submission",
    description:
      "The VAT Submission service helps businesses comply with local tax regulations by submitting Value Added Tax (VAT) returns to the tax authority. This ensures timely and accurate reporting of VAT on goods and services.",
    details: {
      included: [
        "VAT calculation and verification",
        "Compilation of relevant sales and purchase data",
        "Preparation and submission of VAT returns",
        "Payment of VAT to the tax authorities",
        "Post-submission support and adjustments",
      ],
      commercialModel:
        "Pricing is determined based on the volume of transactions and the complexity of VAT calculations.",
      deliveryTime:
        "5–7 working days (subject to tax authority processing times).",
      pricingFactors: [
        "Business size and transaction volume",
        "Frequency of VAT filings (monthly/quarterly/annually)",
        "Government tax rate and processing fees",
      ],
      pricingEstimates: "Starts at BDT 5,000/month",
    },
  },
  {
    title: "Tax Litigation & Dispute Resolution",
    description:
      "The Tax Litigation & Dispute Resolution service supports businesses in managing tax disputes, responding to tax authority queries, and resolving assessment-related issues in line with applicable tax laws. It helps reduce compliance risks, protect business interests, and ensure proper representation during tax proceedings.",
    details: {
      included: [
        "Review of tax notices and assessment orders",
        "Preparation of written replies and supporting documents",
        "Representation before tax authorities",
        "Assistance in appeal and hearing procedures",
        "Dispute analysis and legal strategy support",
        "Follow-up and coordination until resolution",
      ],
      commercialModel:
        "Pricing is based on the complexity of the dispute, the stage of litigation, and the volume of documentation required.",
      deliveryTime: "Depends on case complexity and authority timelines.",
      pricingFactors: [
        "Nature of tax dispute",
        "Assessment amount involved",
        "Documentation complexity",
        "Number of hearings or representations required",
        "Stage of appeal or litigation",
      ],
      pricingEstimates: "Starts at BDT 75,000",
    },
  },
];

function RouteComponent() {
  return (
    <section className="min-h-screen my-30 flex flex-col max-w-5xl mx-auto gap-8 p-6">
      <div>
        <h1>Problems Docufy Fiscal Addresses</h1>
      </div>

      <div>
        <Accordion type="multiple" className="mt-2 gap-6">
          {solutions.map((solution) => (
            <AccordionItem value={solution.title} key={solution.title}>
              <AccordionTrigger className="hover:no-underline hover:text-primary cursor-pointer flex justify-center items-center">
                <div className="flex flex-col gap-2">
                  <h4 className="leading-none text-accent">{solution.title}</h4>
                  <p className="text-lg text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-6">
                <div>
                  <p className="font-semibold text-lg">What's Included</p>
                  <ul className="list-inside list-disc">
                    {solution.details.included.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <p className="font-semibold text-lg mt-4">Commercial Model</p>
                  <p>{solution.details.commercialModel}</p>
                  <p className="font-semibold text-lg mt-4">Delivery Time</p>
                  <p>{solution.details.deliveryTime}</p>
                  <p className="font-semibold text-lg mt-4">Pricing Factors</p>
                  <ul className="list-inside list-disc">
                    {solution.details.pricingFactors.map((factor) => (
                      <li key={factor}>{factor}</li>
                    ))}
                  </ul>
                  <p className="font-semibold text-lg mt-4">
                    Pricing Estimates
                  </p>
                  <p>{solution.details.pricingEstimates}</p>
                  <p className="text-sm text-secondary italic mt-6">
                    * All charges mentioned represent professional fees only.
                    Any applicable government fees, taxes, or statutory charges
                    will be billed separately in addition to the professional
                    fees.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
