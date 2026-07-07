import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Book ID | Get Official Mahadev Book ID Instantly",
  description:
    "Get your official Mahadev Book ID instantly via WhatsApp. Secure cricket betting, casino games, UPI deposits & 24/7 support at mahadev.guru.",
  alternates: { canonical: "https://mahadev.guru/mahadev-book-id" },
  openGraph: {
    title: "Mahadev Book ID | Get Your Official Betting Account",
    description: "Get your official Mahadev Book ID instantly — secure betting, UPI deposits & 24/7 support.",
    url: "https://mahadev.guru/mahadev-book-id",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book ID | Get Your Official Betting Account",
    description: "Get your Mahadev Book ID instantly at mahadev.guru.",
  },
};

export default function MahadevBookIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
