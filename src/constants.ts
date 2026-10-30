import type { TeamMember } from "@/components/blocks/team-showcase";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "moon-bmda",
    name: "Md Farhan Mahmud Moon",
    role: "Business and Management Development Advisor",
    imageURL: "https://docufybd.com/moon.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/1farhanmahmud/",
      X: "https://x.com/1farhanmahmud",
    },
  },
  {
    id: "sneha-ceo",
    name: "Sneha Salam",
    role: "Founder & Chief Executive Officer",
    imageURL: "https://docufybd.com/sneha.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/sneha-salam/",
      website: "https://snehasalam.com",
      X: "https://x.com/SalamSneha",
    },
  },
  {
    id: "ashik-clo",
    name: "Md Izaz Uddin Ashik",
    role: "Chief Legal Officer",
    imageURL: "https://docufybd.com/ashik.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/md-izaz-uddin-258788121/",
    },
  },
  {
    id: "ratul-cto",
    name: "Rakibul Hasan Ratul",
    role: "Chief Technology Officer",
    imageURL: "https://docufybd.com/ratul.webp",
    socialLinks: {
      LinkedIn: "https://www.linkedin.com/in/rhasanratul",
      X: "https://x.com/RHasanRatul",
    },
  },
];

type QuestionnaireItems = { question: string; answer: string }[];
type FAQItems = { category: string; questionnaire: QuestionnaireItems }[];

