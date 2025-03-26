export interface ProjectType {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
  secondaryColor: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Automated Financial Analysis Dashboard",
    date: "Mar 2025",
    shortDescription: "A dynamic dashboard for financial data visualization & investment insights",
    description: "A comprehensive financial dashboard that visualizes key metrics and provides actionable investment insights for financial analysts and portfolio managers. The system automates data collection from various sources and presents it in an intuitive interface.",
    features: [
      "Real-time market data integration",
      "Custom financial ratio calculators",
      "Investment opportunity scoring system",
      "Portfolio performance tracking",
      "Risk assessment visualization"
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Excel",
      "Financial Analysis",
      "Data Visualization"
    ],
    color: "#0070F3",
    secondaryColor: "#00F5A0"
  },
  {
    id: 2,
    title: "Digital Payment Integration System",
    date: "Aug 2025",
    shortDescription: "Secure payment gateway integration with KYC & AML compliance",
    description: "A secure payment gateway solution that integrates with existing financial systems while ensuring compliance with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations. The system streamlines payment processing while maintaining the highest security standards.",
    features: [
      "Multi-currency support",
      "Automated KYC verification",
      "Real-time fraud detection",
      "Regulatory compliance tracking",
      "Transaction monitoring dashboard"
    ],
    technologies: [
      "SQL",
      "Financial Management",
      "Regulatory Compliance",
      "Payment Processing",
      "Security Protocols"
    ],
    color: "#7928CA",
    secondaryColor: "#0070F3"
  },
  {
    id: 3,
    title: "Loan Eligibility Prediction System",
    date: "Dec 2025",
    shortDescription: "AI-driven loan eligibility checker based on financial history",
    description: "An AI-driven system that predicts loan eligibility based on applicant data including income, credit score, employment history, and existing financial obligations. The system helps financial institutions make data-backed lending decisions while reducing risk.",
    features: [
      "Automated credit scoring",
      "Risk assessment algorithms",
      "Customer segmentation",
      "Approval probability prediction",
      "Default risk estimation"
    ],
    technologies: [
      "Excel",
      "Financial Analysis",
      "Credit Scoring",
      "Data Analytics",
      "Risk Assessment"
    ],
    color: "#00F5A0",
    secondaryColor: "#7928CA"
  }
];
