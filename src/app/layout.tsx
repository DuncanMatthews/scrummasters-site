import type { Metadata } from "next";
import { Manrope, Inter, Roboto, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import { getServerSession } from "next-auth";
import SessionProvider from "./providers";
import { redirect } from "next/navigation";
import HomeFooter from "@/components/landing/HomeFooter";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ScrumMasterHub",
    template: "%s | ScrumMasterHub",
  },
  description:
    "Unlock your potential as a Scrum Master. Learn advanced Scrum techniques, connect with a vibrant community, and elevate your Scrum skills.",
  openGraph: {
    title: "ScrumMasterHub",
    description:
      "Unlock your potential as a Scrum Master. Learn advanced Scrum techniques, connect with a vibrant community, and elevate your Scrum skills.",
    url: "https://www.scrummasterhub.com",
    siteName: "ScrumMasterHub",
    images: [
      {
        url: "https://www.scrummasterhub.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "ScrumMasterHub",
    card: "summary_large_image",
    description:
      "Unlock your potential as a Scrum Master. Learn advanced Scrum techniques, connect with a vibrant community, and elevate your Scrum skills.",
    images: ["https://www.scrummasterhub.com/og-image.jpg"],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} dark px-10`}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
      <HomeFooter />
    </html>
  );
}