export const faqItems: FAQItems = [
  {
    category: "General Questions",
    questionnaire: [
      {
        question: "What is Docufy Fiscal?",
        answer:
          "Docufy Fiscal is a tax, VAT, and fiscal compliance service provider under Docufy. We help individuals, businesses, and companies manage tax filing, VAT filing, tax consultancy, tax litigation support, and RJSC return submission.",
      },
      {
        question: "Who can take services from Docufy Fiscal?",
        answer:
          "Our services are suitable for individuals, entrepreneurs, startups, companies, partnerships, and established businesses that need support with tax, VAT, and regulatory compliance.",
      },
      {
        question: "Why should I choose Docufy Fiscal?",
        answer:
          "Docufy Fiscal focuses on accuracy, confidentiality, timely submission, and professional guidance. We help clients stay compliant while reducing the complexity of tax and VAT-related processes.",
      },
      {
        question: "Does Docufy Fiscal provide online services?",
        answer:
          "Yes. Many of our services can be handled online through proper document sharing, consultation, and follow-up. For complex matters, in-person meetings may also be arranged if needed.",
      },
      {
        question:
          "Is my financial and personal information safe with Docufy Fiscal?",
        answer:
          "Yes. We treat client information with strict confidentiality and use it only for the purpose of providing the requested service.",
      },
    ],
  },
  {
    category: "Income Tax Filing",
    questionnaire: [
      {
        question: "Do you provide income tax filing services for individuals?",
        answer:
          "Yes. We assist individuals with preparing and submitting their income tax returns accurately and on time.",
      },
      {
        question: "What documents are needed for individual income tax filing?",
        answer:
          "Commonly required documents include your TIN certificate, NID, salary certificate, bank statements, investment documents, asset details, and any other income-related records. The exact requirements may vary based on your income source.",
      },
      {
        question: "Can you help if I have never filed a tax return before?",
        answer:
          "Yes. We guide first-time taxpayers through the entire process, including document preparation, return filing, and basic tax compliance understanding.",
      },
      {
        question: "Can you help salaried individuals with tax filing?",
        answer:
          "Yes. We provide income tax filing support for salaried individuals, including calculation of taxable income, eligible rebates, and proper documentation.",
      },
    ],
  },
  {
    category: "Company Tax Filing",
    questionnaire: [
      {
        question: "Do you provide company tax return filing services?",
        answer:
          "Yes. We help companies prepare and submit corporate tax returns with proper supporting documents and compliance review.",
      },
      {
        question: "What types of businesses can you support?",
        answer:
          "We support private limited companies, sole proprietorships, partnerships, startups, SMEs, and other business entities.",
      },
      {
        question: "Can you help with tax planning for businesses?",
        answer:
          "Yes. We provide tax consultancy to help businesses understand their tax obligations, manage compliance, and plan more efficiently within the legal framework.",
      },
      {
        question:
          "Do you review business financial documents before filing tax returns?",
        answer:
          "Yes. We review relevant financial documents, income records, expense details, and compliance documents before preparing the tax return.",
      },
    ],
  },
  {
    category: "VAT Filing",
    questionnaire: [
      {
        question: "Does Docufy Fiscal provide VAT filing services?",
        answer:
          "Yes. We assist businesses with VAT return preparation and submission.",
      },
      {
        question: "Who needs VAT filing support?",
        answer:
          "Businesses that are VAT-registered or required to maintain VAT compliance may need VAT filing support.",
      },
      {
        question: "Can you help with monthly VAT return submission?",
        answer:
          "Yes. We provide support for regular VAT return preparation, documentation, and submission.",
      },
      {
        question: "Can you help businesses understand VAT compliance?",
        answer:
          "Yes. We provide VAT consultancy to help businesses understand documentation, reporting requirements, and compliance responsibilities.",
      },
    ],
  },
  {
    category: "Tax Litigation & Dispute Resolution",
    questionnaire: [
      {
        question: "Does Docufy Fiscal handle tax litigation matters?",
        answer:
          "Yes. We provide support for tax litigation and dispute resolution, including document preparation, case review, advisory support, and coordination with relevant professionals where required.",
      },
      {
        question: "Can you help if I receive a tax notice?",
        answer:
          "Yes. We can review the notice, explain the issue, prepare necessary documents, and guide you through the response process.",
      },
      {
        question: "Can you represent clients in tax disputes?",
        answer:
          "Representation depends on the nature of the case and applicable legal requirements. We can assist with preparation, advisory support, and coordination with authorized professionals when needed.",
      },
      {
        question: "What should I do after receiving a tax-related notice?",
        answer:
          "You should avoid ignoring it. Contact Docufy Fiscal with the notice and relevant documents so we can review the matter and suggest the next steps.",
      },
    ],
  },
  {
    category: "Tax Consultancy",
    questionnaire: [
      {
        question: "What type of tax consultancy does Docufy Fiscal provide?",
        answer:
          "We provide consultancy on individual tax, business tax, corporate tax, VAT compliance, tax planning, documentation, and dispute-related matters.",
      },
      {
        question: "Can you help me understand my tax obligations?",
        answer:
          "Yes. We explain your tax responsibilities in a simple and practical way based on your income, business type, and compliance situation.",
      },
      {
        question: "Do you provide consultancy for startups and new businesses?",
        answer:
          "Yes. We help startups and new businesses understand tax registration, filing requirements, VAT matters, and basic compliance needs.",
      },
      {
        question: "Can you help reduce tax-related risks for my business?",
        answer:
          "Yes. We help identify compliance gaps, organize documentation, and guide businesses toward better tax and VAT management.",
      },
    ],
  },
  {
    category: "RJSC Return Submission",
    questionnaire: [
      {
        question: "Does Docufy Fiscal provide RJSC return submission services?",
        answer:
          "Yes. We assist companies with RJSC return submission and related compliance documentation.",
      },
      {
        question: "Why is RJSC return submission important?",
        answer:
          "RJSC return submission helps a company maintain proper statutory compliance and keep its company records updated with the relevant authority.",
      },
      {
        question:
          "What documents are usually needed for RJSC return submission?",
        answer:
          "Common documents may include company information, director and shareholder details, annual return-related documents, financial records, and other statutory documents depending on the company’s situation.",
      },
      {
        question: "Can you help if my company has pending RJSC returns?",
        answer:
          "Yes. We can review the pending status, identify required documents, and guide you through the submission process.",
      },
    ],
  },
  {
    category: "Service Process",
    questionnaire: [
      {
        question: "How can I take a service from Docufy Fiscal?",
        answer:
          "You can contact us, share your requirements, submit the necessary documents, and our team will guide you through the next steps.",
      },
      {
        question: "How long does the process take?",
        answer:
          "The timeline depends on the type of service, document availability, and complexity of the matter. Simple filings may take less time, while corporate, VAT, or dispute-related matters may require more detailed review.",
      },
      {
        question: "Do I need to provide physical documents?",
        answer:
          "In many cases, scanned copies or digital documents may be sufficient. However, some matters may require physical documents depending on the service requirements.",
      },
      {
        question: "Can Docufy Fiscal handle urgent tax or VAT matters?",
        answer:
          "Yes. We may handle urgent matters depending on the deadline, document readiness, and complexity of the case.",
      },
      {
        question:
          "Do you only file returns, or do you also guide clients after submission?",
        answer:
          "We provide both filing and advisory support. After submission, we can also guide clients regarding records, future compliance, and follow-up requirements.",
      },
      {
        question: "How can I contact Docufy Fiscal?",
        answer:
          "You can contact Docufy Fiscal through our official website, email, or social media channels. Our team will review your query and guide you accordingly.",
      },
    ],
  },
] as const;
