export type CertificateCategory =
  | "Programming"
  | "Web Development"
  | "Artificial Intelligence"
  | "Research"
  | "Competition"
  | "Teaching"
  | "Leadership"
  | "UI/UX";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo: string;
  thumbnail: string;
  category: CertificateCategory;
  credentialId: string;
  issueDate: string;
  verifyUrl: string;
  featured?: boolean;
}

export const categoryColors: Record<CertificateCategory, string> = {
  Programming: "#2563EB",
  "Web Development": "#7C3AED",
  "Artificial Intelligence": "#FACC15",
  Research: "#22C55E",
  Competition: "#EF4444",
  Teaching: "#2563EB",
  Leadership: "#7C3AED",
  "UI/UX": "#22C55E",
};

export const certificateCategories: (CertificateCategory | "All")[] = [
  "All",
  "Programming",
  "Web Development",
  "Artificial Intelligence",
  "Research",
  "Competition",
  "Teaching",
  "Leadership",
  "UI/UX",
];

export const certificateStats = [
  { value: 0, suffix: "", label: "Total Sertifikat", display: "-" },
  { value: 0, suffix: "", label: "Bidang Keahlian", display: "-" },
  { value: 0, suffix: "", label: "Pencapaian", display: "-" },
  { value: 0, suffix: "", label: "Rentang Tahun", display: "-" },
];

export const certificates: Certificate[] = [];

export const certificateTimeline = [2021, 2022, 2023, 2024, 2025, 2026];