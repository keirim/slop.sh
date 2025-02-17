import Head from "next/head";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import GridPattern from "@/components/ui/grid-pattern";
import "./globals.css";
import type React from "react";

export const metadata: Metadata = {
  title: "slop.sh - A Developer's Hub",
  description: "Welcome to slop.sh, a hub for web development projects and experiments.",
  icons: [
    {
      url: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://slop.sh",
    title: "slop.sh - A Developer's Hub",
    description: "Welcome to slop.sh, a hub for web development projects and experiments.",
    images: [
      {
        url: "/meta.png",
        width: 900,
        height: 900,
        alt: "Slop",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://slop.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>slop.sh - A Developer's Hub</title>
        <meta name="description" content="Welcome to slop.sh, a hub for web development projects and experiments." />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slop.sh" />
        <meta property="og:title" content="slop.sh - A Developer's Hub" />
        <meta property="og:description" content="Welcome to slop.sh, a hub for web development projects and experiments." />
        <meta property="og:image" content="/meta.png" />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="slop" />
      </Head>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GridPattern
            className="fixed inset-0 text-primary/10 z-0"
            height={50}
            width={50}
            style={{ opacity: 0.1 }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
