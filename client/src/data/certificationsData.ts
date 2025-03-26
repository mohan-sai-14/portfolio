export interface Certification {
  title: string;
  issuer: string;
  category: string;
  icon: string;
  color: string;
}

export const certifications: Certification[] = [
  {
    title: "Build & Grow Business using WhatsApp",
    issuer: "NIESBUD, Meta, India",
    category: "Business Development",
    icon: "fab fa-whatsapp",
    color: "#0070F3"
  },
  {
    title: "SAP - Financial Management",
    issuer: "Business Integration Certification",
    category: "Financial Systems",
    icon: "fas fa-coins",
    color: "#7928CA"
  },
  {
    title: "Deep Learning",
    issuer: "Neural Networks & Business Analytics",
    category: "AI & Data Analysis",
    icon: "fas fa-brain",
    color: "#00F5A0"
  }
];
