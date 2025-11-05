// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";

import {
    siteOgImage,
    siteOgImageAlt,
    siteTagline,
    siteTitle,
} from "@/lib/seo";

const deploymentUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const metadata: Metadata = {
    title: {
        default: siteTitle,
        template: `%s | ${siteTitle}`,
    },
    description: siteTagline,
    metadataBase: deploymentUrl ? new URL(deploymentUrl) : undefined,
    openGraph: {
        type: "website",
        title: siteTitle,
        description: siteTagline,
        ...(deploymentUrl ? { url: deploymentUrl } : {}),
        images: [
            {
                url: siteOgImage,
                width: 1200,
                height: 630,
                alt: siteOgImageAlt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteTagline,
        images: [siteOgImage],
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.png", type: "image/png" },
        ],
        shortcut: ["/favicon.ico"],
        apple: [{ url: "/favicon.png" }],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className="bg-background text-foreground">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
