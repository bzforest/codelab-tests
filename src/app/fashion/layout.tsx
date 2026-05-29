import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion & Lifestyle | Codelabs",
  description: "Modern & Premium Fashion Landing Page",
};

export default function FashionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="theme-fashion min-h-screen bg-wave-gradient text-foreground font-sans">
      {children}
    </div>
  );
}